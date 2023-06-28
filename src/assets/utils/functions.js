import axios from 'axios'

export function wait(waitTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime)
  })
}

export const api = axios.create({
  baseURL: "http://localhost:4300",
  headers: {
    "Content-Type": "application/json",
  },
});

export const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

export const debounce = (cb, delay)=> {
  let timer = null

  if(timer) clearTimeout(timer)

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(()=> cb.apply(...args),delay) 
  }
}