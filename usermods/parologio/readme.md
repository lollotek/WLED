# Parologio USERMOD 

## ⚙️ todo
- Definire in build_flags SDA e SCL per gestione RTC

## 💡 promemoria
- Update platformio using 'pio upgrade'
- Ini config for parologio are under platformio_override

# Suggested platformio override (on ini file):

   [platformio]
   default_envs = usermod_parologio

   [env:usermod_parologio]
   extends = env:d1_mini
   lib_deps = ${env.lib_deps}
   build_flags = 
      ${common.build_flags_esp8266} 
      -DUSERMOD_PAROLOGIO
      -DSIZE_50X50=1
      -DIS_STONE=1
      -DUSERMOD_RTC
      -DRLYPIN=12
      -DRLYMDE=1
      -I2CSCLPIN=4
      -I2CSDAPIN=5

### configure npt:
enable get time
CET/CEST
it.pool.ntp.org
no 24h format

### configure pinout for RTC mod (should be preset)
HW_PIN_SCL: 4
HW_PIN_SDA: 5

## configure leds
114
gpio16
relè 19 invert