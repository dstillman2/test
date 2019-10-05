function fetchFromLocalStorage(name, { defaultValue }) {
  if (! window.localStorage) return;
  
  const value = window.localStorage.getItem(name);

  if (! value) {
    return defaultValue;
  }

  let parsedValue;

  try {
    parsedValue = JSON.parse(value);
  } catch (e) {
    console.error('::LOG TO SERVER');
    return defaultValue;
  }

  return parsedValue;
}

export default fetchFromLocalStorage;