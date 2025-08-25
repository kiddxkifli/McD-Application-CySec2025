# Overview

This is a modern cybersecurity-themed portfolio website for Muhammad Kamal Haji Kifli, a cybersecurity professional from Brunei. The application showcases his technical expertise in network security, digital forensics, and OSINT through an interactive Matrix-inspired interface. Built as a full-stack web application with a React frontend and Express backend, it features sections for about, experience, skills, projects, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom cyberpunk/Matrix-themed design system using CSS custom properties
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Animations**: Custom scroll animations and typing effects with Intersection Observer API

## Backend Architecture
- **Framework**: Express.js with TypeScript for server-side logic
- **Data Storage**: In-memory storage with interface abstraction for easy database migration
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Users Table**: Basic user structure for potential future authentication features
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations

## Development Environment
- **Build Tool**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict configuration across all modules
- **Code Quality**: ESLint and path aliases for clean imports
- **Development Server**: Hot module replacement with proxy configuration for API routes

## Design System
- **Color Scheme**: Custom cyberpunk palette with Matrix green, cyber cyan, and neon pink accents
- **Typography**: Multiple font families including Fira Code (monospace), Orbitron (cyber), and Inter (sans-serif)
- **Components**: Terminal-style windows, glitch effects, and animated Matrix rain background
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for production deployment
- **drizzle-orm**: Type-safe ORM for database operations and schema management
- **@tanstack/react-query**: Server state management and caching solution

## UI Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, form controls)
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe utility for component variant management
- **clsx**: Conditional class name utility

## Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for external validation libraries
- **zod**: Schema validation library for runtime type checking
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking and enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **wouter**: Lightweight routing library for React applications

## Additional Features
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette component for enhanced navigation