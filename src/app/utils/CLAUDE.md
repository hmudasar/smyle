# App Utils Directory

## Overview
Application-specific utility functions and helpers.

## Purpose
- App-specific utilities (different from root `/utils/`)
- Next.js specific helpers
- Image optimization utilities
- App routing and navigation helpers

## Expected Content
- Image loader configurations (referenced in next.config.ts)
- App-specific formatters and validators
- Next.js route helpers
- Component utility functions

## Guidelines
- Keep utilities focused and single-purpose
- Use TypeScript for all utilities
- Export named functions for tree-shaking
- Document complex utility functions
- Test utilities independently when possible

## Relationship to Root Utils
- Root `/utils/`: Shared utilities across the entire project
- App `/src/app/utils/`: Next.js and app-specific utilities
- Component utilities: Keep close to components when tightly coupled