# Project Blueprint

## Overview
This document outlines the current state and planned improvements for the React application. The goal is to enhance performance, accessibility, and SEO based on recent Lighthouse audit findings, while adhering to modern React practices.

## Detailed Outline of Application Features and Styles

### Initial Structure
The application is a React project initialized with Vite. It features a multi-page structure with routing for Home, About, Contact, Products, and Quality pages. Styling is likely handled through CSS modules or direct CSS imports.

### Styling
The application uses a combination of global CSS (`src/index.css`, `src/App.css`) and potentially inline styles or component-specific CSS. Components like `Footer.jsx` and various page components (`About.jsx`, `Contact.jsx`, etc.) contribute to the overall UI.

### Navigation
The application uses `react-router-dom` for navigation between pages (Home, About, Contact, Products, Quality).

### Image Usage
The application utilizes images for product displays and plant visuals, stored in `public/plant-images/` and `public/product-images/`.

### Sitemap
A `sitemap.xml` file has been created in the `public` directory. The content has been updated to reflect a simpler structure with only the main domain `https://www.shalakawires.com/` as requested by the user. This is to aid search engine crawling and indexing.

## Plan for Current Requested Change: Lighthouse Audit Remediation

The following steps will be taken to address the issues identified in the Lighthouse audit:

### 1. Performance Optimization
*   **Image Optimization:** Resize and convert existing images to WebP format for improved loading times and reduced network payload. Implement lazy loading for offscreen images.
*   **Component Lazy Loading:** Implement `React.lazy` and `Suspense` for page components to reduce initial JavaScript bundle size and improve First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
*   **Minify JavaScript/CSS:** Ensure Vite's build process is configured for optimal minification and tree-shaking.
*   **Address Render-Blocking Resources:** Investigate and optimize CSS and JavaScript loading to prevent render-blocking.

### 2. Accessibility Improvements
*   **Descriptive Links:** Ensure all `<a>` tags have discernible names (either through visible text or `aria-label`).
*   **Meaningful Alt Text:** Review and refine `alt` attributes for all `<img>` tags to be descriptive and non-redundant.
*   **Semantic HTML for Lists:** Verify that `<ul>` and `<ol>` elements contain only `<li>` elements or script-supporting elements.
*   **Touch Target Size:** Review interactive elements to ensure they have sufficient size and spacing for touch interactions.
*   **Heading Hierarchy:** Correct the sequential order of heading elements (`<h1>` through `<h6>`).
*   **Correct ARIA Usage:** Ensure ARIA roles are used on compatible elements.

### 3. Best Practices & Security
*   **HTTPS Enforcement:** Check for and update any hardcoded `http://` links to `https://`. While server-side configuration is primary, client-side consistency is important.
*   **Console Errors:** Address any browser errors logged to the console during development.

### 4. SEO Enhancements
*   **Meta Description:** Add a default meta description to `index.html` and consider dynamic meta descriptions for individual pages.
*   **Valid robots.txt:** Create or correct a `robots.txt` file in the public directory to properly guide crawlers.

## Actionable Steps:

1.  **Image Optimization Script/Manual:** (Detailed steps to follow in subsequent actions)
2.  **Modify `src/main.jsx` for Lazy Loading.**
3.  **Review and Update Components for Accessibility.**
4.  **Update `index.html` for Meta Description.**
5.  **Create `public/robots.txt`.**
6.  **Review all files for `http://` links.**

## Known Issues and Resolutions

### Sitemap "Couldn't fetch" Error
The "Couldn't fetch" error reported in Google Search Console for the `sitemap.xml` is typically not an issue with the sitemap file's content itself. The sitemap is correctly formatted.

**To resolve this, please check the following Firebase App Hosting domain configurations:**

*   **DNS Records Propagation:** Verify that your DNS A records have propagated correctly from your domain name provider to Firebase App Hosting servers. This can sometimes take up to 24 hours. Ensure your records are pointed to Firebase App Hosting as per their instructions.
*   **Invalid Challenge Code:** If using the Advanced Setup flow and migration failed, your token (and its challenge code) might be invalid. Go to your Firebase console, view the domain, and provide the new token to your existing domain.
*   **Too Many Subdomains:** Firebase Hosting generally recommends no more than 20 subdomains on one apex custom domain due to SSL certificate minting limits. If you have many subdomains, review this limitation.

This blueprint will be updated as changes are implemented and further issues are identified or resolved.
