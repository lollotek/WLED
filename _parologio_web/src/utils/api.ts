import {throttle} from 'lodash'
import { useCallback, useEffect, useRef } from 'preact/hooks'

export const sendLightness = (value: number, showErr = false) => {
  return fetch(`/lightness?value=${value.toFixed(2)}`, {
      method: 'GET',
        })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          if (showErr) {
            throw new Error(response.statusText)
          }
        } else {
          return response.json()
        }
      }
    )
    .catch((err) => {
      if (showErr) {
        throw new Error(err)
      }
      console.log('Fetch Error :' , err)
    })
}

export const sendHue = (value: number, showErr = false) => {
  return fetch(`/hue?value=${value.toFixed(2)}`, {
      method: 'GET',
        })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          if (showErr) {
            throw new Error(response.statusText)
          }
        } else {
          return response.json()
        }
      }
    )
    .catch((err) => {
      if (showErr) {
        throw new Error(err)
      }
      console.log('Fetch Error :' , err)
    })
}

export const sendConfig = (body: object, showErr = false) => {
  return fetch('/json', {
      method: 'POST',
      body: JSON.stringify(body),
  })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          if (showErr) {
            throw new Error(response.statusText)
          }
        } else {
          return response.json()
        }
      }
    )
    .catch((err) => {
      if (showErr) {
        throw new Error(err)
      }
      console.log('Fetch Error :' , err)
    })
}

export const getWifiList = (showErr = false) => {
  return fetch(`/json/net`, {
      method: 'GET',
        })
    .then(    
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          if (showErr) {
            throw new Error(response.statusText)
          }
        } else {
          return response.json()
        }
      }
    )
    .catch((err) => {
        if (showErr) {
        throw new Error(err)
      }
      console.log('Fetch Error :' , err)
    })
}


// toggle 
// {"seg":[{"id":X,"on":"t"}]}

// fetch("http://4.3.2.1/settings/wifi", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "en,en-US;q=0.9,it-IT;q=0.8,it;q=0.7",
//     "cache-control": "max-age=0",
//     "content-type": "application/x-www-form-urlencoded",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrer": "http://4.3.2.1/settings/wifi",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "CS=Vodafone-34808741&CP=***4&I0=0&I1=0&I2=0&I3=0&G0=0&G1=0&G2=0&G3=0&S0=255&S1=255&S2=255&S3=0&CM=wled-df23f4&AS=PAROLOGIO-AP&AP=***********&AC=1&AB=0&WS=on&RMAC=&ETH=0",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });


// /json/net

// /ws
// {
//   "seg": {
//     "col": [
//       [
//         0,
//         0,
//         255,
//         0
//       ],
//       [],
//       []
//     ]
//   },
//   "v": true,
//   "time": 1731362823
// }

export const useThrottle = (cb: () => void, delay: number) => {
  // const options = { leading: true, trailing: false }; // add custom lodash options
  const cbRef = useRef(cb);
  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => { cbRef.current = cb; });
  return useCallback(
    throttle(() => cbRef.current(), delay), //, options
    // throttle((...rest) => cbRef.current(...rest), delay), //, options
    [delay]
  );
}
