# Modern React Company Portfolio Template

This project is a modern React implementation of a company portfolio template, built with:

- React 18
- TypeScript
- Tailwind CSS 3.3
- Vite + SWC for fast builds
- Modern CSS features (container queries, CSS variables, etc.)

## Project Origin & Purpose

This template is a modern adaptation of the original design by [W3Schools](https://www.w3schools.com/w3css/w3css_templates.asp). The project aims to transform traditional HTML/CSS templates into component-based React applications that align with current industry standards.

The primary motivation behind this conversion was to create organized, modular templates that enable developers to easily identify, extract, and reuse components across projects—addressing the challenge of navigating through dense, monolithic codebases.

## Project Structure

The application is organized into component-based architecture, where each section of the page is a separate component with its own CSS module.

### Key Features

- Fully responsive design using Tailwind CSS and custom media queries
- Component-based architecture for easy maintenance and reusability
- Modern CSS practices including CSS variables, container queries, and grid layouts
- TypeScript for type safety
- Interactive image gallery with modal view
- Mobile-friendly navigation with sidebar

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Components

- **Navbar**: Top navigation bar with responsive design
- **Sidebar**: Mobile navigation sidebar
- **Hero**: Full-screen landing section
- **About**: Company features section
- **Promo**: Promotional section with image and text
- **Team**: Team members grid
- **Statistics**: Key metrics display
- **Work**: Portfolio gallery with modal view
- **Skills**: Skills progress bars section
- **Pricing**: Service pricing options
- **Contact**: Contact form and information
- **Footer**: Page footer with social links

## Customization

Each component is designed to be easily customizable. You can modify the following:

- Colors: Edit the CSS variables in `src/index.css`
- Layout: Adjust the container widths in `tailwind.config.js`
- Content: Update text and images in each component file
- Styling: Modify the CSS modules for each component

## Images

This project uses images stored in the `/public/img/` directory. You can replace these with your own images as needed.

```tsx
// Example usage in a component
function MyComponent() {
  return (
    <img src="/img/example-image.jpg" alt="Description" />
  );
}
```

## Related Projects

This template is part of a broader initiative to develop a free UI kit using React, TypeScript, Vite, and Tailwind CSS. The UI kit is specifically designed for students and beginners who may not have the resources to purchase premium design assets but still need professional-quality components for their projects.

## Technical Implementation

The conversion process involved several technical considerations:

1. **Component Isolation**: Each UI section is isolated into its own component with encapsulated styles
2. **TypeScript Integration**: Addition of type safety to improve development experience and reduce runtime errors
3. **Modern CSS Techniques**: Implementation of advanced CSS features while maintaining compatibility
4. **Performance Optimization**: Using Vite and SWC for faster build times and development experience

## Credits

- Original design by [W3Schools](https://www.w3schools.com)
- React implementation and modernization by the repository owner
- Documentation and code refinement assistance provided by GitHub Copilot, Claude, and ChatGPT

## License

MIT
