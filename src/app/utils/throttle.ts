const throttle = (
  throttlePause: boolean,
  callback: () => void,
  time: number,
) => {
  if (throttlePause) return
  throttlePause = true
  
  setTimeout(() => {
    callback()
    throttlePause = false
  }, time)
};

export default throttle