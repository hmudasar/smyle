# Components Directory

## Component Library Overview
Reusable UI components for the Smile landing page built with React 19 and TypeScript.

## Core Components

### Layout Components
- **Header.tsx**: Main navigation with responsive menu
- **Footer.tsx**: Site footer with links and company info
- **Breadcrumb.tsx**: Navigation breadcrumbs

### UI Components
- **Button.tsx**: Primary button component with variants
- **Heading.tsx**: Typography component for consistent heading styles
- **Loader.tsx**: Loading states and skeleton components
- **ProgressiveImage.tsx**: Optimized image loading with lazy loading

### Content Components
- **Banner.tsx**: Hero/banner sections
- **Features.tsx**: Feature showcase grid
- **Testimonials.tsx**: Customer testimonial carousel
- **FAQs.tsx**: Expandable FAQ section
- **Download.tsx**: App download call-to-action
- **AboutUs.tsx**: About section content
- **HowItWorks.tsx**: Process explanation section

### Blog Components
- **Blogs.tsx**: Blog listing and grid
- **SingleBlog.tsx**: Individual blog post component
- **DummyBlog.tsx**: Placeholder blog content

### Interactive Components
- **SwiperSlider.tsx**: Swiper.js carousel wrapper
- **Assistant.tsx**: Interactive assistant/chat component

## Component Patterns

### Props Interface
```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Specific props...
}
```

### Styling Approach
- Tailwind utility classes for styling
- Custom CSS classes in `globals.css` for complex animations
- Responsive design with mobile-first approach
- Custom theme colors: theme (#FFE566), theme-2 (#FFC727)

### Animation Integration
- Use GSAP for complex scroll-triggered animations
- CSS animations for hover effects and simple transitions
- Swiper for carousels with custom styling

## Development Guidelines
- Use TypeScript for all components
- Export as default from component files
- Keep components focused and single-purpose
- Follow existing naming conventions (PascalCase)
- Maintain responsive design patterns
- Use existing utility functions and patterns