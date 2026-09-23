import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  workers: 3,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "retain-on-failure",
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4321",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
});
