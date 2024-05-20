import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: './tests',
    /* Maximum time one test can run for. */
    timeout: 450 * 1000,


    expect: {
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
      timeout: 5000
    },
    /* Run tests in files in parallel */
    fullyParallel: false,

    /* Reporter to use. See https://playwright.dev/docs/test-reporters */

   
    reporter: [['allure-playwright', {outputFolder: 'allure-results'}], ['line']],
  
    /*globalSetup: require.resolve('./utils/global-setup'),*/
  
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
      /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
      actionTimeout: 0,
      // browserName: 'chromium',
      // channel: 'chrome',
      headless: false,
      /* Base URL to use in actions like `await page.goto('/')`. */
      baseURL: 'https://www.betterspeech.com/',
      viewport: null,
      // launchOptions: {
      //   args: ['--start-maximized'],
      // },
      screenshot: "on",
      video: {
        mode: "on",
        size: {
        //   // width:1260,
        //   // height:1080
          width:1366,
          height:768
         }
      },
  
      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
      trace: 'retain-on-failure',
  
    },
  
    /* Configure projects for major browsers */
     projects: [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
          launchOptions : {
            args : ['--start-maximized']
          },
          deviceScaleFactor : undefined,
          viewport: null,
        },
      },
  
      // {
      //   name: 'Firefox',
      //   use: {
      //     ...devices['Desktop Firefox'],
      //   },
      // },
  
      // {
      //   name: 'webkit',
      //   use: {
      //     ...devices['Desktop Safari'],
      //   },
      // },
  
      // /* Test against mobile viewports. */
       {
        name: 'Samsung',
        use: {
          ...devices['Galaxy S9+'],
          hasTouch: true, 
        },
      },
      {
        name: 'iPhone',
        use: {
          ...devices['iPhone 14 Pro Max'],
          hasTouch: true, 
        },
      },
  
      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: {
      //     channel: 'msedge',
      //   },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: {
      //     channel: 'chrome',
      //   },
      // },
     ],

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    // outputDir: 'test-results/',
  
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   port: 3000,
    // },


  };
  
  export default config;