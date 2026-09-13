# Optional C64 emulator

Install the Arcade resource and group as described in the main README. This package includes the player wrapper and an empty catalog. EmulatorJS / VICE loads from `https://cdn.emulatorjs.org/stable/data/` when you start a game, so internet access is required. No emulator runtime, BIOS or game files are bundled.

## Add your own games privately

ROM collection link: [Commodore 64 ROM Set (US) on Internet Archive](https://archive.org/details/commodore-64-romset-us). This external collection is not included in the package. Follow the steps below to add compatible game files to your own installation.

1. Copy compatible, extracted game files such as `.crt`, `.d64`, `.t64`, `.prg` or `.tap` to `/config/www/commodore64/c64-games/` on your Home Assistant. ZIP archives are not accepted by this wrapper. Use games you have permission to use; compatibility varies.
2. Edit `/config/www/commodore64/c64-games/catalog.json`. For example, if your game file is named `my-game.crt`:

   ```json
   [{"title": "My C64 Game", "file": "my-game.crt"}]
   ```

   Add more objects separated by commas. Filenames are relative to `c64-games/`.
3. Open **Arcade → Games → C64 EMULATOR → OPEN GAME LIBRARY**. Choose a title, press **PLAY SELECTED GAME**, then **START GAME** inside the player.

Home Assistant serves `/local/` files as static assets. Anyone who can reach your Home Assistant server and knows an asset URL may be able to download it. Only install files you intend to serve there. Keep game files and your populated catalog out of the public repository; the supplied catalog should stay `[]` in GitHub. Git ignore patterns exclude game files, but review your changes before publishing.

## Mouse, keyboard and fullscreen

- The pointer remains visible; the iframe does not permit mouse locking.
- Click **FULLSCREEN** to enlarge the player, and **EXIT FULLSCREEN** to return.
- Press **Esc** to exit fullscreen and release keyboard controls.
- Click **RELEASE CONTROLS** to release input without stopping the game. Click the game to resume input.
- Browser Ctrl/Command shortcuts are passed through. Use the player's Control Settings menu for game mappings.
- **OPEN IN NEW TAB** opens the library separately if fullscreen is unavailable in your browser.

Fullscreen availability depends on the browser. A game's usual Escape key is reserved for releasing controls in this wrapper.

## Saves and performance

Download save states before leaving. The isolated player uses temporary memory storage and does not retain browser saves. Stopping the game, switching games, removing the card, or hiding the tab unloads the emulator. It runs on the viewing device.

## Updating the controls

`c64-player-controls.js` is the readable source. The same code is embedded in `c64-library.html` to support the isolated iframe. If editing the controls, update the `playerControls` JavaScript string in that HTML too. The third-party runtime runs in a separate iframe without same-origin access to Home Assistant.

Upstream projects: [EmulatorJS](https://emulatorjs.org/) and [VICE](https://vice-emu.sourceforge.io/).
