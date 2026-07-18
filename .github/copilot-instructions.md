# BrandBlend - React TypeScript Project

## Project Overview
This is a React TypeScript project built with Vite, using React 19, TypeScript 6, and Oxlint for linting.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Language**: TypeScript 6 (strict mode)
- **Linting**: Oxlint
- **Package Manager**: npm

## Project Structure
```
brandblend/
├── src/
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   ├── App.css          # App component styles
│   └── assets/          # Static assets
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript config (references)
├── tsconfig.app.json    # App TypeScript config
├── tsconfig.node.json   # Node TypeScript config
├── vite.config.ts       # Vite configuration
└── .oxlintrc.json       # Oxlint configuration
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run Oxlint
- `npm run preview` - Preview production build

## Code Style Guidelines
- Use TypeScript strict mode
- Use functional components with hooks
- Use TypeScript interfaces for props
- Follow React 19 best practices
- Use Oxlint for linting (run `npm run lint`)
- Use TypeScript strict mode with strict null checks

## Component Guidelines
- Use functional components with TypeScript interfaces
- Use proper TypeScript types for props and state
- Follow React 19 patterns (use hooks, avoid class components)
- Use CSS modules or CSS files for styling