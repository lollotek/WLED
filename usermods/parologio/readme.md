# Parologio USERMOD 

## ⚙️ todo
- Definire in build_flags SDA e SCL per gestione RTC

## 💡 promemoria
- Update platformio using 'pio upgrade'
- Ini config for parologio are under platformio_override

# Suggested platformio override (on ini file):

   [platformio]
   default_envs = usermod_parologio_32

   [env:usermod_parologio_32]
   extends = env:esp32dev
   platform = ${esp32.platform}
   platform_packages = ${esp32.platform_packages}
   board_build.partitions = ${esp32.default_partitions}
   ; board_build.filesystem = littlefs
   ; board_build.partitions = tools/WLED_ESP32_4MB_1MB_FS.csv
   build_flags = 
      ${common.build_flags_esp32} 
      -D WLED_RELEASE_NAME=ESP32
      -D USERMOD_PAROLOGIO
      -D SIZE_50X50
      -D USERMOD_RTC
      -D WLED_DISABLE_BLYNK
      -D WLED_DISABLE_CRONIXIE
      -D WLED_DISABLE_HUESYNC
      -D WLED_DISABLE_INFRARED
      -D RLYPIN=19
      -D RLYMDE=1
      -D I2CSDAPIN=21
      -D I2CSCLPIN=22
      -D WLED_DEBUG

### configure npt:
enable get time
CET/CEST
UTC offset 3600
it.pool.ntp.org
no 24h format

### configure pinout for RTC mod (should be preset)
HW_PIN_SDA: 21
HW_PIN_SCL: 22

## configure leds
114
gpio16
relè 19 invert