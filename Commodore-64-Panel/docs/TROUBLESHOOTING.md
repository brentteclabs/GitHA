# Troubleshooting

| Problem | Check |
| --- | --- |
| Custom element does not exist | Confirm the module resource URL, resource type, and copied file path. Increment its version and reload. |
| File returns 404 | `/config/www/commodore64/file.js` must be available at `/local/commodore64/file.js`. Avoid an extra nested package folder. |
| Entity not found | Replace example IDs in overview fields and subsection cards. |
| CPU/RAM unavailable | Choose numeric percentage sensors; specifications are separate manual text fields. |
| Camera badge NOT CONFIGURED | Add your optional `frigate` instance and camera names. This is not the camera entity ID. |
| No recent video | Check Frigate recording health and retention; the panel does not create recordings. |
| Scrubber or thumbnails missing | Install Advanced Camera Card and Frigate, and use the optional example. |
| Arcade is missing | Register its separate resource and add `optional-arcade.yaml` as a group item. |
| Keyboard controls do nothing | Press Start or click the game screen first; use arrows/WASD. Space pauses. |
| Wrong temperature units | Change the relevant Home Assistant entity/integration units. |
| Font looks odd when zoomed out | Try 100% browser zoom; the pixel font loses detail at small sizes. |

When reporting an issue, include Home Assistant version, browser/device, the failing action, and a sanitized snippet of relevant YAML. Remove tokens, private URLs and camera images from reports.
