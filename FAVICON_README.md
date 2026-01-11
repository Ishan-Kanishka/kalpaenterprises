# Adding a Favicon to Your Website

I've already set up the favicon links in all your HTML pages. To add a custom favicon:

## Option 1: Use an Existing Icon File

1. Place your icon file in the root directory (same folder as index.html)
2. Name it one of these:
   - `favicon.ico` (recommended - works in all browsers)
   - `favicon-32x32.png` (32x32 pixels)
   - `favicon-16x16.png` (16x16 pixels)

## Option 2: Create a Favicon Online

You can create a favicon using online tools:
- Visit https://www.favicon-generator.org/
- Upload your logo/image
- Download the generated favicon files
- Place them in your website's root directory

## Option 3: Use a PNG/SVG Image

If you have a PNG or SVG image:
1. Convert it to `.ico` format using an online converter
2. Or use the PNG directly (make sure it's square, like 32x32 or 16x16 pixels)
3. Place it in the root directory as `favicon.ico` or `favicon.png`

## Current Setup

The favicon links are already added to all pages:
- `index.html`
- `products.html`
- `rentals.html`
- `about.html`
- `contact.html`

Once you add a favicon file, it will automatically appear in browser tabs!

## Header Icon

I've also added a 🔧 (wrench/tool) emoji icon next to the company title in the header. You can:
- Change it to a different emoji
- Replace it with an `<img>` tag pointing to your logo
- Remove it if you prefer

To change the header icon, edit the `<span class="icon">🔧</span>` in each HTML file's header section.
