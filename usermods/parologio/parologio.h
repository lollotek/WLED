
/*
fairytwinkle 51
Halloween 53
Blink Rainbow 26
Running 15
fade 12
*/
#pragma once

#include "wled.h"
#define RELAY_PIN 12

class Parologio : public Usermod {
  private:
    int8_t minuteLast = 99;
    int8_t nowHour = -1;
    int8_t nowMinutes = -1;

    #define maskMaxPixels 162

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
      byte const pinStonePalliniArray[4] = {120, 133, 146, 159};
    #endif

    int maskLedsOn[maskMaxPixels] = 
    {
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0, // 50
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0, // 100
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0, // 150
      0,0,0,0,0,0,0,0,0,0,
      0,0,
    };


    void setSegmentWord(byte start, String chars){
      setSegment(start, chars.length());
    }

    void setSegment(byte start, byte len){
      for (int x=0; x < len; x++) {
        maskLedsOn[start + x] = 1;
      }
    }

    void displayTime(int8_t hour, int8_t minute, int8_t dots, bool past) {
        for (int x=0; x < maskMaxPixels; x++) {
          maskLedsOn[x] = 0;
        }

        if (hour != 1){
          setSegment(0, 4);  // sono [le]
          setSegment(5, 2);  // le
          // setSegment(8, 3);  // ore
        }else{
          setSegment(19, 1);  // [è] l'
          setSegment(21, 1);  // è [l']
        }

        setSegmentWord(pinOreArray[hour], oreArray[hour]);

        Serial.printf("minute: %u minute \n", minute);

        if (past) {
          setSegmentWord(pinMeno, "meno");
        }
        if (minute == 3){
          setSegment(pinUN, 2);
        }

        if (minute > 0){
          if (minute >= 1 && !past){
            setSegment(pinE, 1);
          }
          setSegmentWord(pinMinutiArray[minute-1], minutiArray[minute-1]);
        }
        
        #ifdef IS_STONE
          for (byte j=1; j < 5; j++) {
            setSegment(pinStonePalliniArray[j-1] -10, 10); // side decoration always on
            if (dots >= j){
              setSegment(pinStonePalliniArray[j-1], 3);
            }
          }
        #else
          for (byte j=1; j < 5; j++) {
            if (dots >= j){
              setSegment(pinPalliniArray[j-1], 1);
            }
          }
        #endif
    }

  public:
    void setup() {
        strip.getSegment(0).setOption(SEG_OPTION_ON, true);
        strip.getSegment(0).setOption(SEG_OPTION_SELECTED, true);
        colorUpdated(CALL_MODE_FX_CHANGED);
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
          usePast = true;
        }

        uint8_t nowDots = nowMinutes % 5;
        if (nowMinutes > 4) {
          nowMinutes = (nowMinutes/5); // 1 based value
          Serial.printf("%u fration five minute \n", nowMinutes);
        }else{
          nowMinutes = 0;
          Serial.printf("%u zero minute \n", nowMinutes);
        }

        Serial.printf("Show: %i hour, %i minutes, %u dots \n", nowHour, nowMinutes, nowDots, usePast);
        displayTime(nowHour, nowMinutes, nowDots, usePast);
      }
    }

    /*
     * handleOverlayDraw() is called just before every show() (LED strip update frame) after effects have set the colors.
     * Use this to blank out some LEDs or set them to a different color regardless of the set effect mode.
     * Commonly used for custom clocks (Cronixie, 7 segment)
     */
    void handleOverlayDraw()
    {
      // loop over all leds
      for (int x = 0; x <= maskMaxPixels; x++)
      {
        // check mask
        if (maskLedsOn[x] == 0)
        {
          // set pixel off
          strip.setPixelColor(x, RGBW32(0,0,0,0));
        }
      }
    }
};