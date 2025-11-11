# Hostinger Deployment Guide - Website

## Prerequisites
- Hostinger shared hosting account
- FTP/SFTP access or File Manager access
- Node.js installed locally (for building)

## Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the static site:**
   ```bash
   npm run build
   ```
   This will create an `out` directory with all static files.

3. **Verify .htaccess file:**
   After build, check that `out/.htaccess` exists. If not, copy it manually:
   ```bash
   cp public/.htaccess out/.htaccess
   ```

## Upload to Hostinger

1. **Connect to your Hostinger hosting:**
   - Use FTP/SFTP client (FileZilla, WinSCP, etc.)
   - Or use Hostinger's File Manager

2. **Upload all files from `out` directory:**
   - Upload everything inside the `out` folder
   - Upload to your domain's `public_html` folder (or subdomain folder)
   - Make sure `.htaccess` is uploaded (it's a hidden file, enable "Show hidden files" in your FTP client)

3. **File structure on server should be:**
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── _next/
   ├── (other files and folders)
   ```

## Important Notes

- ✅ The `.htaccess` file handles client-side routing
- ✅ All routes will work correctly (e.g., `/about`, `/services`, `/work`, etc.)
- ✅ The build script automatically copies `.htaccess` to the output directory
- ⚠️ Make sure `.htaccess` file is uploaded (it's hidden by default)
- ⚠️ If routes don't work, check that `.htaccess` exists in the root directory

## Troubleshooting

### Routes return 404
- Check that `.htaccess` file exists in the root directory
- Verify mod_rewrite is enabled on Hostinger (usually enabled by default)
- Check file permissions (`.htaccess` should be readable)

### Build fails
- Make sure you have Node.js installed
- Run `npm install` first
- Check for any TypeScript or build errors

### Files not uploading
- Enable "Show hidden files" in your FTP client
- Make sure you're uploading from the `out` directory, not the project root

