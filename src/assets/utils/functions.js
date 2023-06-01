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