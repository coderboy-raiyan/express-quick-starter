# Express.js TypeScript Server - Quick Start Guide

A modern Express.js server built with TypeScript, featuring development tools, code formatting, and MongoDB integration.

## 📋 Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### Option A: Use as Starter Template

If you want to use this as a starter template for your own project:

```bash
# Clone the repository
git clone <repository-url> my-new-project
cd my-new-project/server

# Remove the original git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit: Express TypeScript starter"

# Optional: Connect to your own remote repository
git remote add origin <your-new-repository-url>
git push -u origin main
```

### Option B: Work with Existing Project

If you're working with the existing MERN crash course project:

```bash
# Clone the entire repository
git clone <repository-url>
cd mern-crash-course/server

# Or if starting fresh in this directory
cd server
```

### Step 1: Install Dependencies

```bash
# Install all dependencies (production + development)
yarn install
```

### Step 2: Environment Configuration

```bash
# Create environment file
touch .env

# Add the following variables to .env file:
PORT=5000
NODE_ENV=development
# Add MongoDB connection string when ready
# MONGODB_URI=mongodb://localhost:27017/your-database-name
```

### Step 3: Development Server

```bash
# Start development server with hot reload
yarn dev
```

The server will start on `http://localhost:5000` and automatically restart when you make changes to TypeScript files.

## 📁 Project Structure

```
server/
├── src/
│   ├── server.ts          # Main application entry point
│   └── config/
│       └── index.ts       # Environment configuration
├── dist/                  # Compiled JavaScript output
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── nodemon.json           # Development server configuration
├── eslint.config.js       # ESLint configuration
└── .env                   # Environment variables (create this)
```

## 🛠️ Available Scripts

| Script              | Description                                    |
| ------------------- | ---------------------------------------------- |
| `yarn dev`          | Start development server with hot reload       |
| `yarn build`        | Compile TypeScript to JavaScript               |
| `yarn start`        | Start production server (requires build first) |
| `yarn format`       | Format code with Prettier                      |
| `yarn format:check` | Check code formatting                          |
| `yarn lint:check`   | Check for linting errors                       |
| `yarn lint:fix`     | Fix linting errors automatically               |

## 🔧 Development Workflow

### Step 1: Start Development Server

```bash
yarn dev
```

### Step 2: Make Your Changes

- Edit files in the `src/` directory
- The server will automatically restart when you save changes
- TypeScript files are compiled on-the-fly

### Step 3: Code Quality Checks

```bash
# Check code formatting
yarn format:check

# Format code automatically
yarn format

# Check for linting issues
yarn lint:check

# Fix linting issues automatically
yarn lint:fix
```

## 🏗️ Building for Production

### Step 1: Build the Project

```bash
yarn build
```

### Step 2: Start Production Server

```bash
yarn start
```

## 🗄️ Database Integration

This project is configured for MongoDB with Mongoose. To add database functionality:

### Step 1: Add MongoDB URI to .env

```bash
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

### Step 2: Create Database Connection

The Mongoose dependency is already installed. Add connection logic to your `src/config/index.ts` or create a separate database configuration file.

## 🔍 Key Features

- **TypeScript**: Full TypeScript support with strict mode
- **Hot Reload**: Automatic server restart during development
- **Code Quality**: ESLint + Prettier for consistent code style
- **Environment Config**: Centralized configuration management
- **MongoDB Ready**: Mongoose already installed and ready to use
- **Production Ready**: Optimized build process for deployment

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Change the PORT in your .env file or kill the process
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows
```

**TypeScript compilation errors:**

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Ensure all dependencies are installed
yarn install
```

**Module not found errors:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules yarn.lock
yarn install
```

## 📝 Next Steps

1. **Add Routes**: Create route handlers in `src/routes/`
2. **Database Models**: Set up Mongoose schemas in `src/models/`
3. **Middleware**: Add authentication, validation, etc. in `src/middleware/`
4. **Testing**: Add Jest or Mocha for testing
5. **Deployment**: Configure for your preferred hosting platform

## 🤝 Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Run `yarn lint:check` and `yarn format:check` before committing
3. Ensure all TypeScript compilation passes with `yarn build`

---

Happy coding! 🎉
