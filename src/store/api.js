export const fetchData = () =>
  fetch('/data.json').then(response => response.json())
