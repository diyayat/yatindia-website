"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface GetStartedContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const GetStartedContext = createContext<GetStartedContextType | undefined>(undefined)

export function GetStartedProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <GetStartedContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </GetStartedContext.Provider>
  )
}

export function useGetStarted() {
  const context = useContext(GetStartedContext)
  if (context === undefined) {
    throw new Error("useGetStarted must be used within a GetStartedProvider")
  }
  return context
}



