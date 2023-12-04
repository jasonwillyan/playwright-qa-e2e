import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests",
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    colorScheme: "dark",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "desktop/chrome",
      use: {
        ...devices["Desktop Chrome"],
        browserName: "chromium",
        channel: "chrome",
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "desktop/edge",
      use: {
        ...devices["Desktop Edge"],
        browserName: "chromium",
        channel: "msedge",
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "mobile/chrome",
      use: {
        ...devices["Pixel 5"],
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {
      name: "mobile/safari",
      use: {
        ...devices["iPhone 14 Pro Max"],
        browserName: "webkit",
        //channel: 'msedge',
      },
    },
  ],
});
