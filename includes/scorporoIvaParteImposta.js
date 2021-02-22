import {roundWithDecimal} from './roundWithDecimal';

export function scorporoIvaParteImposta (importo, alquota){
    const a = 100 + alquota;
    const imponibile = roundWithDecimal((importo * 100) / a, 2);

    return importo - imponibile;
}