# Blueprint

## Overview

This document outlines the structure and implementation details of the Shalaka Wires web application, a React-based project showcasing the company's products and information.

## Project Structure

- `src/`
  - `components/`: Contains reusable UI components like `Header`, `Footer`, etc.
  - `pages/`: Contains the main page components for different routes, such as `Home`, `About`, `Products`, `Quality`, `Contact`, and `ProductDetail`.
  - `hooks/`: Contains custom React hooks, including the `useTitle` hook for managing page titles and meta descriptions.
  - `App.jsx`: The main application component, responsible for routing.
  - `main.jsx`: The entry point of the application.

## Implemented Features

- **Component-Based Architecture:** The application is built using a modular, component-based architecture, which makes it easy to manage and scale.
- **Routing:** The application uses `react-router-dom` for client-side routing, enabling seamless navigation between pages without full page reloads.
- **Styling:** The application uses Material-UI for styling, providing a consistent and modern look and feel. The theme is customized to match the company's branding.
- **Custom Hooks:** A custom hook, `useTitle`, has been implemented to manage the document title and meta description for each page. This centralizes the logic for SEO and improves code reusability.
- **Responsive Design:** The application is designed to be responsive and work on all devices, from desktops to mobile phones.
- **Image Optimization:** The application uses `vite-plugin-image-optimizer` to optimize images, improving loading performance.
- **Product Detail Pages:** Each product has its own dedicated page with detailed information, specifications, and images.
- **Dynamic Footer:** The footer is dynamically generated and includes quick links, product links, and contact information.

## Key Components

- **Header:** The header component contains the company logo, navigation links, and a call-to-action button.
- **Footer:** The footer component contains contact information, social media links, and a sitemap. The "Products Link" and "Get In Touch" titles are linked to their respective pages.
- **Product Card:** A reusable component for displaying product information in a visually appealing way.
- **Carousel:** The application uses `react-responsive-carousel` to display a slideshow of images on the home page and product detail pages.

## SEO and Metadata

The `useTitle` hook is a custom hook that takes a title and a description as arguments and updates the document's title and meta description accordingly. This hook is used in each page component to provide unique and relevant metadata for each page, improving SEO and user experience.

### `useTitle` Hook

```javascript
import { useEffect } from 'react';

function useTitle(title, description) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('name', 'description');
      newMeta.setAttribute('content', description);
      document.head.appendChild(newMeta);
    }
  }, [title, description]);
}

export default useTitle;
```

This hook is a more efficient and centralized way to manage page metadata compared to using a third-party library like `react-helmet-async`.
