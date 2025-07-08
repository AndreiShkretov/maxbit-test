# Maxbit Cocktail App

This project is a test assignment completed for the company **MaxbitSolution**.

**Author**: Shkretov Andrei

---

## Stack

- **React 19** with **TypeScript**
- **Redux Toolkit** + RTK Query for data fetching
- **React Router v7**
- **Vite** as the bundler
- **SASS (SCSS)** for styling
- **Testing Library + Jest** for unit testing
- **ESLint, Prettier, Stylelint** for code formatting & linting
- **FSD Architecture** for scalable project structure

**Mobile-friendly design included** — the app is fully responsive and works smoothly on all screen sizes.

---

## Live Demo

You can check the deployed version here:  
[https://maxbit-test-xi.vercel.app](https://maxbit-test-xi.vercel.app) 

---

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
yarn install
```

### Available Scripts

You can run these scripts using `yarn <script-name>`. Here are the main commands:

| Command               | Description                                  |
|-----------------------|----------------------------------------------|
| `yarn dev`            | Starts the development server with Vite.     |
| `yarn build`          | Builds the production-ready app.             |
| `yarn preview`        | Preview the production build locally.        |
| `yarn lint`           | Runs ESLint to check for code issues.        |
| `yarn format`         | Formats code with Prettier.                  |
| `yarn stylelint`      | Checks and fixes SCSS styles with Stylelint. |
| `yarn test`           | Runs Jest unit tests once.                   |
| `yarn test:coverage`  | Runs Jest tests and outputs coverage report. |
| `yarn prepare`        | Installs Husky git hooks.                    |

---

## Git Hooks

This project uses Husky and lint-staged for pre-commit hooks to run linters and formatters automatically.
