# Overview

This is an AI-powered travel assistant web application called "Egy Safary AI" specifically designed for Port Said, Egypt tourism. The application provides personalized travel recommendations, instant information about local attractions, restaurants, and stores, and features an interactive chat interface powered by Google's Gemini AI. Built as a full-stack web application, it serves as a comprehensive travel companion for visitors to Port Said.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement and development server integration

## Database & Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Storage**: Fallback memory storage implementation for development/testing

## AI Integration
- **AI Provider**: Google Gemini AI (version 2.5-flash) for natural language processing
- **Context**: Custom system prompts with Port Said-specific knowledge including restaurants, stores, and attractions
- **Chat History**: Maintains conversation context for better user experience
- **API Design**: RESTful chat endpoint with message history support

## Authentication & Security
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Security Headers**: CORS and security middleware configuration
- **Environment Variables**: Secure API key and database credential management

## UI/UX Design
- **Design System**: Consistent component library with light/dark theme support
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Loading States**: Skeleton components and loading indicators for better UX

## Development Workflow
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Hot Reload**: Vite development server with instant updates
- **Path Aliases**: Organized imports with @ aliases for clean code structure
- **Error Overlay**: Development error reporting with Replit integration

# External Dependencies

## Core AI Service
- **Google Gemini AI**: Primary AI service for chat functionality and travel recommendations
- **API Integration**: RESTful integration with conversation history support

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connection Pooling**: Built-in connection management for scalable database access

## UI Component Library
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Lucide Icons**: Comprehensive icon library for consistent visual elements
- **Tailwind CSS**: Utility-first CSS framework for responsive design

## Development Tools
- **Replit Integration**: Development environment with banner and cartographer plugins
- **Vite Plugins**: Runtime error overlay and development tooling
- **TypeScript**: Full-stack type safety and development experience

## Third-Party Services
- **Unsplash**: Stock photography for hero section imagery
- **Google Fonts**: Typography with Inter font family for modern appearance
- **Date-fns**: Date manipulation and formatting utilities