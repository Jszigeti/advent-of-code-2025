# advent-of-code-2025

TypeScript project generated with [launchts](https://github.com/Jszigeti/launchts).

## Getting Started
### Development

```bash
npm run build    # Compile TypeScript to JavaScript
npm run dev      # Start development server with auto-reload
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```
### Project Structure

```
advent-of-code-2025/
├── src/
│   └── index.ts       # Entry point
├── dist/              # Compiled output (generated)
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project dependencies and scripts
├── eslint.config.js   # ESLint configuration (flat config)
├── .prettierrc        # Prettier configuration
└── .husky/            # Git hooks
```
## Technology Stack

- **TypeScript** - Type-safe JavaScript with ESNext target
- **Node.js** - Runtime environment with ESM modules
- **ESLint** - Code quality and consistency with TypeScript support
- **Prettier** - Code formatting
- **Nodemon** - Auto-reload during development
- **Husky + lint-staged** - Pre-commit hooks for code quality

## Scripts

- `npm run build` - Compiles TypeScript files to JavaScript in the `dist/` directory
- `npm run dev` - Starts the development server with auto-reload on file changes
- `npm run lint` - Checks code quality with ESLint
- `npm run format` - Formats all files with Prettier

## Git Hooks

This project uses Husky to run quality checks before commits:

- **Pre-commit**: Automatically runs ESLint and Prettier on staged files

## License

MIT
