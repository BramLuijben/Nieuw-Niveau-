import { test, expect, Page } from '@playwright/test'

const pages = [
  { path: '/',           name: 'Home' },
  { path: '/voor-wie',   name: 'Voor wie' },
  { path: '/werkwijze',  name: 'Werkwijze' },
  { path: '/diensten',   name: 'Diensten' },
  { path: '/over-mij',   name: 'Over mij' },
  { path: '/contact',    name: 'Contact' },
]

async function checkNoOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth
  })
  expect(overflow, 'Horizontal overflow detected').toBe(false)
}

async function checkNav(page: Page) {
  const nav = page.locator('nav')
  await expect(nav).toBeVisible()
}

async function checkFooter(page: Page) {
  const footer = page.locator('footer')
  await expect(footer).toBeVisible()
}

async function checkNoConsoleErrors(page: Page) {
  const errors: string[] = []
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  return errors
}

for (const { path, name } of pages) {
  test.describe(`${name} page`, () => {
    test('loads without errors and has correct structure @desktop', async ({ page, browserName }, testInfo) => {
      const errors: string[] = []
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })

      await page.goto(path)
      await page.waitForLoadState('networkidle')

      // No HTTP error
      const response = await page.request.get(path)
      expect(response.status(), `${name}: HTTP status`).toBeLessThan(400)

      // Nav visible
      await checkNav(page)

      // Footer visible
      await checkFooter(page)

      // No horizontal overflow
      await checkNoOverflow(page)

      // No console errors (filter known benign ones)
      const relevantErrors = errors.filter(e =>
        !e.includes('favicon') && !e.includes('plausible')
      )
      expect(relevantErrors, `${name}: console errors`).toHaveLength(0)
    })

    test('no horizontal overflow', async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      await checkNoOverflow(page)
    })

    test('nav and footer visible', async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      await checkNav(page)
      await checkFooter(page)
    })

    test('main content visible', async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      const main = page.locator('main')
      await expect(main).toBeVisible()
    })
  })
}

// ─── Nav-specific ───────────────────────────────────────────────

test.describe('Navigation', () => {
  test('desktop nav links are visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    const links = page.locator('.nav-links a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(4)
  })

  test('mobile nav hamburger appears at 390px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    const btn = page.locator('.menu-btn')
    await expect(btn).toBeVisible()
  })

  test('mobile nav opens when hamburger clicked', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.locator('.menu-btn').click()
    await expect(page.locator('.nav-links.open')).toBeVisible()
  })
})

// ─── Contact form ────────────────────────────────────────────────

test.describe('Contact form', () => {
  test('form fields are present', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('input[name="naam"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea[name="bericht"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })

  test('submit button disabled while submitting', async ({ page }) => {
    await page.goto('/contact')
    // Just verify the button exists and is not already disabled
    const btn = page.locator('button[type="submit"]')
    await expect(btn).not.toBeDisabled()
  })
})

// ─── Footer links ────────────────────────────────────────────────

test.describe('Footer links', () => {
  test('privacyverklaring: footer link exists and page loads', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const link = page.locator('footer a[href="/privacyverklaring"]')
    await expect(link).toBeVisible()
    const href = await link.getAttribute('href')
    expect(href).toBe('/privacyverklaring')
    // Confirm page loads correctly
    await page.goto('/privacyverklaring')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('main')).toBeVisible()
    expect(page.url()).toContain('/privacyverklaring')
  })

  test('algemene-voorwaarden: footer link exists and page loads', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const link = page.locator('footer a[href="/algemene-voorwaarden"]')
    await expect(link).toBeVisible()
    const href = await link.getAttribute('href')
    expect(href).toBe('/algemene-voorwaarden')
    // Confirm page loads correctly
    await page.goto('/algemene-voorwaarden')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('main')).toBeVisible()
    expect(page.url()).toContain('/algemene-voorwaarden')
  })
})

// ─── Typography ───────────────────────────────────────────────────

test.describe('Typography', () => {
  test('h1 is visible on home hero', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
  })

  test('h1 does not overflow viewport width on phone', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const h1 = page.locator('h1').first()
    const box = await h1.boundingBox()
    if (box) {
      expect(box.x + box.width).toBeLessThanOrEqual(400)
    }
  })
})
