# Types Directory

## Overview
TypeScript type definitions and interfaces for the application.

## Purpose
- Centralized type definitions for reusability
- Interface definitions for component props
- API response type definitions
- Data model interfaces

## Usage Patterns
```typescript
// Export interfaces for reuse
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
}

// Import in components
import { BlogPost } from '../types/blog';
```

## Guidelines
- Use PascalCase for interface names
- Export all interfaces for reusability
- Group related types in the same file
- Use descriptive names that indicate purpose
- Extend existing types when possible
- Document complex type relationships with comments