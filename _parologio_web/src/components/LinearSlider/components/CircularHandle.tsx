declare type Props = {
  color: string,
  cx: number,
  cy: number,
  onMouseDown: (e: MouseEvent) => void,
  onTouchStart: (e: TouchEvent) => void,
  trueRadius: number,
  visibleRadius: number,
};

export function CircularHandle({
  color = '#FFF',
  trueRadius = 24,
  visibleRadius = 18,
  cx = 0,
  cy = 0,
  onMouseDown,
  onTouchStart
}:Props){
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          fill={color}
          stroke-opacity={0}
          stroke={'#FFF'}
          stroke-width={trueRadius}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          r={visibleRadius}
        />
      </g>
    )
}
