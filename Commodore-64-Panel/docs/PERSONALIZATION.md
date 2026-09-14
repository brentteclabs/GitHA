# Personalize your panel

Click **PERSONALIZE** in the panel header. Choose a name, accent colour, compact or spacious layout, CRT scanlines/glow, main weather/camera/media entities, and up to 24 favourite devices. Favourites appear above the overview and open the device's Home Assistant controls.

The automatic dashboard opens this dialog on first use so you can confirm detected devices before using the overview. Manually configured dashboards keep their existing layout and expose the same Personalize button. Set `setup: false` to skip the automatic first-run dialog.

Preferences are stored locally per browser, Home Assistant user, dashboard path, and original configured panel title. They do not synchronize across devices or change other users' settings. Clearing site storage or changing that original title resets them. Cancel leaves the current configuration unchanged.

CRT effects default off. They add static scanlines to the welcome screen and a subtle text glow; there is no flashing animation. Turn the checkbox off for a sharper display.

Buttons, the setup dialog, subsection frames, and inherited card/slider colours use the blue-screen and metallic styling. Home Assistant and third-party cards can supply their own internal styles; system dialogs outside the panel continue to use the selected Home Assistant theme.

Camera previews are larger. Existing Advanced Camera Cards receive 240px gallery thumbnails with event details (including start time) and timeline controls, plus 200px viewer thumbnails. Select a thumbnail to review its media; the timeline shortcut opens review around that event. This requires retained recordings and a working camera integration. For a new installation use `optional-frigate-card.yaml`; camera discovery alone does not configure Frigate or add recording retention.

See the [Advanced Camera Card gallery configuration reference](https://github.com/dermotduffy/advanced-camera-card/blob/main/docs/configuration/media-gallery.md) for its thumbnail and event-detail options.
