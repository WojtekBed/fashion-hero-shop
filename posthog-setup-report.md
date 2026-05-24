<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the FashionHero shop (Next.js App Router, TypeScript). PostHog is initialized client-side via `instrumentation-client.ts` (the Next.js 15.3+ recommended approach), with a reverse proxy configured in `next.config.ts` to route analytics through `/ingest`. A server-side PostHog client (`src/lib/posthog-server.ts`) is available for future API routes. Environment variables are stored in `.env.local`.

**Files created:**
- `instrumentation-client.ts` — PostHog client-side init (session replay, error tracking, debug mode)
- `src/lib/posthog-server.ts` — Server-side PostHog client via `posthog-node`
- `.env.local` — Environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`)

**Files modified:**
- `next.config.ts` — Added reverse proxy rewrites for `/ingest/*` and `skipTrailingSlashRedirect`
- `src/components/auth-provider.tsx` — User identify on login/register, capture on login/logout
- `src/components/cart-provider.tsx` — Cart add and remove event capture
- `src/components/wishlist-button.tsx` — Wishlist add/remove event capture
- `src/app/checkout/page.tsx` — Checkout initiation event capture
- `src/components/product-card.tsx` — Quick View open event capture
- `src/components/search-modal.tsx` — Product search result click event capture
- `src/app/seller/page.tsx` — Seller fix-products CTA click event capture

| Event | Description | File |
|---|---|---|
| `user_signed_up` | User completed registration | `src/components/auth-provider.tsx` |
| `user_logged_in` | User successfully logged in | `src/components/auth-provider.tsx` |
| `user_logged_out` | User logged out | `src/components/auth-provider.tsx` |
| `product_added_to_cart` | Product added to cart with color and size | `src/components/cart-provider.tsx` |
| `product_removed_from_cart` | Product removed from cart | `src/components/cart-provider.tsx` |
| `checkout_initiated` | User clicked Place Order with cart summary | `src/app/checkout/page.tsx` |
| `product_wishlisted` | Product added to wishlist | `src/components/wishlist-button.tsx` |
| `product_unwishlisted` | Product removed from wishlist | `src/components/wishlist-button.tsx` |
| `product_quick_view_opened` | Quick View modal opened from product listing | `src/components/product-card.tsx` |
| `product_searched` | User selected a search result | `src/components/search-modal.tsx` |
| `seller_fix_products_clicked` | Seller clicked primary CTA on returns alert page | `src/app/seller/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/702061)
- [Purchase funnel: Signup → Add to cart → Checkout](/insights/IABRlGjT)
- [New signups over time](/insights/HqnkQf1m)
- [Cart activity: Adds vs Removes](/insights/wS5zpvIm)
- [Wishlisting activity](/insights/JUG2Z0ZG)
- [Quick View engagement](/insights/IyDbT7fm)

**Important:** Before running the app, add your PostHog project token to `.env.local`:
```
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_posthog_project_token_here
```
Your token is available in your PostHog project settings.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
