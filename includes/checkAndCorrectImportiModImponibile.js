export function checkAndCorrectImportiModImponibile (totale, imponibile, imposta){
    const diff = totale - (imponibile + imposta);
    if (diff !== 0) {
        imponibile += diff;
    }

    return {totale, imponibile, imposta};
}