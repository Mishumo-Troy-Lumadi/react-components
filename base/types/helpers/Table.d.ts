/**
 * It takes an array of objects and returns an array of strings that are the keys of the objects.
 * @param data - Array<Object> - The data you want to convert to a table.
 * @returns An array of strings.
 */
declare function getColumns(data: Array<Object>): string[];
/**
 * Get the rows of the data by mapping the values of the pairs to the columns.
 * @param data - Array<Object> = [
 * @returns An array of arrays.
 */
declare function getRows(data: Array<Object>): any[][];
/**
 * It takes an array of objects and returns an array of two arrays, the first being the column names
 * and the second being the rows
 * @param data - Array<Object>
 * @returns An array of two elements. The first element is an array of column names. The second element
 * is an array of rows.
 */
declare function getTable(data: Array<Object>): [string[], any[][]];
export { getTable, getColumns, getRows };
