/**
 * `useToggle` is a custom hook that returns a state variable and a function to toggle
 * that state variable.
 * @param [defaultValue=false] - The default value of the toggle.
 * @returns An array with two elements. The first element is the state, the second
 * element is the toggle function.
 */
export default function useToggle(defaultValue?: boolean): readonly [boolean, (value?: boolean) => void];
/**
 * It returns a state and a setState function that toggles the state when the user presses a key
 * combination that includes a key in the keys array.
 * @param [keys] - an array of keys that you want to toggle the state with.
 * @param [defaultValue=false] - The default value of the toggle.
 * @returns The return value of the function is an array with two elements. The first element is the
 * state of the toggle, and the second element is the function to toggle the state.
 */
declare function useKeyToggle(keys?: string[], defaultValue?: boolean): readonly [boolean, (value?: boolean | undefined) => void];
export { useKeyToggle };
