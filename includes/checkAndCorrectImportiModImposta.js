export function checkAndCorrectImportiModImposta (totale, imponibile, imposta){
    const diff = totale - (imponibile + imposta);
    if (diff !== 0) {
        imposta += diff;
    }

    return {totale, imponibile, imposta};
}