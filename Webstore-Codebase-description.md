I’ll map the app’s runtime flow from config to UI/API layers, then summarize the architecture in plain terms with concrete file references so you can use it to teach your junior dev.

Read [](file:///home/ruben/developer/theme3/theme3/site/commerce-config.js)

Read [](file:///home/ruben/developer/theme3/theme3/site/middleware.ts)

Read [](file:///home/ruben/developer/theme3/theme3/site/pages/_app.tsx)

Read [](file:///home/ruben/developer/theme3/theme3/site/commerce.config.json)

I’ve confirmed app bootstrapping, provider resolution, and route-lock middleware; next I’ll sample representative API/service and provider files so I can explain request/data flow end-to-end.

Read [](file:///home/ruben/developer/theme3/theme3/site/pages/api/checkout/updateBillingAddress.ts)

Read [](file:///home/ruben/developer/theme3/theme3/site/Services/CartServices.ts#1-1), lines 1 to 260

Read [](file:///home/ruben/developer/theme3/theme3/packages/commerce/src/index.tsx)

Read [](file:///home/ruben/developer/theme3/theme3/packages/swell/src/index.tsx)

I’ve traced a real API path and service layer; I’ll do one final sweep of the provider wiring and folder map, then I’ll give you a teachable architecture walkthrough.

Read [](file:///home/ruben/developer/theme3/theme3/site/pages)

Read [](file:///home/ruben/developer/theme3/theme3/site/lib)

Read [](file:///home/ruben/developer/theme3/theme3/packages/swell/src/provider.ts)

Read [](file:///home/ruben/developer/theme3/theme3/packages/swell/src/fetcher.ts)

Read [](file:///home/ruben/developer/theme3/theme3/site/pages/api/checkout/__tests__/updateBillingAddress.test.ts#1-1), lines 1 to 180

Read [](file:///home/ruben/developer/theme3/theme3/site/tailwind.config.js)

Read [](file:///home/ruben/developer/theme3/theme3/site/jest.setup.js)

Read [](file:///home/ruben/developer/theme3/theme3/site/postcss.config.js)

Great question for onboarding. This codebase is a layered monorepo, and understanding those layers is the key to feeling comfortable quickly.

**High-Level Structure**
1. Monorepo root: shared tooling and workspace orchestration live at package.json, pnpm-workspace.yaml, and turbo.json.
2. App package: the actual storefront app is in site, with Next.js pages, API routes, components, and business logic.
3. Commerce framework package: shared provider-agnostic abstractions are in src.
4. Provider packages: concrete integrations (Swell, Shopify, etc.) are in src, shopify, and the other provider folders under packages.

**How the App Is Organized (Inside site)**
1. App bootstrap and global providers:
- _app.tsx wires global styles, UI context, login context, and app-wide wrappers.

2. Routing and pages:
- UI routes are in pages.
- Example route groups include product, checkout, and my-account.

3. API layer:
- Server endpoints are in api.
- This is a large custom API surface for checkout, cart, auth, webhooks, shipping, stock, etc.

4. Component layer:
- Reusable UI/components are in components.
- Product detail behavior is handled in files like ItemsVarient.tsx.

5. Service layer (frontend API clients):
- Client-side service wrappers are in Services.
- Example: CartServices.ts calls internal API routes with Axios.

6. Shared domain logic:
- Utility and domain helpers are in lib and utils.
- Auth/middleware helpers, validation, provider helpers, Stripe helpers, etc. are here.

**Commerce Architecture (Important Concept)**
1. Provider selection:
- commerce-config.js decides which provider to use from env vars and updates TS path aliases so @framework points to the selected provider source.
2. Active provider config:
- next.config.js uses commerce.config.json and runtime env to configure rewrites/features.
3. Provider-agnostic core:
- index.tsx defines shared types/context for cart, customer, auth, product hooks.
4. Provider-specific implementation:
- provider.ts plugs in concrete hook handlers.
- fetcher.ts maps framework fetch calls to Swell SDK operations.
- index.tsx exports the typed CommerceProvider/useCommerce for the selected integration.

**Runtime Request Flow (Typical)**
1. UI action in component:
- Example add-to-cart and variant handling in ItemsVarient.tsx.
2. Frontend service call:
- Calls service function in CartServices.ts.
3. Internal API route:
- Route in api processes validation, auth context, external calls.
4. External commerce/integration:
- Route uses Swell SDK or other services (Stripe, address validation, inventory, etc.).
5. Response back to UI:
- UI updates state, stock, messages, and price rendering.

**Key Technologies in Use**
1. Core platform:
- Next.js (pages router + API routes), React 18, TypeScript strict mode.
- Confirmed in package.json and tsconfig.json.

2. Monorepo/tooling:
- pnpm workspaces + Turborepo pipelines from pnpm-workspace.yaml and turbo.json.
- Taskr-based builds inside provider packages (example package.json).

3. Data/state:
- SWR-based commerce hooks in framework/provider packages.
- Context providers in app bootstrap _app.tsx.

4. Styling/UI:
- Tailwind CSS + PostCSS config in tailwind.config.js and postcss.config.js.
- Also MUI/Emotion libraries present in package.json.

5. API/security/middleware:
- Next middleware for lock/access/homepage redirect logic in middleware.ts.
- Auth wrapping patterns in API handlers (example updateBillingAddress.ts).

6. Testing:
- Jest + ts-jest in jest.config.js with setup in jest.setup.js.
- Example API tests in updateBillingAddress.test.ts.

7. Integration ecosystem:
- Swell commerce, Stripe, SSO/SAML, webhook endpoints, 3PL/inventory integrations, address validation.

**What Makes This Codebase Feel Advanced**
1. It is not just frontend; it is full-stack inside Next.js (UI + server routes + integrations).
2. It uses a provider abstraction layer (core commerce vs provider implementations).
3. Business rules are dense (pricing tiers, promotions, stock logic, account/guest checkout behavior).
4. It includes operational concerns (middleware access locks, webhooks, external services, tests).

If you want, I can also give you a “mental model diagram” of the architecture plus a simple “where to put new code” decision guide you can hand to your junior dev.