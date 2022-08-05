import { pauseEvent,  absMousePos, scaleBetween } from '../helpers/eventHelpers'
import { CircularHandle } from './CircularHandle'

declare type Props = {
  onChange: (value:number) => void,
  color: string,
  position: number,
  trueRadius: number,
  visibleRadius: number
}

export function Dragger({
  onChange,
  color,
  position,
  trueRadius,
  visibleRadius
}:Props) {
  const addEventListeners = (isTouch:boolean) => {
    // this.setState({ pressed: true });
    if (isTouch){
      document.addEventListener(
        'touchmove',
        handleTouchMove,
        { passive: false },
      )
      document.addEventListener(
        'touchend',
        handleTouchEnd,
        { passive: false },
      )
    }else{
      document.addEventListener(
        'mousemove',
        handleMouseMove,
        { passive: false },
      )
      document.addEventListener(
        'mouseup',
        handleMouseUp,
        { passive: false },
      )
    }
    
  }

  const removeEventListeners = (isTouch:boolean) => {
    // this.setState({ pressed: false });
    if (isTouch){
      document.removeEventListener(
        'touchmove',
        handleTouchMove,
      )
      document.removeEventListener(
        'touchend',
        handleTouchEnd,
      )
    }else{
      document.removeEventListener(
        'mousemove',
        handleMouseMove,
      )
      document.removeEventListener(
        'mouseup',
        handleMouseUp,
      )
    }
    
  }

  const handleMouseDown =  (e:MouseEvent) => {
    pauseEvent(e)
    addEventListeners(false)
  }

  const handleTouchStart =  (e:TouchEvent) => {
    pauseEvent(e)
    addEventListeners(true)
  }

  const handleMouseUp =  (e:MouseEvent) => {
    pauseEvent(e)
    removeEventListeners(false)
  }

  const handleTouchEnd =  (e:TouchEvent) => {
    pauseEvent(e)
    removeEventListeners(true)
  }

  const handleMouseMove = (e:MouseEvent) => {
    pauseEvent(e)
    const radialPos = Math.min(100, Math.max(0, absMousePos(e).x))
    onChange(radialPos)
  }

  const handleTouchMove = (e:TouchEvent) => {
    pauseEvent(e)
    const radialPos = Math.min(95, Math.max(5, (e.touches[0].clientX / window.innerWidth) * 100))
    const scale = scaleBetween(radialPos, 0, 1, 5, 95);
    onChange(scale)
  }


  return (
    <CircularHandle
      color={color}
      cx={scaleBetween(position, 5, 95, 0, 1)}
      cy={8}
      // isPressed={this.state.pressed}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      trueRadius={trueRadius}
      visibleRadius={visibleRadius}
    />
  )
  
}