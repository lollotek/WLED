export const pauseEvent = (e:Event) => {
  e.stopPropagation();
  e.preventDefault();
};

export const absMousePos = (e:MouseEvent) => {
  return ({
      x: e.pageX - (window.scrollX || window.pageXOffset),
    y: e.pageY - (window.scrollY || window.pageYOffset),
})};

export const scaleBetween = (unscaledNum:number, minAllowed:number, maxAllowed:number, min:number, max:number):number => {
  return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}