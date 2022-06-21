/**
 * It returns a state and a setter function that will store the state in the object
 * storage
 * @param objectStorage - The storage object to use. This can be either localStorage or
 * sessionStorage.
 * @param key - The key to store the value under.
 * @returns A function that takes two arguments, objectStorage and key, and returns an
 * array with two elements. The first element is the state, and the second element is a
 * function that takes a value and sets the state.
 */
declare function useStorage(objectStorage: Storage, key: string): any[];
/**
 * It returns a function that returns a value from sessionStorage if it exists, otherwise it returns
 * the default value.
 * @param key - The key to store the value under.
 * @returns The useStorage function is being returned.
 */
declare function useSessionStorage(key: string): false | any[];
/**
 * It returns a function that returns a value from localStorage if it exists, otherwise it returns
 * the default value.
 * @param key - The key to store the value under.
 * @returns The useStorage function is being returned.
 */
declare function useLocalStorage(key: string): false | any[];
export { useStorage, useLocalStorage, useSessionStorage };
