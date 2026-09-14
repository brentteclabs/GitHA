- Restored the live rainbow power gauge and corrected shadow-root click delegation for navigation, entity details and services. Tested the reported navigation buttons and mocked light/media service dispatch.

- Optimized phone layout, enlarged weather art, tightened tile spacing, and added brightness/humidity meters and a real session power trend. Layout fit checked at 320px and 390px.

- Fixed AM/PM clock sizing and added pixel-art weather scenes with sun-based sunrise, daytime, sunset and night graphics.

- Added live appearance preview, validated preference import/export, and reset-as-draft with Cancel protection.

- Added area-based Rooms with native device controls and a Device health section. Verified area overrides, hidden entity exclusion, battery classification and control selection.

- Added Personalize dialog, first-run device confirmation, browser-local favourites, name/accent/layout choices, optional CRT effects, metallic controls, and larger event thumbnails with timeline shortcuts.

- Added automatic entity discovery with manual overrides, a minimal automatic dashboard, a separate manual example, and container-based responsive layouts. Verified at 390px and 1280px.

# Release notes — 2026-09-13

- Fixed Snake ending on the first move: direction now uses a dedicated field instead of the browser DOM direction property. Verified steering, reverse prevention, food and self-collision.

- Added optional EmulatorJS / VICE library with an empty game catalog.
- Keep the mouse cursor visible and disallow pointer locking.
- Added Fullscreen / Exit Fullscreen and Release Controls buttons.
- Escape exits fullscreen and releases game input; click the game to resume.
- Documented private game installation and temporary save behavior.
- Retained unbranded artwork, demonstration screenshots, and original Commodore styling.

# Release notes — 2026-09-12

- Refreshed standalone GitHub package using the original Commodore styling.
- Live CPU and RAM fields with editable hardware specification labels.
- Removed bark logging examples.
- Optional Snake, Breakout and Pong with mouse, keyboard and touch controls, and a large Start button.
- Added demonstration screenshots, field reference, troubleshooting and an AI customization guide.
- No household configuration, ROM collection, BIOS files or third-party emulator bundle included.

Validation: package YAML parsing and JavaScript syntax checks; standalone rendered previews with demo values. Live device actions and optional third-party camera integrations must be validated in the recipient's installation.
