# Configuration reference

All fields below belong to the `custom:commodore64-panel` card inside `views[0].cards[0]`.

| Field | Meaning |
| --- | --- |
| `title` | Header title |
| `variant` | Use `classic` for this package |
| `lights` | List of light entity IDs |
| `light_names` | Optional mapping from light IDs to short labels |
| `media_entity` | Media player for the overview |
| `weather_entity` | Weather entity; temperature and humidity come from its attributes |
| `camera_entity` | Camera used for the overview image |
| `power_entity` / `energy_entity` | Power and accumulated energy sensors |
| `internet_entity` | Connectivity binary sensor; `on` means online |
| `cpu_entity` / `ram_entity` | Numeric percentage sensors, expected on a 0–100 scale |
| `cpu_specs` / `ram_specs` | Text you enter describing your hardware; not auto-detected |
| `frigate` | Optional recording-health configuration (below) |
| `groups` | Navigation sections containing pages and native card configurations |

```yaml
cpu_entity: sensor.example_cpu_usage
ram_entity: sensor.example_ram_usage
cpu_specs: "YOUR CPU / CORES / BASE CLOCK"
ram_specs: "YOUR RAM CAPACITY AND TYPE"
light_names:
  light.example_living_room: Living Room
frigate:
  instance_id: frigate
  camera: example_front_yard
```

Omit the `frigate` block when not using Frigate. Hardware specification text is static; usage readings update live. Unknown or unavailable readings are displayed as unavailable rather than fabricated values.

For metric weather and energy readings, configure your Home Assistant integrations and unit preferences accordingly. This panel uses entity units and does not convert or reconfigure devices. The clock uses the viewing device's locale/time zone with a 12-hour display.

Each group has `id`, `title`, `icon`, and `pages`. Each page has `id`, `title`, and `cards`; set `wide: true` for a full-width card. Use normal Home Assistant card YAML in `cards`.

The All Off button targets only the configured available lights. Individual light icons toggle their light; names open Home Assistant's entity details. Media transport buttons call the configured player's services.
