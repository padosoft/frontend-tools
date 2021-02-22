import {roundWithDecimal} from './roundWithDecimal';

export function calcolaImportoConIva(importo, aliquota){
    const a = 100 + aliquota;
    return roundWithDecimal((importo * a) / 100, 5);
}