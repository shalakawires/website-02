# Shalaka Wires LLP Website Blueprint

## Project Overview
This project aims to create a modern, responsive, and user-friendly website for Shalaka Wires LLP, a manufacturer of MS wire products. The website will showcase the company's products and provide essential information to potential clients.

## Features
*   **Home Page:** Introduction to Shalaka Wires LLP, highlights of products, and key company information.
*   **About Us Page:** Detailed company history, mission, vision, values, and a section on the manufacturing plant with descriptions and photos of various machines.
*   **Products Page:** Comprehensive listing and description of MS wire products (binding wire, MS wire nails, GI wire, chain link, mesh, etc.). Now includes image carousels for products with multiple images.
*   **Contact Us Page:** Contact form, company address, phone number, and email.
*   **Navigation:** Intuitive navigation bar for easy access to all pages.
*   **Quality Page:** Information about the company's commitment to quality with a relevant image and a table of MS Wire Sizes & Tolerance.

## Plan for current change
*   **Integrate Image Carousels in About Us Page:**
    *   Import `Carousel` component from `react-responsive-carousel`.
    *   For machines with multiple images, replace `CardMedia` with `Carousel`.
    *   Inside `Carousel`, dynamically render `img` tags for each image.
    *   Configure `Carousel` for auto-play, infinite loop, and a 3-second interval.