## TXone assignment

### Commands
- Refer to `package.json` to latest available commands
- `yarn start` for local development
- `yarn test` run test cases
- `yarn test:watch` monitor test case when something happened
- `yarn test:ui` run e2e test
- `yarn build`, prepare a optimized built for later usage

### Structures (source)
<details>
  <summary>Click to expand</summary>

  <pre>
src/
├── App.tsx
├── layout
    └── CenterLayout.tsx
├── pages
│   ├── lobby
│   ├── table
│   ├── nav
├── components
│   ├── DataTable
│   │   ├── __tests__
│   │   │.   └── DataTable.test.tsx
│   │   └── index.tsx
│   ├── AvatarMenu
│   │   ├── __tests__
│   │   │.   └── AvatarMenu.test.tsx
│   │   ├── index.tsx
  </pre>
</details>

## **Tech Stack**

- **[Tonic-UI](https://github.com/tonic-ui/tonic-ui)**: A responsive UI library for building web applications.
- **[Jest](https://jestjs.io/)**: A testing framework for JavaScript.
- **[React Testing Library](https://testing-library.com/react/)**: A library for testing React components with unit test.
- **[Playwright](https://playwright.dev/)**: A modern framework for browser automation and E2E testing.

### Feature 
1. if the user wants to control all of the states in the component, I recommend you use context to manage the state
2. Focus on table extension, you need to dive into the columnDef structure to extend your type
3. There are kinds of questions still here ex., based on icon position is going to change the menuItem position