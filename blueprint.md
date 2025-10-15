# Shalaka Wires LLP Website Blueprint

## Project Overview
This project aims to create a modern, responsive, and user-friendly website for Shalaka Wires LLP, a manufacturer of MS wire products. The website will showcase the company's products and provide essential information to potential clients.

## Design and Style Guidelines
*   **Color Scheme:**
    *   Primary Blue: `#005a9e` (with minor corrections in shades)
    *   Secondary Grey: `#414042` or `#808285` (with minor corrections in shades)
    *   Background: White
*   **Typography:** System UI, Avenir, Helvetica, Arial, sans-serif. Emphasis on readability and clear hierarchy.
*   **Components:** Material-UI (MUI) will be used for its comprehensive suite of components and adherence to Material Design principles, ensuring a polished and accessible user experience.
*   **Responsiveness:** The website will be fully responsive, adapting to various screen sizes (desktop, tablet, mobile).
*   **Visual Aesthetics:** Clean layout, balanced spacing, modern iconography, and subtle visual effects.

## Features
*   **Home Page:** Introduction to Shalaka Wires LLP, highlights of products, and key company information.
*   **About Us Page:** Detailed company history, mission, vision, and values.
*   **Products Page:** Comprehensive listing and description of MS wire products (binding wire, MS wire nails, GI wire, chain link, mesh, etc.). Now includes image carousels for products with multiple images.
*   **Contact Us Page:** Contact form, company address, phone number, and email.
*   **Navigation:** Intuitive navigation bar for easy access to all pages.
*   **Quality Page:** Information about the company's commitment to quality with a relevant image and a table of MS Wire Sizes & Tolerance.

## Current Plan and Steps
1.  **Install Dependencies:** Install `react-router-dom`, `@mui/material`, `@emotion/react`, `@emotion/styled`, and `react-responsive-carousel`.
2.  **Update `src/index.css`:** Configure global styles and color variables based on the specified color scheme.
3.  **Create Page Components:**
    *   `src/pages/Home.jsx`
    *   `src/pages/About.jsx`
    *   `src/pages/Products.jsx`
    *   `src/pages/Contact.jsx`
    *   `src/pages/Quality.jsx`
4.  **Configure Routing:** Set up `BrowserRouter`, `Routes`, and `Route` in `src/App.jsx` to handle navigation.
5.  **Implement Navigation Bar:** Create a responsive navigation bar using MUI components, incorporating the company name and navigation links.
6.  **Populate Content (Initial):** Add placeholder content to each page.
7.  **Apply Theming:** Create an MUI theme with the specified color palette and apply it to the application.
8.  **Initial Styling:** Apply basic styling to pages and components, ensuring adherence to the design guidelines.
9.  **Error Check:** Run linting, dependency checks, and monitor the preview server for any issues.
10. **Product Image Integration:** Integrated product images into `src/pages/Products.jsx`, with a sliding carousel for products having multiple images.
11. **Update Quality Page Image:** Replaced two image placeholders in `src/pages/Quality.jsx` with a single image from the `public` folder (`/Qualiity Lab - 1.png`) and added a caption below it.
12. **Update Quality Page Content:** Replaced the "Key Aspects of Our Quality Assurance" list with a table displaying "Specifications: MS Wire Sizes & Tolerance".