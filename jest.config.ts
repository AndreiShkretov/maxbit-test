import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "@testing-library/jest-dom"],
  moduleNameMapper: {
    "^shared/(.*)$": "<rootDir>/src/shared/$1",
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};

export default config;
