import { useState, useEffect } from 'preact/hooks'
import { Dragger } from './components/Dragger'
import { scaleBetween } from './helpers/eventHelpers';

declare type Props = {
  value?: number
  color?: string
  gradient?: Array<string>
  onChange: (val:number) => void
  r?: number
}

export function LinearSlider({
  gradient = ['#000','#FFF'],
  value = 0.5,
  color = '#FFF',
  r = 4,
  onChange,
}: Props) {
  const [gradientID] = useState(`gradient${Math.random()}`);
  const [current, setCurrent] = useState(value);
  useEffect( () => 
    setCurrent(value)
  , [value]);

  return (
    <svg
      // ref={(x) => {
      //   this.containerNode = x
      // }}
      viewBox="0 0 100 16"
    >
      <g>
        <defs>
          <linearGradient id={gradientID} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradient.map((val, i, ar) => {
              return <stop offset={`${Math.trunc(scaleBetween(i, 0, 100, 0, ar.length-1))}%`} stop-color={val} />
            })}
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${gradientID})`}
          stroke-width="4"
          stroke-linecap="round"
          d="M5 8 l90 0.001" // startx startY lunghezza ychange
        />
      </g>

      <Dragger
        color={color}
        onChange={onChange}
        position={current}
        trueRadius={r*4}
        visibleRadius={r}
      />
    </svg>
  )
}
