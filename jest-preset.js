module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript support
    testEnvironment: 'jsdom', // Simulates the browser environment for React
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Transpile TypeScript files
      "^.+\\.jsx?$": "babel-jest", // Transpile JS/JSX files using Babel
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock static files
      '^src/(.*)$': '<rootDir>/src/$1', // Add this line to map the 'src' alias
    },
  };
  