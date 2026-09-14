# Personalize your panel

Click **PERSONALIZE** in the panel header. Choose a name, accent colour, compact or spacious layout, CRT scanlines/glow, main weather/camera/media entities, and up to 24 favourite devices. Favourites appear above the overview and open the device's Home Assistant controls.

The automatic dashboard opens this dialog on first use so you can confirm detected devices before using the overview. Manually configured dashboards keep their existing layout and expose the same Personalize button. Set `setup: false` to skip the automatic first-run dialog.

Preferences are stored locally per browser, Home Assistant user, dashboard path, and original configured panel title. They do not synchronize across devices or change other users' settings. Clearing site storage or changing that original title resets them. Cancel leaves the current configuration unchanged.

## Preview, export, import and reset

The appearance sample updates while you edit the name, colour, spacing and CRT settings. It does not operate any devices.

**EXPORT** downloads the current draft as a versioned JSON preferences file. **IMPORT** loads such a file into the dialog for review; press **SAVE SETTINGS** to apply it. Missing devices are skipped. Files larger than 64 KB, unsupported versions and malformed settings are rejected. Exports contain device IDs and appearance choices, but no login credentials or recordings.

**RESET DRAFT** returns the form to dashboard defaults. It does not erase saved preferences until you save. Cancel discards imported, edited or reset drafts.

CRT effects default off. They add static scanlines to the welcome screen and a subtle text glow; there is no flashing animation. Turn the checkbox off for a sharper display.

The weather tile uses local pixel-art SVGs for current conditions. With the Home Assistant `sun.sun` entity, the sky changes between sunrise, daytime, sunset and night. Sunrise/sunset artwork covers solar elevations from -6 to +6 degrees, using the sun's rising flag. Without sun data it shows weather artwork without guessing local sunrise times. AM/PM is displayed separately in a smaller font to keep the clock inside its frame.

Phone layouts use single-column tiles, larger touch controls and readable text, with a scrollable section menu. The weather image fills the left side of its tile. Brightness meters appear for on-state lights reporting brightness; humidity comes from the selected weather entity. The energy tile uses a 16-bar rainbow power gauge updated with each Home Assistant sensor update. Its default full scale is 2400 W; set power_gauge_max_watts in the card configuration to change it. W and kW are supported; zero and unavailable readings leave all bars dim. These graphics do not add background polling.

Buttons, the setup dialog, subsection frames, and inherited card/slider colours use the blue-screen and metallic styling. Home Assistant and third-party cards can supply their own internal styles; system dialogs outside the panel continue to use the selected Home Assistant theme.

Camera previews are larger. Existing Advanced Camera Cards receive 240px gallery thumbnails with event details (including start time) and timeline controls, plus 200px viewer thumbnails. Select a thumbnail to review its media; the timeline shortcut opens review around that event. This requires retained recordings and a working camera integration. For a new installation use `optional-frigate-card.yaml`; camera discovery alone does not configure Frigate or add recording retention.

See the [Advanced Camera Card gallery configuration reference](https://github.com/dermotduffy/advanced-camera-card/blob/main/docs/configuration/media-gallery.md) for its thumbnail and event-detail options.
