export function roundWithDecimal(value, decimal) {
    const digits = Math.pow(10, decimal);
    return Math.round((value + 0.00001) * digits) / digits;
}