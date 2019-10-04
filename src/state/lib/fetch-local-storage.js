function fetchFromLocalStorage(name) {
  if (! window.localStorage) return;

  const value = window.localStorage.getItem(name);

  return JSON.parse(value);
}

export default fetchFromLocalStorage;