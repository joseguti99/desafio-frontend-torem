export const getStorage = <T>(key: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  }
};

export const setStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const deleteStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const clearStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};