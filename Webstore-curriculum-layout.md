I’ll map the core technologies and architecture from this monorepo first, then build a practical 10-week curriculum that ramps from fundamentals to confidently shipping changes in this codebase. I’m quickly checking key config files so the plan is tailored to what you actually use.

Read [](file:///home/ruben/developer/theme3/theme3/package.json)

Read [](file:///home/ruben/developer/theme3/theme3/pnpm-workspace.yaml)

Read [](file:///home/ruben/developer/theme3/theme3/turbo.json)

Read [](file:///home/ruben/developer/theme3/theme3/README.md)

I confirmed this is a pnpm + Turborepo monorepo with a Next.js storefront and multiple commerce provider packages. Next I’m pulling the site and shared `commerce` package details to anchor the week-by-week topics in real tasks.

Read [](file:///home/ruben/developer/theme3/theme3/site/package.json)

Read [](file:///home/ruben/developer/theme3/theme3/packages/commerce/package.json)

Read [](file:///home/ruben/developer/theme3/theme3/packages/commerce/README.md#1-1), lines 1 to 280

I’ve got enough to identify the stack, and I also found there isn’t a `site/README.md` in this workspace snapshot. I’ll quickly inspect testing and TypeScript/Next config in site so the curriculum includes exact workflows your teammate will use day to day.

Read [](file:///home/ruben/developer/theme3/theme3/site/tsconfig.json)

Read [](file:///home/ruben/developer/theme3/theme3/site/jest.config.js)

Read [](file:///home/ruben/developer/theme3/theme3/site/next.config.js)

Read [](file:///home/ruben/developer/theme3/theme3/site/TEST_SETUP_README.md)

I now have TS, test, and provider config details; I’ll do one fast pass over key folders (`pages/api`, src, and shared package structure) so the curriculum covers actual architecture patterns, not generic web dev topics.

Searched for files matching `theme3` · `site/pages/api/**/*.ts`, 132 matches

Read [](file:///home/ruben/developer/theme3/theme3/packages/swell/src)

Read [](file:///home/ruben/developer/theme3/theme3/packages/commerce/src)

Read [](file:///home/ruben/developer/theme3/theme3/site/components)

Read [](file:///home/ruben/developer/theme3/theme3/packages/swell/package.json)

Read [](file:///home/ruben/developer/theme3/theme3/packages/shopify/codegen.json)

Read [](file:///home/ruben/developer/theme3/theme3/packages/shopify/package.json)

10-week curriculum designed for this monorepo and storefront stack, with a progression from fundamentals to independent feature delivery in production-like workflows.

**Program Goal**
By the end of week 10, your junior dev should be able to:
1. Navigate and reason about a pnpm + Turborepo monorepo.
2. Build and modify Next.js pages, React components, and API routes safely.
3. Work within the commerce provider architecture and shared hooks.
4. Add tests for API logic and avoid regressions.
5. Ship a scoped feature with review-ready quality.

**What This Codebase Uses (Learning Targets)**
1. Languages: TypeScript-first with some JavaScript.
2. Frontend: React 18, Next.js (pages/api model), SWR, Tailwind, MUI/Emotion.
3. Backend-in-frontend: Next API routes, middleware, validation, auth flows.
4. Architecture: Monorepo with packages for providers and shared commerce abstractions.
5. Tooling: pnpm workspaces, Turborepo pipelines, Taskr builds in package modules.
6. Testing: Jest + ts-jest for API tests and mocks.
7. Commerce integrations: Swell-focused site config with multi-provider framework patterns.
8. External systems: Stripe, SSO/SAML/OTP, webhooks, inventory/order integrations.
9. Quality gates: lint, prettier, husky pre-commit checks.

**Weekly Rhythm (Use Every Week)**
1. 60-90 min concept lesson.
2. 90 min guided pair-programming in this repo.
3. 1 small independent ticket.
4. 30 min code review + retrospective.
5. End-of-week checkpoint rubric (Correctness, Readability, Tests, Confidence).

**10-Week Plan**

**Week 1: Monorepo and Runtime Foundations**
1. Focus:
- Node, npm vs pnpm, workspaces, Turborepo basics.
- How the site app and provider packages relate.
2. Hands-on:
- Run dev, build, test scripts locally.
- Draw a system map of app, shared commerce package, and provider package.
3. Deliverable:
- “How this codebase works” 1-page architecture note.
4. Exit criteria:
- Can explain where to add frontend code vs shared provider logic.

**Week 2: TypeScript for Real Code**
1. Focus:
- Types, interfaces, unions, utility types, strict mode.
- Path aliases and import conventions.
2. Hands-on:
- Refactor one medium component/API helper to improve typing.
- Add basic runtime-safe guards where types are weak.
3. Deliverable:
- PR with type improvements and no behavior changes.
4. Exit criteria:
- Can read complex TS signatures and safely extend them.

**Week 3: React Component Patterns**
1. Focus:
- State, props, composition, form handling, reusable UI patterns.
- Existing component organization (auth/cart/checkout/common/product).
2. Hands-on:
- Build a small UI enhancement in an existing component area.
- Handle loading, empty, and error states consistently.
3. Deliverable:
- UI PR with before/after screenshots and rationale.
4. Exit criteria:
- Can add a component without breaking style or flow.

**Week 4: Next.js App Structure and Routing**
1. Focus:
- Pages routing model, API routes, middleware basics.
- SEO and server/client boundaries in this codebase style.
2. Hands-on:
- Add a small page-level feature and one matching API endpoint change.
3. Deliverable:
- End-to-end flow from page interaction to API response.
4. Exit criteria:
- Can trace a request from UI to API and back.

**Week 5: Commerce Framework and Provider Abstractions**
1. Focus:
- Shared commerce hooks, provider context, handler pattern.
- Why provider-specific logic belongs in package modules.
2. Hands-on:
- Modify or add behavior in a cart/product hook path.
- Compare shared vs provider-specific implementation.
3. Deliverable:
- Short design note: where a new commerce behavior should live.
4. Exit criteria:
- Can choose correct layer (site, shared commerce, provider package).

**Week 6: Data Fetching, Caching, and Validation**
1. Focus:
- SWR mental model, mutation/revalidation, stale data pitfalls.
- API input validation and sanitization patterns.
2. Hands-on:
- Improve one API route: stricter validation + clearer error responses.
- Fix one data-fetching inconsistency with cache-aware updates.
3. Deliverable:
- PR with testable behavior and documented error contract.
4. Exit criteria:
- Can prevent common data and validation bugs.

**Week 7: Testing Strategy in This Repo**
1. Focus:
- Jest + ts-jest setup, mock patterns, API route testing.
- What to unit test vs integration-like route tests.
2. Hands-on:
- Add tests for one checkout/account/cart API route.
- Include at least one edge case and one failure-path test.
3. Deliverable:
- Test-focused PR with clear reasoning for each test case.
4. Exit criteria:
- Can write meaningful tests that catch regressions.

**Week 8: Integrations and Security-Sensitive Flows**
1. Focus:
- Stripe and auth-related flows (OTP/SAML concepts).
- Webhooks, idempotency, signature/authorization awareness.
- Secure coding basics for API routes.
2. Hands-on:
- Harden one sensitive API path (auth/payment/webhook-adjacent).
- Add explicit error handling and logs for troubleshooting.
3. Deliverable:
- Security checklist applied to a real endpoint.
4. Exit criteria:
- Can identify and reduce common security and reliability risks.

**Week 9: Performance, Debugging, and Production Readiness**
1. Focus:
- Debugging workflow, network tracing, reducing unnecessary renders.
- Build/lint/test pipeline confidence, release hygiene.
2. Hands-on:
- Investigate one performance or reliability issue and fix it.
- Produce a brief root-cause and verification summary.
3. Deliverable:
- “Bug hunt” PR with evidence-based fix.
4. Exit criteria:
- Can independently diagnose and validate a non-trivial issue.

**Week 10: Capstone Sprint (Real Feature)**
1. Focus:
- Full delivery lifecycle: scope, implement, test, document, review.
2. Hands-on:
- Ship one medium feature touching:
- UI component changes,
- API route updates,
- tests,
- and integration behavior.
3. Deliverable:
- Final PR and demo.
4. Exit criteria:
- Ready to take normal team tickets with light mentorship.

**Assessment Rubric (Use Weekly)**
1. Code quality:
- Readable, consistent naming, small focused functions.
2. Correctness:
- Handles expected and edge cases.
3. Architecture fit:
- Changes placed in the right package/layer.
4. Testing:
- Useful tests for success and failure paths.
5. Collaboration:
- Clear PR descriptions and response to feedback.
6. Independence:
- Needs less prompting each week.

**Mentor Tips to Make It Work**
1. Start each week with one tiny “win ticket” before hard topics.
2. Keep task scope intentionally small; increase complexity weekly.
3. Require explanation before coding: “What layer? Why?”
4. Use guided code reviews as teaching moments, not just pass/fail.
5. Pair on first task of week, solo on second, review on third.

If you want, I can turn this into a ready-to-run weekly schedule with specific ticket ideas mapped to your current folders (cart, checkout, auth, webhooks, and provider packages).