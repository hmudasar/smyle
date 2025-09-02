# Smile Landing Page Project

## Project Overview
**Name**: Smile  
**Type**: Next.js 15 Landing Page for Relationship App  
**Tech Stack**: Next.js, React 19, TypeScript, Tailwind CSS, GSAP, Swiper  
**Purpose**: Landing page for a relationship app that helps couples sync tasks and track moods

## Architecture
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom gradient themes
- **Animations**: GSAP for complex animations, CSS animations for simple effects
- **Components**: Swiper for sliders, custom React components
- **Content**: Static content with blog functionality
- **Email**: Nodemailer for contact forms

## Key Features
- Responsive landing page design
- Blog system with markdown support
- Contact forms with email integration
- Testimonials and feature showcases
- Authentication routes (protected)
- Custom UI components library

## Development Commands
```bash
yarn dev          # Development server (with Turbopack)
yarn build        # Production build
yarn start        # Production server
yarn lint         # ESLint validation
```

## Directory Structure
```
/
├── src/app/          # Next.js App Router pages and layouts
├── utils/            # Utility functions (dateFormatter, etc.)
├── public/           # Static assets
└── CLAUDE.md         # This file
```

## Styling Conventions
- **Primary Colors**: Theme yellow (#FFE566), background cream (#FFFCF0)
- **Typography**: Fontspring Recoleta Alt (headings), Figtree (body), Plus Jakarta Sans (base)
- **Patterns**: Gradient backgrounds, custom shadows, responsive design
- **Components**: Modular design with reusable Button, Heading, etc.

## Development Guidelines
- Follow existing component patterns in `src/app/components/`
- Use TypeScript for all new code
- Maintain responsive design principles
- Test with `yarn lint` before commits
- Use custom Tailwind classes defined in `globals.css`

## Project Context
This is a landing page for "Smile" - a relationship app that helps couples:
- Sync their tasks and activities
- Track partner's mood and emotional state
- Keep romantic spark alive through small gestures
- Digital marketing focus with conversion optimization