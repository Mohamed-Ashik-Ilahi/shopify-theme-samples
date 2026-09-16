# Shopify Theme Code Samples — Mohammed Ashik

A small set of original Shopify Liquid sections and snippets demonstrating
patterns I use in production ecommerce theme development: custom
sections with editable schema, bundle/add-to-cart logic, and
metafield-driven loyalty display.

> These are original, from-scratch demo implementations written to
> showcase technique — not client production code.

## What's inside

| File | Demonstrates |
|---|---|
| `sections/hero-banner.liquid` | Custom section with image picker, text settings, and a `range` setting for overlay opacity |
| `sections/product-bundle.liquid` | Section with repeatable `blocks`, product picker settings, and JS-driven price totals + `/cart/add.js` integration |
| `snippets/loyalty-points-badge.liquid` | Reusable snippet reading a customer metafield to surface a loyalty/store-credit balance natively in the theme |
| `assets/*.css`, `assets/product-bundle.js` | Supporting styles and the vanilla JS behind the bundle section |

## Skills shown

- Shopify 2.0 theme architecture (sections, blocks, schema)
- Liquid objects, filters, and conditional rendering
- Shopify Ajax Cart API (`/cart/add.js`)
- Metafield-driven custom features
- Responsive, dependency-free CSS/JS

## Background

Built while working as a Shopify & WordPress developer at Linkcore
Trading Pvt Ltd, where I customize live ecommerce storefronts
(loyalty, subscriptions, product bundles, custom pages) for wellness
brands. 
