export function getDataFromSelect2Single(data, property = null, defaultValue = null) {
    const selectionObj = data && data.length > 0 ? data[0] : defaultValue;
    if (selectionObj !== null && property !== null) {
        return selectionObj[property];
    }

    return selectionObj;
}