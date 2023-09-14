# Customer Visits App

This is a sample test project of a web application for customer visit registration.

## Features

- List of customers with their names and details (Responsive).
- Form to add new services to the customers.
- Display of previous services for each customer.

## Technologies Used besides React and TypeScript

- **Mantine**: A component library for React that provides pre-styled and accessible components ready to be used in the application. I decided to use this library because it saves development time, and I am familiar with it.

- **React Testing Library**: A testing tool for React components that allows effective user-centered integration testing.

- **Jest**: A testing framework for JavaScript used in conjunction with React Testing Library to ensure code quality and reliability.

- **Vite**: An ultra-fast development environment used for building the application. Vite provides a fast and efficient development experience, with hot reloading and quick build times.

## File Structure

The application is structured as follows:

  - `src/`: Contains all the source files of the application.
  - `components/`: A directory containing reusable components.
  - `data/`: A directory containing customer and service data.
  - `types/`: A directory containing types.
  - `utils/`: A directory containing utilities, such as the `promiseDelay` function.
  - `App.tsx`: The main component of the application.
  - Other files for components and data.

## Testing

Tests have been created using React Testing Library to ensure the integrity of the application. Tests can be found in files with the `.test.tsx` suffix. (Not all possible tests have been implemented in this test project)

## Execution in CodeSandbox

You can run this project directly on [CodeSandbox](https://codesandbox.io/). To do so, open your web browser and visit the application on [CodeSandbox](https://codesandbox.io/p/sandbox/vigilant-http-zw7vwd).


Thank you for reviewing the application!