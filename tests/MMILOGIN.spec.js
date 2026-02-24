const { test } = require("@playwright/test");

test("login", async ({ page }) => {
  await page.goto("https://test.editor.mmi.gov.bc.ca/login?redirectTo=/");
});
