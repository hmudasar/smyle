# API Routes Directory

## Overview
Next.js API routes for server-side functionality.

## Current Routes

### send-email.ts
**Endpoint**: `/api/send-email`  
**Method**: POST  
**Purpose**: Handles contact form submissions via Nodemailer

**Usage**:
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: string,
    email: string,
    message: string
  })
});
```

## Development Guidelines
- Use Next.js API route conventions
- Handle errors gracefully with proper HTTP status codes
- Validate input data before processing
- Follow existing patterns for response formatting
- Use environment variables for sensitive configuration
- Implement proper CORS headers if needed

## Email Configuration
- Uses Nodemailer for email delivery
- Configure SMTP settings via environment variables
- Handle email failures gracefully