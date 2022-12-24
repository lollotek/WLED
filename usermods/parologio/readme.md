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