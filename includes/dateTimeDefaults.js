import { DateTime } from 'luxon';

function nowDbIsoDateTime() {
    return DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
}

function nowDateTime() {
    return DateTime.now();
}

function dateITA2ISO (dateStr) {
    let inDate = DateTime.fromFormat(dateStr, "dd/MM/yyyy");
    return inDate.toFormat("yyyy-MM-dd");
}

function dateISO2ITA (dateStr) {
    let inDate = DateTime.fromISO(dateStr);
    return inDate.toFormat("dd/MM/yyyy");
}

function dateTimeDbISO2ITA (dateStr) {
    let inDate = DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm:ss");
    return inDate.toFormat("dd/MM/yyyy HH:mm:ss");
}

function dateTimeITA2ISO (dateStr) {
    let inDate = DateTime.fromFormat(dateStr, "dd/MM/yyyy HH:mm:ss");
    return inDate.toFormat("yyyy-MM-dd HH:mm:ss");
}

function dateTimeISO2ITA (dateStr) {
    let inDate = DateTime.fromISO(dateStr);
    return inDate.toFormat("dd/MM/yyyy HH:mm:ss");
}

function isITADate(dateStr) {
    return dateStr.indexOf("/") >= 0;
} 

function isISODate(dateStr) {
    return dateStr.indexOf("-") >= 0;
}

export { nowDbIsoDateTime, nowDateTime, dateITA2ISO, dateISO2ITA, dateTimeDbISO2ITA, dateTimeITA2ISO, dateTimeISO2ITA, isITADate, isISODate};