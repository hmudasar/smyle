# Utils Directory

## Purpose
Shared utility functions used across the application.

## Current Utilities

### dateFormatter.ts
**Function**: `formatDate(date: Date)`
- Formats dates consistently using UTC timezone
- Returns format: "Month Day, Year" (e.g., "January 15, 2025")
- Uses en-US locale for consistency
- Ensures cross-timezone stability

## Usage Patterns
```typescript
import { formatDate } from '../utils/dateFormatter';

const formattedDate = formatDate(new Date());
// Returns: "January 15, 2025"
```

## Guidelines
- All utilities should be pure functions when possible
- Export named functions, not default exports
- Include TypeScript types for all parameters and returns
- Add JSDoc comments for complex utilities
- Test utilities independently before integration

## File Naming
- Use camelCase for file names
- Descriptive names indicating purpose
- Keep utilities focused and single-purpose