import {roundWithDecimal} from './roundWithDecimal';

export function toEuroFormatted(value) {
    value = roundWithDecimal(value, 2);
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
    }).format(value);
}