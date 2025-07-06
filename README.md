# Express.js TypeScript Server - Quick Start Guide

A modern Express.js server built with TypeScript, featuring development tools, code formatting, and MongoDB integration.

## 📋 Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### Step 1: Clone and Navigate to Project

```bash
# If cloning the entire repository
git clone <repository-url>
cd mern-crash-course/server

# Or if starting fresh in this directory
cd server
```

### Step 2: Install Dependencies

```bash
# Install all dependencies (production + development)
npm install
```

### Step 3: Environment Configuration

```bash
# Create environment file
touch .env

# Add the following variables to .env file:
PORT=5000
NODE_ENV=development
# Add MongoDB connection string when ready
# MONGODB_URI=mongodb://localhost:27017/your-database-name
```

### Step 4: Development Server

```bash
# Start development server with hot reload
npm run dev
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

| Script                 | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start development server with hot reload       |
| `npm run build`        | Compile TypeScript to JavaScript               |
| `npm start`            | Start production server (requires build first) |
| `npm run format`       | Format code with Prettier                      |
| `npm run format:check` | Check code formatting                          |
| `npm run lint:check`   | Check for linting errors                       |
| `npm run lint:fix`     | Fix linting errors automatically               |

## 🔧 Development Workflow

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Make Your Changes

- Edit files in the `src/` directory
- The server will automatically restart when you save changes
- TypeScript files are compiled on-the-fly

### Step 3: Code Quality Checks

```bash
# Check code formatting
npm run format:check

# Format code automatically
npm run format

# Check for linting issues
npm run lint:check

# Fix linting issues automatically
npm run lint:fix
```

## 🏗️ Building for Production

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Start Production Server

```bash
npm start
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
npm install
```

**Module not found errors:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Next Steps

1. **Add Routes**: Create route handlers in `src/routes/`
2. **Database Models**: Set up Mongoose schemas in `src/models/`
3. **Middleware**: Add authentication, validation, etc. in `src/middleware/`
4. **Testing**: Add Jest or Mocha for testing
5. **Deployment**: Configure for your preferred hosting platform

## 🤝 Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Run `npm run lint:check` and `npm run format:check` before committing
3. Ensure all TypeScript compilation passes with `npm run build`

---

Happy coding! 🎉
