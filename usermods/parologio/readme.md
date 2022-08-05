# Suggested platformio override:

[platformio]
default_envs = usermod_parologio

[env:usermod_parologio]
extends = env:d1_mini
lib_deps = ${env.lib_deps}
build_flags = 
   ${common.build_flags_esp8266} 
   -D USERMOD_PAROLOGIO -D SIZE_50X50
   -D USERMOD_RTC
   -D RLYPIN=12
   -D RLYMDE=1