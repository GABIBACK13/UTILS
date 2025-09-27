// utils/localStorage.ts

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function persistToLocalStorage<T>(key: string) {
  return ({ setSelf, onSet }: any) => {
    const saved = getFromLocalStorage<T>(key, null);
    if (saved !== null) setSelf(saved);

    onSet((newValue: T, _, isReset: boolean) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}
