# AGENTS.md

## Project

EduIntern Voyage is an educational platform initially focused on B.Com General under the University of Madras. The architecture must support additional universities, programs, and courses without unnecessary rewrites.

## Technology

Use the existing project stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Router
- Supabase later
- Vercel later

Do not install packages without a clear requirement and justification. Do not introduce a competing framework or architecture.

## Architecture

- Follow the existing project architecture.
- Prefer feature-based organization for domain functionality.
- Keep reusable UI separate from feature-specific code.
- Keep components reasonably small and focused.
- Do not create unnecessary abstractions or duplicate reusable components.
- Keep business logic out of presentation components when practical.
- Centralize important API and database types where appropriate.
- Do not implement future capabilities unless explicitly requested. The architecture should remain extensible for additional universities, programs, premium content, downloads, subscriptions, and student features.

## TypeScript

- Use TypeScript properly and preserve strict, useful compiler checks.
- Avoid `any` unless there is a documented, necessary reason.
- Prefer explicit interfaces or types for important data structures.
- Keep public APIs and existing conventions stable unless a change is required.

## Design System

Use the EduIntern Voyage visual language:

- Primary background: `#0B132B`
- Alternate background: `#0B192C`
- Surface/card: `#1C2541`
- Primary text: `#FFFFFF`
- Muted text: `#94A3B8`
- Accent: `#5BC0BE`
- Typography: Inter or `system-ui`
- Sleek, high-contrast dark UI
- Subtle radial cyan glows
- Restrained glassmorphism
- Lucide line icons

Do not randomly introduce new colors. Avoid excessive gradients, glow effects, glassmorphism, or visual noise.

Use the supplied official EduIntern Voyage logo. Never recreate, replace, or invent the logo.

## UI and Accessibility

- Design responsively for mobile, tablet, and desktop.
- Use accessible semantic HTML.
- Ensure interactive elements have appropriate keyboard and focus states.
- Prefer Lucide icons instead of manually drawn SVG icons unless there is a specific reason.
- Keep UI controls clear, consistent, and usable across viewport sizes.
- When modifying UI, verify desktop and mobile behavior.

## Loading States

Loading states are a permanent product requirement. Whenever asynchronous content or data is loading:

- Never leave the interface looking broken or empty.
- Use reusable loading components.
- Use skeleton loaders for content-heavy areas.
- Use appropriate spinners or loaders for short operations.
- Keep loading states visually consistent with the EduIntern Voyage theme.
- Do not create a different loading animation for every page.

## Error Handling

- Async operations must have appropriate error states.
- Do not silently swallow errors.
- Give users useful, understandable feedback.
- Do not expose raw technical errors to normal users.

## Authentication and Authorization

V1 uses email/password authentication.

- Public pages must remain accessible without login.
- Protect learning materials with authentication.
- Protect admin functionality with actual authorization, not merely hidden UI.

Do not add authentication or authorization infrastructure unless explicitly requested.

## Content

- Team-created notes and videos are first-party EduIntern Voyage content.
- Do not copy third-party educational material.
- Link or embed third-party resources where appropriate.
- Do not invent academic content.
- Review internship and course opportunities before publication.

## Implementation Workflow

Before implementing a significant feature:

1. Inspect the existing code and nearby patterns.
2. Explain the proposed changes and identify affected files.
3. Implement only the requested feature.
4. Preserve unrelated work and existing design decisions.
5. Run TypeScript/build/lint checks where possible.
6. Report changed files, validation results, and errors.

When a requirement is ambiguous, ask before making a major architectural decision.

Never:

- Rebuild the whole project unnecessarily.
- Overwrite unrelated work.
- Install libraries without justification.
- Create fake data when real data is expected.
- Modify architecture without explaining why.
- Generate multiple competing implementations.
- Silently change design decisions.
- Create pages or future features that were not requested.

## Git

Use focused commit prefixes when commits are requested:

- `feat:`
- `fix:`
- `refactor:`
- `chore:`
- `docs:`

Do not commit or create branches unless explicitly requested.
