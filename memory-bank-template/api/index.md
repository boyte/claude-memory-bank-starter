# API Reference

## Overview

This section contains comprehensive API documentation for [PROJECT_NAME].

## API Structure

- [Authentication](./auth/index.md) - Authentication and authorization
- [Core Endpoints](./endpoints/index.md) - Main API endpoints

## Base URL

```
Development: http://localhost:[PORT]/api
Production: https://[YOUR_DOMAIN]/api
```

## Common Headers

```http
Content-Type: application/json
Authorization: Bearer [token]
```

## Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "1.0.0"
  }
}
```

## Error Format

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      // Additional error context
    }
  }
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

*Last Updated: [DATE]*