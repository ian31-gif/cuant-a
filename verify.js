const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(async () => chromium.launch());
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push("[pageerror] " + e.message));
  page.on("console", msg => { if (msg.type() === "error") errors.push("[console] " + msg.text()); });

  const base = "http://localhost:8790";

  // 1. Home
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/01-home.png", fullPage: true });

  // 2. Loan calculator - fill and submit
  await page.goto(base + "/calculadoras-prestamos/calculadora-cuota-prestamo-personal/", { waitUntil: "networkidle" });
  await page.fill("#principal", "10000");
  await page.fill("#tin", "9.5");
  await page.fill("#plazo", "60");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/02-prestamo-resultado.png", fullPage: true });

  // 3. Mortgage calculator
  await page.goto(base + "/calculadoras-hipotecas/calculadora-cuota-hipotecaria/", { waitUntil: "networkidle" });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/03-hipoteca-resultado.png", fullPage: true });

  // 4. Compound interest
  await page.goto(base + "/calculadoras-ahorro/calculadora-interes-compuesto/", { waitUntil: "networkidle" });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/04-interes-compuesto.png", fullPage: true });

  // 5. TAE calculator
  await page.goto(base + "/calculadoras-prestamos/calculadora-tae-tin/", { waitUntil: "networkidle" });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/05-tae.png", fullPage: true });

  // 6. Savings goal
  await page.goto(base + "/calculadoras-ahorro/calculadora-ahorro-objetivo/", { waitUntil: "networkidle" });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/06-ahorro-objetivo.png", fullPage: true });

  // 7. Currency converter (network blocked in sandbox -> should show graceful error)
  await page.goto(base + "/conversor-divisas/", { waitUntil: "networkidle" });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "shots/07-divisas.png", fullPage: true });

  // 8. Blog article
  await page.goto(base + "/blog/como-se-calcula-la-tae/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/08-blog.png", fullPage: true });

  // 9. Legal page
  await page.goto(base + "/privacidad/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/09-privacidad.png", fullPage: true });

  // 10. Cookie banner visible on first load (new context, no localStorage)
  const freshContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const freshPage = await freshContext.newPage();
  await freshPage.goto(base + "/", { waitUntil: "networkidle" });
  await freshPage.screenshot({ path: "shots/10-mobile-cookie-banner.png", fullPage: false });

  // 11. Mobile nav toggle
  await freshPage.click(".nav-toggle");
  await freshPage.waitForTimeout(200);
  await freshPage.screenshot({ path: "shots/11-mobile-nav.png", fullPage: false });

  await browser.close();

  console.log("ERRORS FOUND:", errors.length);
  errors.forEach(e => console.log(e));
})();
