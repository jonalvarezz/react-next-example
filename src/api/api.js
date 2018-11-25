import data from './data'

export const fetchData = () => new Promise(function fetchData(resolve, reject) {
  window.setTimeout(() => {
    resolve(data)
  }, 1500)
})
