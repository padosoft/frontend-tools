import {roundWithDecimal} from './roundWithDecimal';

export function scorporoIvaParteImponibile(importo, alquota) {
    const a = 100 + alquota;
    return roundWithDecimal((importo * 100) / a, 2);
}