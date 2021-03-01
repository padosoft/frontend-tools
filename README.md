# Padosoft Frontend Tools

Si tratta di un pacchetto javascript di funzioni helpers.
Per installarlo:
```javascript
npm i @padosoft/frontend-tools --save
```

Per utilizzarlo sono possibili i tre approcci commonJS, AMD, o con lo script:

CommonJs

```javascript
const padosoftFrontendTools = require("@padosoft/frontend-tools");
```

AMD

```javascript
import * as padosoftFrontendTools from "@padosoft/frontend-tools";
```

oppure le singole funzioni.

```javascript
import { roundDecimalWith, isISODate } from "@padosoft/frontend-tools";
```

Per l'uso da script è consigliabile copiare il file dalla cartella node_modules in una a scelta. Una volta incluso sarà presente un oggetto globale 'padosoftFrontendTools' con il quale richiamare le funzioni.

```javascript
<script src="dist/padosoft-frontend-tools.js"></script>
[...]
<script>
    console.log(padosoftFrontendTools.roundWithDecimal(21345.980978, 4));
</script>
```

## Funzioni

### ***roundWithDecimal(value, decimal)***

```javascript
padosoftFrontendTools.roundWithDecimal(value, decimal)
```

Funzione per arrotondare dei numeri con *n* decimali.

**value**

Valore che deve essere arrotondato. `tipo number`

**decimal**

Numero di decimali. `tipo number`

***RETURN***

Il valore arrotondato. `tipo number`

---

### ***calcolaImportoConIva(importo, aliquota)***

```javascript
padosoftFrontendTools.calcolaImportoConIva(importo, aliquota)
```

Funzione per calcolare un importo con iva, dato l'importo e l'aliquota iva.

**importo**

Importo al quale aggiungere l'iva. `tipo number`

**aliquota**

Aliquota percentuale. `tipo number`

***RETURN***

L'importo comprensivo di iva. `tipo number`

---

### ***calcoloIvaDaImponibile(value, aliquota)***

```javascript
padosoftFrontendTools.calcoloIvaDaImponibile(value, aliquota)
```

Funzione per calcolare l'imposta iva a partire dall'imponibile.

**value**

Importo sul quale calcolare l'iva. `tipo number`

**aliquota**

Aliquota percentuale. `tipo number`

***RETURN***

L'imposta. `tipo number`

---

### ***checkAndCorrectImportiModImponibile (totale, imponibile, imposta)***

```javascript
adosoftFrontendTools.checkAndCorrectImportiModImponibile (totale, imponibile, imposta)
```

Funzione per verificare e eventualmente correggere il valore dell'imponibile quando, arrotondando un valore dopo il calcolo dell'iva, si possa presentare una differenza con il totale. L'eventuale correzione viene applicata all'imponibile.

**totale**

Il totale utilizzato per verificare l'esattezza dell'arrotondamento. `tipo number`

**imponibile**

Imponibile. `tipo number`

**imposta**

Valore dell'imposta per calcolare il totale. `tipo number`

***RETURN***

Un oggetto composto dal: totale, imponibile, imposta. `tipo Object: {totale, imponibile, imposta}`

---
### ***checkAndCorrectImportiModImposta (totale, imponibile, imposta)***

```javascript
padosoftFrontendTools.checkAndCorrectImportiModImposta (totale, imponibile, imposta)
```

Funzione per verificare e eventualmente correggere il valore dell'imposta quando, arrotondando un valore dopo il calcolo dell'iva, si possa presentare una differenza con il totale. L'eventuale correzione viene applicata alll'imposta.

**totale**

Il totale utilizzato per verificare l'esattezza dell'arrotondamento. `tipo number`

**imponibile**

Imponibile. `tipo number`

**imposta**

Valore dell'imposta per calcolare il totale. `tipo number`

***RETURN***

Un oggetto composto dal: totale, imponibile, imposta. `tipo Object: {totale, imponibile, imposta}`

---

### ***nowDbIsoDateTime()***

```javascript
padosoftFrontendTools.nowDbIsoDateTime()
```

Funzione che restituisce una stringa in formato ISO di MySql 'YYYY-mm-dd HH:ii:ss' di ora.

***RETURN***

Una stringa della data e ora di adesso in formato ISO di MySql 'YYYY-mm-dd HH:ii:ss'. `tipo string`

---

### ***nowDateTime()***

```javascript
padosoftFrontendTools.nowDateTime()
```

Funzione che restituisce un oggetto DateTime di Luxon di adesso.

***RETURN***

Un oggetto di tipo DateTime di Luxon di adesso. `tipo Object`

---

### ***dateITA2ISO(dateStr)***

```javascript
padosoftFrontendTools.dateITA2ISO(dateStr)
```

Funzione che converte una data in formato italiano in formato ISO (solo la data).

**dateStr**

Valore della data in formato italiano. `tipo string`

***RETURN***

Valore della data i nformato ISO. `tipo string`

---

### ***dateISO2ITA(dateStr)***

```javascript
padosoftFrontendTools.dateISO2ITA(dateStr)
```

Funzione che converte una data in formato ISO in formato Italiano (solo la data).

**dateStr**

Valore della data in formato ISO. `tipo string`

***RETURN***

Valore della data i nformato italiano. `tipo string`

---

### ***dateTimeDbISO2ITA(dateStr)***

```javascript
padosoftFrontendTools.dateTimeDbISO2ITA(dateStr)
```

Funzione che converte una data e tempo da formato Iso MySql in formato Italiano.

**dateStr**

Valore della data e del tempo  in formato Iso MySql. `tipo string`

***RETURN***

Valore della data e del tempo in formato Italiano. `tipo string`

---

### ***dateTimeITA2ISO(dateStr)***

```javascript
padosoftFrontendTools.dateTimeITA2ISO(dateStr)
```

Funzione che converte una data e tempo in formato italiano in formato ISO.

**dateStr**

Valore della data e tempo in formato italiano. `tipo string`

***RETURN***

Valore della data e tempo  in formato ISO MySql. `tipo string`

---

### ***dateTimeISO2ITA(dateStr)***

```javascript
padosoftFrontendTools.dateTimeISO2ITA(dateStr)
```

Funzione che converte una data e tempo in formato ISO 8610  in formato italiano.

**dateStr**

Valore della data e tempo in formato ISO 8610. `tipo string`

***RETURN***

Valore della data e tempo in formato italiano. `tipo string`

---
### ***isITADate(dateStr)***

```javascript
padosoftFrontendTools.isITADate(dateStr)
```

Funzione che converte una data e tempo in formato ISO 8610  in formato italiano.

**dateStr**

Valore della data e tempo in formato ISO 8610. `tipo string`

***RETURN***

Valore della data e tempo in formato italiano. `tipo string`

---

### ***isISODate(dateStr)***

```javascript
padosoftFrontendTools.isISODate(dateStr)
```

Funzione che converte una data e tempo in formato ISO 8610  in formato italiano.

**dateStr**

Valore della data e tempo in formato ISO 8610. `tipo string`

***RETURN***

Valore della data e tempo in formato italiano. `tipo string`

---

### ***initSelectAjax(id)***

```javascript
padosoftFrontendTools.initSelectAjax(id)
```


Funzione che inizializza un select con select2 a partire dal selettore.

**id**

Selettore css per recuperare gli elementi da inizializzare. Può fare riferimento anche ad oggetti multiple. `tipo string`

***RETURN***

void.

---

### ***initDatepicker(id)***

```javascript
padosoftFrontendTools.initDatepicker(id)
```


Funzione che inizializza un input text con flatpickr come date picker a partire dal selettore.

**id**

Selettore css per recuperare gli elementi da inizializzare. Può fare riferimento anche ad oggetti multiple. `tipo string`

***RETURN***

void.

---

### ***initDateTimePicker(id)***

```javascript
padosoftFrontendTools.initDateTimePicker(id)
```


Funzione che inizializza un input text con flatpickr come date-time picker a partire dal selettore.


**id**

Selettore css per recuperare gli elementi da inizializzare. Può fare riferimento anche ad oggetti multiple. `tipo string`

***RETURN***

void.

---

### ***initTimePicker(id)***

```javascript
padosoftFrontendTools.initTimePicker(id)
```


Funzione che inizializza un input text con flatpickr come time picker a partire dal selettore.

**id**

Selettore css per recuperare gli elementi da inizializzare. Può fare riferimento anche ad oggetti multiple. `tipo string`

***RETURN***

void.

---

### ***getDataFromSelect2Single(data, property = null, defaultValue = null)***
```javascript
padosoftFrontendTools.getDataFromSelect2Single(data, property = null, defaultValue = null)
```

Funzione che recupera un valore singolo dai dati da un elemento inizializzato con select2. Recupera il primo elemento perché si considera una selezione singola.

**data**

Dati recuperati da un elemento inizializzato con select2. `tipo Qualsiasi`

**property**

Proprietà dell'oggetto recuperato che si vuole che venga restituita. Parametro opzionale. `tipo string`

**defaultValue**

Valore di default se non ci fossero valori da restituire. Parametro opzionale. `tipo Qualsiasi`

***RETURN***

Valore recuperato come viene passato nelle options o proprietà selezionat o valore di default. `tipo Qualsiasi`

---

### ***getDataFromSelect2Multiple(data)***

```javascript
padosoftFrontendTools.getDataFromSelect2Multiple(data)
```

Funzione che recupera un array di valori multipli da un elemento inizializzato con select2. Recupera tutto perché si considera una selezione multipla.

**data**

Dati recuperati da un elemento inizializzato con select2. `tipo Qualsiasi`

***RETURN***

Array di valori selezionati.

---

### ***getListForSelectAjax(id, text)***

```javascript
padosoftFrontendTools.getListForSelectAjax(id, text)
```

Funzione che crea l'opzione singola per un select2 che deve partire con un valore presente.

**id**

Valore che rappresenta la value della option. `tipo string`

**text**

Valore che rappresenta il testo della option. `tipo string`

***RETURN***

Stringa html di una option con i valori passati. `tipo string`

---

### ***zeroOrValue(value)***

```javascript
padosoftFrontendTools.zeroOrValue(value)
```

Funzione che controlla se un valore è di tipo numerico. Restituisce il valore se numerico oppure zero.

**value**

Valore dac controllare. `tipo qualsiasi`


***RETURN***

Il valore oppure zero. `tipo number`

---

### ***toEuroFormatted(value)***

```javascript
padosoftFrontendTools.toEuroFormatted(value)
```

Funzione che formatta un valore nella valuta euro.

**value**

Valore dell'importo da formattare. `tipo number`


***RETURN***

Il valore formattato. `tipo string`

---

### ***scorporoIvaParteImposta (importo, alquota)***

```javascript
padosoftFrontendTools.scorporoIvaParteImposta (importo, alquota)
```

Funzione che scorpora l'iva da un importo, restituendo l'imposta.

**importo**

Valore dell'importo comprensivo di iva. `tipo number`

**alquota**

Valore dell'aliquota. `tipo number`


***RETURN***

Il valore dell'imposta. `tipo number`

---

### ***scorporoIvaParteImponibile (importo, alquota)***

```javascript
padosoftFrontendTools.scorporoIvaParteImponibile (importo, alquota)
```

Funzione che scorpora l'iva da un importo, restituendo l'imponibile.

**importo**

Valore dell'importo comprensivo di iva. `tipo number`

**alquota**

Valore dell'aliquota. `tipo number`


***RETURN***

Il valore dell'imponibile. `tipo number`

---

### ***scorporoIvaImponibileConCorrezione (importo, alquota)***

```javascript
padosoftFrontendTools.scorporoIvaImponibileConCorrezione (importo, alquota)
```

Funzione che scorpora l'iva da un importo e poi controlla ed eventualmente corregge l'importo.

**importo**

Valore dell'importo comprensivo di iva. `tipo number`

**alquota**

Valore dell'aliquota. `tipo number`


***RETURN***

Un oggetto composto dal: totale, imponibile, imposta. `tipo Object: {totale, imponibile, imposta}`

---

### ***axiosGet(config)***

```javascript
padosoftFrontendTools.axiosGet(config)
```

Funzione eseguire una chiamata asincrona con axios e metodo GET.

**config**

Oggetto di configurazione della chiamata. `tipo Object`
Proprietà dell'oggetto:
- url: stringa che rappresenta l'url per la chiamata.
- success: funzione obbligatoria per gestire il success. (response) => {}
- error: funzione obbligatoria per gestire l'errore. (error) => {}
- blockUI: default true
- unBlockUI: default false
- logOnSuccess: default true
- logOnError: default true
- axiosConfig: default {}
- 
```javascript
axiosGet({
    url: "https://getbootstrap.com",
    success: (response) => {
      alert("successo");
    },

    error: (error) => {
      alert("errore", error);
    },
    blockUI: false,
  });
```

***RETURN***

void

---

### ***axiosPost(config)***

```javascript
padosoftFrontendTools.axiosPost(config)
```

Funzione eseguire una chiamata asincrona con axios e metodo POST.

**config**

Oggetto di configurazione della chiamata. `tipo Object`
Proprietà dell'oggetto:
- url: stringa che rappresenta l'url per la chiamata.
- data: oggetto con i parametri da passare alla POST.
- success: funzione obbligatoria per gestire il success. (response) => {}
- error: funzione obbligatoria per gestire l'errore. (error) => {}
- blockUI: default true
- unBlockUI: default false
- logOnSuccess: default true
- logOnError: default true
- axiosConfig: default {}
- 
```javascript
axiosPost({
    url: "https://getbootstrap.com",
    data: {
        nome: 'Mario',
        cognome: 'Rossi'
    }
    success: (response) => {
      alert("successo");
    },

    error: (error) => {
      alert("errore", error);
    },
    blockUI: false,
  });
```

***RETURN***

void
---

### ***axiosPatch(config)***

```javascript
padosoftFrontendTools.axiosPatch(config)
```

Funzione eseguire una chiamata asincrona con axios e metodo PATCH.

**config**

Oggetto di configurazione della chiamata. `tipo Object`
Proprietà dell'oggetto:
- url: stringa che rappresenta l'url per la chiamata.
- data: oggetto con i parametri da passare alla PATCH.
- success: funzione obbligatoria per gestire il success. (response) => {}
- error: funzione obbligatoria per gestire l'errore. (error) => {}
- blockUI: default true
- unBlockUI: default false
- logOnSuccess: default true
- logOnError: default true
- axiosConfig: default {}
- 
```javascript
axiosPatch({
    url: "https://getbootstrap.com",
    data: {
        nome: 'Mario',
        cognome: 'Rossi'
    }
    success: (response) => {
      alert("successo");
    },

    error: (error) => {
      alert("errore", error);
    },
    blockUI: false,
  });
```

***RETURN***

void
---

### ***axiosPut(config)***

```javascript
padosoftFrontendTools.axiosPut(config)
```

Funzione eseguire una chiamata asincrona con axios e metodo PUT.

**config**

Oggetto di configurazione della chiamata. `tipo Object`
Proprietà dell'oggetto:
- url: stringa che rappresenta l'url per la chiamata.
- data: oggetto con i parametri da passare alla PUT.
- success: funzione obbligatoria per gestire il success. (response) => {}
- error: funzione obbligatoria per gestire l'errore. (error) => {}
- blockUI: default true
- unBlockUI: default false
- logOnSuccess: default true
- logOnError: default true
- axiosConfig: default {}
- 
```javascript
axiosPut({
    url: "https://getbootstrap.com",
    data: {
        nome: 'Mario',
        cognome: 'Rossi'
    }
    success: (response) => {
      alert("successo");
    },
    error: (error) => {
      alert("errore", error);
    },
    blockUI: false,
  });
```

***RETURN***

void
---

### ***axiosDelete(config)***

```javascript
padosoftFrontendTools.axiosDelete(config)
```

Funzione eseguire una chiamata asincrona con axios e metodo DELETE.

**config**

Oggetto di configurazione della chiamata. `tipo Object`
Proprietà dell'oggetto:
- url: stringa che rappresenta l'url per la chiamata.
- success: funzione obbligatoria per gestire il success. (response) => {}
- error: funzione obbligatoria per gestire l'errore. (error) => {}
- blockUI: default true
- unBlockUI: default false
- logOnSuccess: default true
- logOnError: default true
- axiosConfig: default {}
- 
```javascript
axiosDelete({
    url: "https://getbootstrap.com",
    success: (response) => {
      alert("successo");
    },

    error: (error) => {
      alert("errore", error);
    },
    blockUI: false,
  });
```

***RETURN***

void