# 10-Week Weekly Plan

## Week 0: Prep Sprint (Pre-Course)

### Lesson Agenda (60 min)
1. Repository orientation and architecture layers.
2. Runtime request flow from UI to API to provider.
3. Delivery expectations: test-first mindset and layer ownership.

### Pair Session (90 min)
1. Run install, dev, lint, and test workflows.
2. Trace one checkout or cart request end-to-end.
3. Diagram code ownership boundaries.

### Solo Ticket
Title: Create architecture onboarding notes.

Acceptance Criteria:
1. One-page architecture map with app layer, shared commerce layer, and provider layer.
2. One request-flow diagram from UI event to integration response.
3. One paragraph on why provider abstraction exists.

### Exit Criteria
1. Student can explain where new code should go before writing code.
2. Student can navigate key folders without assistance.

## Week 1: Monorepo Runtime Foundations

### Lesson Agenda (75 min)
1. Workspace structure and package responsibilities.
2. Build and task orchestration concepts.
3. Local dev debugging entry points.

### Pair Session (90 min)
1. Identify one representative page, one API route, one shared hook, and one provider implementation.
2. Annotate the data path and error path.

### Solo Ticket
Title: Runtime flow walkthrough document.

Acceptance Criteria:
1. Includes request and error flow paths.
2. Includes two probable failure points and mitigation ideas.
3. Reviewed and updated after mentor feedback.

### Exit Criteria
1. Student can explain app bootstrap and runtime flow accurately.

## Week 2: Type Safety in Production Code

### Lesson Agenda (75 min)
1. Type narrowing and safe guards.
2. Utility types for service and API contracts.
3. Preventing accidental behavior changes in refactors.

### Pair Session (90 min)
1. Refactor one service/helper for stronger typing.
2. Add explicit return and error shapes.

### Solo Ticket
Title: Type hardening pass on one medium module.

Acceptance Criteria:
1. Removes weak types and unnecessary implicit behavior.
2. Preserves runtime behavior.
3. Adds or updates tests for any changed boundary.

### Exit Criteria
1. Student can explain type decisions in review language.

## Week 3: React UI Delivery Patterns

### Lesson Agenda (60 min)
1. Composition and state boundaries.
2. Loading, empty, and error-state consistency.
3. Maintainable component changes in existing UI systems.

### Pair Session (90 min)
1. Add one small UI enhancement in product/cart/account area.
2. Enforce accessibility and predictable state transitions.

### Solo Ticket
Title: UI reliability enhancement.

Acceptance Criteria:
1. Includes loading and error UX.
2. Avoids visual regressions on desktop and mobile.
3. Includes screenshots and rationale.

### Exit Criteria
1. Student can add UI behavior without architecture drift.

## Week 4: Page, API, and Middleware Flow

### Lesson Agenda (90 min)
1. Page routing and API route boundaries.
2. Middleware behavior and protected flows.
3. Input validation and response shape consistency.

### Pair Session (90 min)
1. Implement a small page feature requiring API changes.
2. Trace middleware effects for authenticated and guest flows.

### Solo Ticket
Title: Page plus API feature slice.

Acceptance Criteria:
1. Working end-to-end flow.
2. Validates input and returns clear error payloads.
3. Includes a short test plan.

### Exit Criteria
1. Student can trace and debug one complete request path.

## Week 5: Provider Abstraction and Layer Decisions

### Lesson Agenda (90 min)
1. Shared hook contracts vs provider-specific logic.
2. Criteria for code placement across layers.
3. Avoiding duplication across providers.

### Pair Session (90 min)
1. Extend one shared commerce behavior.
2. Compare shared and provider implementation details.

### Solo Ticket
Title: Add or extend one shared hook with provider behavior.

Acceptance Criteria:
1. Shared contract is clear and typed.
2. Provider implementation follows project conventions.
3. Student submits layer decision note with tradeoffs.

### Exit Criteria
1. Student reliably chooses the correct implementation layer.

## Week 6: Data Fetching, Caching, and Validation

### Lesson Agenda (75 min)
1. Cache invalidation and revalidation strategy.
2. Safe request validation patterns.
3. Error semantics and consumer expectations.

### Pair Session (90 min)
1. Harden one API route input contract.
2. Fix one stale-data issue in frontend data flow.

### Solo Ticket
Title: Validation and cache consistency improvement.

Acceptance Criteria:
1. Endpoint rejects malformed inputs consistently.
2. Client data updates are predictable after mutation.
3. Includes behavior verification steps.

### Exit Criteria
1. Student can prevent common stale-data and input bugs.

## Week 7: Testing for Regression Protection

### Lesson Agenda (90 min)
1. Route test structure and mocking strategy.
2. Edge-case and failure-path design.
3. Writing tests that prove behavior, not implementation details.

### Pair Session (90 min)
1. Add tests for one sensitive or high-traffic API route.
2. Include malformed input, auth edge case, and dependency failure.

### Solo Ticket
Title: Route test coverage expansion.

Acceptance Criteria:
1. At least five meaningful test cases.
2. Includes one known historical regression scenario.
3. Test names document expected behavior clearly.

### Exit Criteria
1. Student can design tests that catch realistic regressions.

## Week 8: Integrations and Security Hardening

### Lesson Agenda (90 min)
1. Auth and payment risk surfaces.
2. Webhook trust and idempotency.
3. Logging for security and incident response.

### Pair Session (90 min)
1. Harden one integration-sensitive endpoint.
2. Add explicit authorization, validation, and error logging.

### Solo Ticket
Title: Security hardening change set.

Acceptance Criteria:
1. Protects sensitive path from common misuse.
2. Adds idempotency or replay protection when appropriate.
3. Includes a security checklist in PR description.

### Exit Criteria
1. Student can identify and mitigate core reliability/security risks.

## Week 9: Debugging and Performance Incident Drill

### Lesson Agenda (75 min)
1. Structured debugging workflow.
2. Measuring before and after performance.
3. Writing root-cause analysis notes.

### Pair Session (90 min)
1. Reproduce one seeded bug or slow path.
2. Implement and verify a fix with evidence.

### Solo Ticket
Title: Bug hunt and optimization report.

Acceptance Criteria:
1. Root cause identified and documented.
2. Fix includes objective before/after evidence.
3. Regression prevention noted.

### Exit Criteria
1. Student can independently diagnose and verify non-trivial issues.

## Week 10: Capstone Sprint

### Lesson Agenda (60 min)
1. Scope control and delivery planning.
2. Test strategy for complete feature slices.
3. Demo and review preparation.

### Pair Session (90 min)
1. Break feature into implementation steps and acceptance tests.
2. Align on architecture boundaries before coding.

### Solo Ticket
Title: Ship one medium feature across layers.

Acceptance Criteria:
1. Includes UI changes, API route updates, and provider-aware data behavior.
2. Includes tests for happy path, failure path, and edge cases.
3. PR is review-ready with architecture rationale.
4. Demo script is prepared and executed.

### Exit Criteria
1. Student can take normal team tickets with light mentorship.

## Weekly Metrics to Track

1. Time to identify root cause for failures.
2. PR iteration count before approval.
3. Confidence score (1 to 5).
4. Independence score (1 to 5).
