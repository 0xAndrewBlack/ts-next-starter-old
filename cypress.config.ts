import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: [
      "test/e2e/*.test.ts",
      "test/e2e/*.test.js",
      "test/e2e/*.cy.ts",
      "test/e2e/*.cy.js",
    ],
    supportFile: false,
  },
});
