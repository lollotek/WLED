import { useEffect, useState } from "preact/hooks";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useThrottle } from "../../utils/api";

export function LiveStyle(){
  const [socketUrl] = useState(`ws://${import.meta.env.DEV ? '192.168.1.19' : window.location.hostname}/ws`);
  const [liveColors, setLiveColors] = useState('');

  const {
    sendMessage,
    lastMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl);

  const chunk = (arr: Uint8Array, size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
  );


  const throttledWS = useThrottle(
    () => {
      if (lastMessage  && lastMessage.data instanceof ArrayBuffer) {
        if (lastMessage.data instanceof ArrayBuffer) {
          const leds = new Uint8Array(lastMessage.data);
          const ledColors = chunk(leds.slice(2),3); // ignore first 2 chars
          const str = ledColors.map((val,index) => `#char${index +1}{fill: rgb(${val[0]},${val[1]},${val[2]});}`).join('\n')
          setLiveColors(str)
        }
      }
    },
    800
  );
  useEffect(throttledWS, [lastMessage]);

  useEffect(() => {
    if (readyState === ReadyState.OPEN){
      // @ts-expect-error getWebSocket should be ready
      getWebSocket().binaryType = 'arraybuffer';
      sendMessage('{lv:true}');
    }
  }, [readyState, getWebSocket])

  return (
    <style type="text/css">{`
      #clock_preview {
        fill-opacity:1;
        fill-rule:evenodd;
        stroke-width:0.26458333;
        stroke-linecap:round;
        stroke-opacity:1;
      }
      ${liveColors}
  `}</style>
  )
}