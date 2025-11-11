"use client"

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: {
        sitekey: string
        callback?: (token: string) => void
        'error-callback'?: () => void
        'expired-callback'?: () => void
      }) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

interface CaptchaProps {
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
}

export function Captcha({ onVerify, onError, onExpire }: CaptchaProps) {
  const captchaRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const callbacksRef = useRef({ onVerify, onError, onExpire })
  const isRenderedRef = useRef(false)

  // Update callbacks ref when they change, but don't trigger re-render
  useEffect(() => {
    callbacksRef.current = { onVerify, onError, onExpire }
  }, [onVerify, onError, onExpire])

  useEffect(() => {
    // Prevent multiple renders of the same widget
    if (isRenderedRef.current || widgetIdRef.current) {
      return
    }

    const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY

    if (!siteKey || siteKey === 'your_site_key_here' || siteKey.includes('your_')) {
      console.error('❌ Cloudflare Turnstile site key not configured!')
      console.error('Please replace "your_site_key_here" with your actual site key in .env.local')
      // Show a visible error message
      if (captchaRef.current) {
        captchaRef.current.innerHTML = `
          <div style="padding: 15px; background: #fee; border: 1px solid #fcc; border-radius: 5px; color: #c33;">
            <strong>⚠️ CAPTCHA Configuration Required</strong><br/>
            Please update your .env.local file with your actual Cloudflare Turnstile Site Key.<br/>
            <small>Get your key from: <a href="https://dash.cloudflare.com/" target="_blank" style="color: #c33;">Cloudflare Dashboard → Turnstile</a></small>
          </div>
        `
      }
      return
    }

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')
    
    const loadTurnstile = () => {
      // Double check to prevent multiple renders
      if (captchaRef.current && window.turnstile && !widgetIdRef.current && !isRenderedRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(captchaRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              // Use the latest callbacks from ref
              callbacksRef.current.onVerify(token)
            },
            'error-callback': () => {
              if (callbacksRef.current.onError) {
                callbacksRef.current.onError()
              }
            },
            'expired-callback': () => {
              if (callbacksRef.current.onExpire) {
                callbacksRef.current.onExpire()
              }
            },
          })
          isRenderedRef.current = true
        } catch (error) {
          console.error('Error rendering Turnstile widget:', error)
        }
      }
    }

    if (existingScript) {
      // Script already exists, just render the widget
      if (window.turnstile) {
        loadTurnstile()
      } else {
        // Wait for script to load
        const handleLoad = () => {
          loadTurnstile()
          existingScript.removeEventListener('load', handleLoad)
        }
        existingScript.addEventListener('load', handleLoad)
      }
    } else {
      // Load Cloudflare Turnstile script
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.defer = true
      script.id = 'cloudflare-turnstile-script'

      script.onload = loadTurnstile

      document.body.appendChild(script)
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch (error) {
          console.error('Error removing Turnstile widget:', error)
        }
        widgetIdRef.current = null
        isRenderedRef.current = false
      }
    }
  }, []) // Empty dependency array - only run once on mount

  return <div ref={captchaRef} />
}

