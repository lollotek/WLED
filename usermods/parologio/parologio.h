#pragma once

#include "wled.h"
#define RELAY_PIN 12

class Parologio : public Usermod {
  private:
    uint8_t minuteLast = 99;
    uint8_t nowHour = -1;
    uint8_t nowMinutes = -1;

    #ifdef SIZE_50X50
      char const * oreArray[13] = {"dodici","una","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici"};
      char const * minutiArray[6] = {"cinque","dieci","quarto","venti","venticinque","mezza"};
      byte const pinOreArray[13] = {44, 16, 12, 22, 59, 66, 55, 50, 25, 29, 39, 33, 44};
      byte const pinMinutiArray[6] = {93, 105, 77, 88, 88, 99};
      byte const pinPalliniArray[4] = {113, 112, 111, 110};
      byte const pinEL = 19;
      byte const pinSonoLe = 0;
      byte const pinE = 87;
      byte const pinUN = 84;
      byte const pinMeno = 73;
      byte const MAX_COLUMNS = 11;
      byte const MAX_ROWS = 10;
    #else
      char const * oreArray[12] = {"dodici","una","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici"};
      char const * minutiArray[6] = {"cinque","dieci","un quarto","venti","venticinque","mezza"};
      byte const pinOreArray[12] = {64, 11, 14, 18, 21, 28, 34, 37, 42, 46, 50, 56};
      byte const pinMinutiArray[6] = {103, 84, 89, 98, 98, 78};
      byte const pinPalliniArray[4] = {115, 112, 113, 114};
      byte const pinEL = 8;
      byte const pinSonoLe = 0;
      byte const pinE = 70;
      byte const pinMeno = 71;
      byte const MAX_COLUMNS = 14;
      byte const MAX_ROWS = 8;
    #endif
    #ifdef IS_STONE
      byte const pinPalliniStart = 110;
    #endif


    void setSegmentWord(byte i, byte start, String chars){
      strip.setSegment(i , start, start + chars.length());
      // strip.getSegment(i).setOption(SEG_OPTION_SELECTED, false);
      strip.getSegment(i).setOption(SEG_OPTION_ON, true);
    }

    void displayTime(byte hour, byte minute, byte dots, bool past) {
        strip.setSegment(0, 0, 115); // background
        // strip.getSegment(0).setOption(SEG_OPTION_SELECTED, true);
        // strip.getSegment(0).setOption(SEG_OPTION_ON, false);

        if (hour != 1){
          strip.setSegment(1, 0, 4);  // sono [le]
          strip.setSegment(2, 5, 7);  // le
        }else{
          strip.setSegment(1, 11, 12);  // è [l']
          strip.setSegment(2, 13, 14);  // l'
        }

        setSegmentWord(3, pinOreArray[hour], oreArray[hour]);

        strip.setSegment(4 , 0, 0);
        strip.setSegment(5 , 0, 0);
        strip.setSegment(6 , 0, 0);
        strip.setSegment(7 , 0, 0);
        // single pins
        strip.setSegment(8 , 0, 0);
        strip.setSegment(9 , 0, 0);
        strip.setSegment(10 , 0, 0);
        strip.setSegment(11 , 0, 0);

        if (minute > -1){
          if (!past) {
            if (minute >= 0){
              strip.setSegment(5, pinE, pinE+1);
            }
          }else{
            setSegmentWord(6, pinMeno, "meno");
          }
          setSegmentWord(4, pinMinutiArray[minute], minutiArray[minute]);
        }
        if (minute == 2){
          strip.setSegment(7, pinUN, pinUN+2);
        }

        for (byte j=1; j < 5; j++) {
          if (dots >= j){
            strip.setSegment(7+j, pinPalliniArray[j-1], pinPalliniArray[j]);
          }else{
            strip.setSegment(7+j, 0, 0);
          }
        }
    }

  public:
    void setup() {
        // // background
        // // strip.getSegment(0).setOption(SEG_OPTION_SELECTED, false);
        // strip.getSegment(0).setOption(SEG_OPTION_ON, false);
        // // strip.setBrightness(50);

        // // other segments are text + 4 leds
        // for (int i = 1; i <= ( 7 + 4 ); i++)
        // {
        //   // strip.getSegment(i).setOption(SEG_OPTION_SELECTED, false);
        //   strip.getSegment(i).setOption(SEG_OPTION_ON, true);
        //   // strip.setBrightness(128);
        // }
        // // colorUpdated(CALL_MODE_FX_CHANGED);
    }

    void loop() {
      updateLocalTime();
      nowHour = hour(localTime);
      nowMinutes = minute(localTime);
      if (nowMinutes != minuteLast && (nowHour != -1 && nowMinutes != -1))
      {
        Serial.printf("Read: %u hour, %u minutes \n", nowHour, nowMinutes);
        minuteLast = nowMinutes;  // save for next refresh
        nowHour = nowHour % 12;  // nomalize hour to 0-12 instead 0-24

        bool usePast = false;
        if (nowMinutes > 34){
          nowMinutes = abs (nowMinutes - 60);
          nowHour ++; // need to show new hour es 2:45 -> 3 past 15
          // FIXME: docici meno minuti non appare "dodici"
          usePast = true;
        }

        uint8_t nowDots = nowMinutes % 5;
        if (nowMinutes > 4) {
          nowMinutes = (nowMinutes/5) -1; // 0 based value
        }else{
          nowMinutes = 0;
        }

        Serial.printf("Show: %u hour, %s minutes, %u dots \n", nowHour, minutiArray[nowMinutes], nowDots);
        displayTime(nowHour, nowMinutes, nowDots, usePast);
      }
      // colorUpdated(CALL_MODE_FX_CHANGED);
    }
};