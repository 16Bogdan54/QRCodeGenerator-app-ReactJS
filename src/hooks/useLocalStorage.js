import { useState } from "react";

const useLocalStorage = (key, initialVal) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialVal;
    } catch (error) {
      console.log(error);
      return initialVal;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      alert(error);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
