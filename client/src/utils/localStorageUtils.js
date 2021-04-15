export default function objectToLocalStorage(data) {
  Object.keys(data).forEach((key) => localStorage.setItem(key, data[key]));
}
