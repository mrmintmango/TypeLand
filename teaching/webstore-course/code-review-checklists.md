# Code Review Checklists

Use these templates each week. Keep feedback specific and behavior-focused.

## Weekly Review Checklist

Student:
Week:
Ticket:
Reviewer:
Date:

### 1) Correctness
1. Feature behaves as requested.
2. Edge cases are handled safely.
3. Error paths return clear outcomes.

### 2) Architecture Fit
1. Code lives in correct layer (app/shared/provider).
2. No duplication across abstraction boundaries.
3. Changes align with existing module conventions.

### 3) Type and API Contract Quality
1. Boundary contracts are explicit and safe.
2. Return and error shapes are consistent.
3. No unnecessary weak typing.

### 4) Testing
1. Tests cover success and failure paths.
2. Tests validate behavior, not implementation details.
3. Missing test scenarios are called out clearly.

### 5) Security and Reliability
1. Input validation exists at server boundary.
2. Auth/authorization checks are correct for sensitive paths.
3. Logging is useful and does not leak sensitive data.

### 6) Readability and Maintainability
1. Naming is consistent and intentional.
2. Functions are focused and reasonably sized.
3. Comments explain non-obvious logic only.

### 7) Delivery Readiness
1. PR description explains what changed and why.
2. Verification steps are reproducible.
3. Risks and follow-up items are noted.

## Mentor Retro Template (10-15 min)

1. What was done well this week?
2. Where did the student need the most prompts?
3. Which skill should be reinforced next week?
4. What scope change is needed for next ticket?
5. Student confidence score (1 to 5):
6. Student independence score (1 to 5):

## Capstone Evaluation Checklist

### Feature Completeness
1. End-to-end user flow works.
2. Handles expected and edge-case input.
3. Failure behavior is safe and understandable.

### Cross-Layer Quality
1. UI changes are coherent and stable.
2. API route behavior and contracts are consistent.
3. Provider/shared logic boundaries are correct.

### Test and Risk Coverage
1. Happy path, failure path, and edge-case tests exist.
2. Critical integration paths are tested or justified.
3. Known risks and mitigations are documented.

### Production Readiness
1. Logging and debugging context is sufficient.
2. Performance impact is acceptable.
3. Change is review-ready for normal team workflow.
