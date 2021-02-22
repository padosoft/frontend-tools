import {scorporoIvaParteImponibile} from './scorporoIvaParteImponibile';
import {scorporoIvaParteImposta} from './scorporoIvaParteImposta';
import {checkAndCorrectImportiModImponibile} from './checkAndCorrectImportiModImponibile';

export function scorporoIvaImponibileConCorrezione(importo, aliquota){
    let tmpImponibile = scorporoIvaParteImponibile(importo, aliquota);
    let tmpImposta = scorporoIvaParteImposta(importo, aliquota);
    const {totale, imponibile, imposta} = checkAndCorrectImportiModImponibile(importo, tmpImponibile, tmpImposta);

    return imponibile;
}