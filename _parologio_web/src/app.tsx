import { useEffect, useState } from 'preact/hooks';
import { hslToRgb } from './components/LinearSlider/helpers/colorHelpers';
import { scaleBetween } from './components/LinearSlider/helpers/eventHelpers';
import { Preview } from './components/Preview/Preview';
import { SectionSelector } from './components/SectionSelector';
import { BackgroundColor } from './pages/BackgroundColor';
import { LedBrightness } from './pages/LedBrightness';
import { LedEffects } from './pages/LedEffects';
import { WordsColor } from './pages/WordsColor';
import { WifiSettings } from './pages/WifiSettings';
import { TimeSettings } from './pages/TimeSettings';
import { sendConfig, sendHue, sendLightness, useThrottle } from './utils/api';

export function App() {
  const [section, setSection] = useState('Lett');
  const [hue, setHue] = useState(.5);
  const [huebg, setHueBg] = useState(.1);
  const [toggleBg, setToggleBg] = useState(true);
  const [effect, setEffect] = useState(0);
  const [brightness, setBrightness] = useState(.5);
  // const wordSegments = "12345671234";
  // const throttledHue = useThrottle(
  //   () => {
  //     console.log('sendHue');
  //     sendHue(hue)
  //   },
  //   300
  // );
  // useEffect(throttledHue, [hue]);
  // useEffect(throttledHue, [hue, huebg, effect]);

  const throttledHue = useThrottle(
    () => {
      const color = hslToRgb(hue, 1, brightness)
      const shiftcolor = hslToRgb(hue + .1, 1, .5)
      const colorbg = hslToRgb(huebg, 1, .3)
      console.log('sendConfig');
      sendConfig({"seg":[
        {"fx":effect,"col":[color]},
      ]})
    },
    300
  );
  useEffect(throttledHue, [hue, huebg, effect, brightness]);

  const throttledBrightness = useThrottle(
    () => {
      console.log('### sendBrightness', brightness);
      // sendLightness(brightness)
    },
    300
  );
  useEffect(throttledBrightness, [brightness]);

  useEffect(() => {
    sendConfig({"seg":[
      {on:toggleBg}
    ]})
  }, [toggleBg] );


  // const throttledBrightness = useThrottle(
  //   () => {
  //     const bri = Math.trunc(scaleBetween(brightness, 0, 255, 0, 1));
  //     const bribg =  Math.trunc(scaleBetween(brightness * .8, 0, 255, 0, 1));
  //     //sendConfig({bri, v: true})
  //     sendConfig({
  //       "v": true,
  //       "seg":[
  //         {"bri": bribg},
  //         ...Array.from(wordSegments, () => ({bri}))
  //       ]
  //     })
  //   },
  //   300
  // );
  // useEffect(throttledBrightness, [brightness]);
// min-h-screen flex justify-center items-center
  // onClick={() => sendConfig({"seg":[{"fx":9,"col":[[0,100,200]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]},{"col":[[200,200,20]]}]})}
  return (
    <div className="w-full  p-4 bg-slate-200">
      {/* <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Parologio config</span>
        </h2>
      </div> */}
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center justify-center">
        <Preview />
      </div>

      <SectionSelector selected={section} onChange={setSection}/>

      {section ==='Lett' && <>
        <WordsColor value={hue} onChange={setHue}/>
        <LedBrightness value={brightness} onChange={setBrightness}/>
      </>}
      {/* {section ==='Sfon' && <BackgroundColor value={huebg} onChange={setHueBg} enabled={toggleBg} onToggle={setToggleBg}/>} */}
      {/* {section ==='Lum' && <LedBrightness value={brightness} onChange={setBrightness}/>} */}
      {section ==='Effet' && <LedEffects value={effect} onChange={setEffect}/>}
      {section ==='Time' && <TimeSettings />}
      {section ==='Wifi' && <WifiSettings />}

    </div>
  )
}