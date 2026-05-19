# Ticket Bank (Ready to Assign)

Use one ticket per week, adjusting scope to fit session time.

## Foundation Tickets

### Ticket A: Runtime Trace and Ownership
Area: Architecture

Task:
Trace one real user action from UI to API to integration response and produce an annotated flow.

Acceptance Criteria:
1. Lists key modules involved and ownership layer.
2. Lists two failure modes and monitoring points.
3. Includes one suggested improvement.

### Ticket B: Type Hardening Refactor
Area: TypeScript

Task:
Refactor one service/helper to strengthen type contracts and remove weak type usage.

Acceptance Criteria:
1. Maintains behavior parity.
2. No weak or ambiguous API boundary types.
3. Includes tests for boundary behavior.

## UI and API Tickets

### Ticket C: Resilient State UX
Area: Product or Cart UI

Task:
Add consistent loading, empty, and error-state rendering for a data-backed component.

Acceptance Criteria:
1. Handles all three states cleanly.
2. No layout jump on state transitions.
3. Includes accessibility checks.

### Ticket D: Page/API Feature Slice
Area: Checkout or Account

Task:
Implement one small page enhancement that requires an internal API route update.

Acceptance Criteria:
1. Input validation exists server-side.
2. Response contract is documented.
3. Includes manual verification steps.

## Provider and Data Tickets

### Ticket E: Shared Hook Extension
Area: Commerce Abstraction

Task:
Add or extend one shared hook contract and implement provider-specific behavior.

Acceptance Criteria:
1. Shared contract is typed and stable.
2. Provider behavior follows existing conventions.
3. Layer decision rationale included in PR.

### Ticket F: Data Consistency Patch
Area: SWR/Data Caching

Task:
Fix stale or inconsistent state after a mutation in cart or account flow.

Acceptance Criteria:
1. Correct cache update strategy implemented.
2. Revalidation behavior is predictable.
3. Before/after behavior documented.

## Testing and Security Tickets

### Ticket G: API Route Test Expansion
Area: Testing

Task:
Add robust tests for one route, covering happy path, malformed input, and dependency failure.

Acceptance Criteria:
1. At least five meaningful tests.
2. Includes one historical or likely regression case.
3. Test names describe expected behavior clearly.

### Ticket H: Security Hardening
Area: Auth/Payment/Webhook

Task:
Harden one sensitive endpoint with strict validation, authorization checks, and improved logs.

Acceptance Criteria:
1. Rejects malformed or unauthorized requests.
2. Handles replay/idempotency where relevant.
3. Provides safe, actionable logs.

## Performance and Capstone Tickets

### Ticket I: Incident Drill
Area: Debugging/Performance

Task:
Investigate a seeded production-like issue, implement a fix, and provide evidence.

Acceptance Criteria:
1. Root cause summary included.
2. Measurable before/after metrics included.
3. Regression prevention strategy documented.

### Ticket J: Capstone Feature Delivery
Area: Cross-layer

Task:
Deliver one medium feature touching UI, API, provider-aware logic, and tests.

Acceptance Criteria:
1. Complete user flow works end-to-end.
2. Includes success, failure, and edge-case tests.
3. Includes architecture rationale and demo plan.
