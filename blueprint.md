# Shalaka Wires Website Blueprint

## Project Overview
The Shalaka Wires website is a React application designed to showcase their products and manufacturing capabilities. It includes sections for Home, About, Products, Product Detail, Quality, and Contact. The site aims to be visually appealing, responsive, and performant.

## Current Application Features
*   **Navigation:** Uses `react-router-dom` for navigation between different pages.
*   **Components:** Includes `Footer` and `ScrollToTop` components.
*   **Styling:** Uses `App.css` and `index.css`.
*   **Image Usage:** The application utilizes images for product displays and plant visuals, stored in `public/plant-images/` and `public/product-images/`.

### Sitemap
A `sitemap.xml` file has been created in the `public` directory. The content has been updated to reflect a simpler structure with only the main domain `https://www.shalakawires.com/` as requested by the user. This is to aid search engine crawling and indexing.

## Plan for Current Requested Change: Lighthouse Audit Remediation

The following steps will be taken to address the issues identified in the Lighthouse audit:

### 1. Performance Optimization
*   **Image Optimization:** Resize and convert existing images to WebP format for improved loading times and reduced network payload. Implement lazy loading for offscreen images.
*   **Component Lazy Loading:** Implement `React.lazy` and `Suspense` for page components to reduce initial JavaScript bundle size and improve First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
*   **Minify JavaScript/CSS:** Ensure Vite's build process is configured for optimal minification and tree-shaking.
*   **Address Render-Blocking Resources:** Investigate and optimize CSS and JavaScript loading to prevent render-blocking.
*   **Optimize JavaScript:** Review and optimize JavaScript code to minimize main-thread work and reduce execution time.
*   **Configure HTTP/2:** Investigate and ensure the hosting environment is configured to serve assets over HTTP/2.

### 2. Accessibility Improvements
*   **Link Names:** Ensure all links have discernible names, either through descriptive text or `aria-label` attributes.
*   **Image Alt Text:** Review and refine image `alt` attributes to be concise and non-redundant.
*   **Touch Target Size:** Adjust the styling of interactive elements to meet minimum touch target size and spacing recommendations.
*   **Heading Order:** Verify and correct the hierarchical order of heading elements (h1, h2, h3, etc.).

### 3. Best Practices & Security Enhancements
*   **HTTPS Enforcement:** Investigate and configure the hosting environment to use HTTPS and redirect HTTP traffic to HTTPS.
*   **Security Headers:** Implement appropriate security headers (CSP, HSTS, XFO, Trusted Types) in the web server or application configuration.
*   **Browser Errors:** Investigate and fix any browser errors logged to the console.
*   **Source Maps:** Ensure source maps are generated correctly during the build process for easier debugging.

### 4. SEO Enhancements
*   **Meta Description:** Add a meta description to the `index.html` file or implement dynamic generation.
*   **robots.txt Validation:** Correct any errors in the `robots.txt` file.
