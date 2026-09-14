# Rooms and device health

**Rooms** groups lights, switches, climate devices, media players, fans, covers, locks and vacuums by their Home Assistant area. An entity's area takes priority over its device's area. Unassigned devices have their own page. Hidden and disabled registry entities are excluded.

Room pages use native Home Assistant controls: light cards for brightness and light details, thermostats for climate, media controls for playback/volume, and tiles for other devices. Available actions depend on the device integration and the user's permissions. Open device details for additional controls such as light colour. Nothing is switched on merely by opening a room.

**Device health** lists unavailable devices, unknown states, low batteries, open doors/windows and lights that are on. Low battery means a percentage sensor at 20% or lower, or a battery binary sensor reporting on. Motion is not counted as an open door. Unavailable or blank readings are not treated as a zero-percent battery.

The overview reports the frontend connection explicitly. Internet status requires an `internet_entity`; without one it says Not configured. These indicators describe reported states, not an independent network or hardware diagnosis.

Area discovery uses Home Assistant's registry APIs. If your account cannot read the registries, the Rooms page explains this and existing controls remain available. Refresh after changing area assignments or adding devices. Device state values and health counts update as Home Assistant supplies them.

Custom dashboard sections are preserved. The generated section IDs `rooms` and `device-health` should be reserved for these features.
