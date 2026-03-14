# Om.ai

## Current State
- Landing page has "Continue as Guest" as a plain text button and "Admin Login" as a small icon text link
- Robot mascot appears only in landing page and tiny in chat header
- No prominent visual differentiation between action buttons on landing page
- Layout is functional but needs polish and animation improvements

## Requested Changes (Diff)

### Add
- Distinct styled buttons for "Continue as Guest" (outlined/secondary style) and "Admin Login" (subtle but clear button style)
- Larger, more prominent robot mascot in chat page empty state area
- Page-level entrance animations (fade-in, slide-up) for landing page elements
- Button hover/press animations with scale and glow effects
- Floating robot mascot panel in chat sidebar on desktop

### Modify
- "Continue as Guest" button: upgrade from plain text link to a proper outlined button with icon and distinct color
- "Admin Login" button: upgrade from tiny text link to a proper button with shield icon, subtle border, distinct style
- Landing page button layout: stack all 4 buttons in clear visual hierarchy (Login primary, Sign Up secondary, Guest outlined, Admin subtle)
- Robot mascot in chat: show it larger in the empty state of chat (when no messages), with speaking animation
- Overall spacing, typography scale, and animation polish

### Remove
- Nothing removed

## Implementation Plan
1. Update LandingPage.tsx: redesign button section with 4 distinct styled buttons in visual hierarchy
2. Update ChatPage.tsx: add larger robot mascot to empty state (no messages screen), with isSpeaking prop passed
3. Add CSS animations: entrance animations, button hover effects, glow effects
4. Ensure all breakpoints (mobile/tablet/desktop) look correct
