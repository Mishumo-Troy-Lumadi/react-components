/**
 * It takes an object and returns an array of arrays, where each inner array is a key-value pair from
 * the original object
 * @param {Object} data - The object you want to get the key-value pairs from.
 * @returns An array of arrays.
 */
function getPairs(data: Object) {
    return Object.entries(data)
}


/**
 * It takes an array of objects and returns an array of strings that are the keys of the objects.
 * @param data - Array<Object> - The data you want to convert to a table.
 * @returns An array of strings.
 */
function getColumns(data: Array<Object>){
    let columns: string[] = []

    data.forEach(object => {
        getPairs(object).forEach(pair => {
            (!(pair[1] !== undefined) && !columns.includes(pair[0])) && columns.push(pair[0])
        })
    })

    return columns
}


/**
 * Get the rows of the data by mapping the values of the pairs to the columns.
 * @param data - Array<Object> = [
 * @returns An array of arrays.
 */
function getRows(data: Array<Object>):any[][] {
    const pairs = getPairs(data)
    const columns = getColumns(data)

    const rows = pairs.map(pair => pair[1])

    const matrix = rows.map(value => {
        const row: any[] = []
        columns.forEach(column => row.push(value[column]))
        return row
    })

    return matrix
}

/**
 * It takes an array of objects and returns an array of two arrays, the first being the column names
 * and the second being the rows
 * @param data - Array<Object>
 * @returns An array of two elements. The first element is an array of column names. The second element
 * is an array of rows.
 */
function getTable(data: Array<Object>):[string[],any[][]]{
    const columns:string[] = getColumns(data)
    const rows:any[][] = getRows(data)

    return [columns, rows]
}


export {
    getTable, getColumns, getRows
}