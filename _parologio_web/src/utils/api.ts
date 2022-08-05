import {throttle} from 'lodash'
import { useCallback, useEffect, useRef } from 'preact/hooks'

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
