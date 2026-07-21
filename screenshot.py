import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:8080/')
        await page.wait_for_timeout(3000) # Wait for 3D to load
        await page.screenshot(path='screenshot.png')
        await browser.close()

asyncio.run(main())
