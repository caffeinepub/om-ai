# Om.ai

## Current State
The app has a Voice Mode page (VoiceModePage.tsx) with a Doraemon-style character and voice conversation. Character selection buttons (Doraemon, Chhota Bheem, Thor, Spiderman, Captain America) currently exist in ChatPage.tsx as a floating right-side panel and mobile strip. VoiceModePage.tsx shows only the Doraemon image hardcoded without character switching.

## Requested Changes (Diff)

### Add
- Character selection UI inside VoiceModePage: a horizontal strip or grid of character cards at the top or bottom of the Voice Mode page, each showing the character's illustrated image thumbnail and name
- Each character image displayed as the main animated character when selected
- Character-specific voice personality prompts already exist in ChatPage (CHARACTERS config) -- move/replicate this config to VoiceModePage
- New character images to use:
  - Doraemon: `/assets/generated/doraemon-char-transparent.dim_400x400.png`
  - Chhota Bheem: `/assets/generated/chhota-bheem-char-transparent.dim_400x400.png`
  - Thor: `/assets/generated/thor-char-transparent.dim_400x400.png`
  - Spider-Man: `/assets/generated/spiderman-char-transparent.dim_400x400.png`
  - Captain America: `/assets/generated/captain-america-char-transparent.dim_400x400.png`

### Modify
- VoiceModePage.tsx: replace hardcoded Doraemon image with dynamic character image based on selectedCharacter state; add character selection UI; move CHARACTERS config here
- ChatPage.tsx: completely remove character selector panel (right-side floating buttons) and mobile character strip; remove all related state (selectedCharacter, setSelectedCharacter in ChatPage); remove CHARACTERS config from ChatPage

### Remove
- Character selector panel from ChatPage.tsx right side
- Mobile character strip from ChatPage.tsx
- CHARACTERS config and selectedCharacter state from ChatPage.tsx

## Implementation Plan
1. In VoiceModePage.tsx: add CHARACTERS config with image paths, name, emoji, voice personality prompt for each of the 5 characters
2. Add selectedCharacter state defaulting to 'doraemon'
3. Replace hardcoded doraemon image src with `CHARACTERS[selectedCharacter].image`
4. Add character selection strip (horizontal scrollable row) showing all 5 character thumbnails with names -- clicking one sets selectedCharacter
5. In ChatPage.tsx: remove the character selector panel, mobile character strip, CHARACTERS config, and selectedCharacter state entirely
6. Remove the "I can help you with: Knowledge..." static text from ChatPage's empty state
