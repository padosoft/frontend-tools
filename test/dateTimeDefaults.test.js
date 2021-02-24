const { DateTime } = require("luxon");
const padosoftFrontendTools = require('../dist/padosoft-frontend-tools');

test('nowDbIsoDateTime()', () => {
    expect(padosoftFrontendTools.nowDbIsoDateTime()).toBe(DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss"))
})

test('dateITA2ISO()', () => {
    expect(padosoftFrontendTools.dateITA2ISO('12/12/2021')).toBe('2021-12-12')
})

test('dateISO2ITA()', () => {
    expect(padosoftFrontendTools.dateISO2ITA('2021-12-06')).toBe('06/12/2021')
})

test('dateTimeDbISO2ITA()', () => {
    expect(padosoftFrontendTools.dateTimeDbISO2ITA('2021-12-06 16:49:25')).toBe('06/12/2021 16:49:25')
})

test('dateTimeITA2DbISO()', () => {
    expect(padosoftFrontendTools.dateTimeITA2ISO('06/12/2021 16:49:25')).toBe('2021-12-06 16:49:25')
})

test('isITADate()', () => {
    expect(padosoftFrontendTools.isITADate('06/12/2021 16:49:25')).toBe(true)
})

test('NOT isITADate()', () => {
    expect(padosoftFrontendTools.isITADate('2021-06-23 16:49:25')).toBe(false)
})

test('isISODate()', () => {
    expect(padosoftFrontendTools.isISODate('2021-06-23 16:49:25')).toBe(true)
})

test('NOT isISODate()', () => {
    expect(padosoftFrontendTools.isISODate('06/12/2021 16:49:25')).toBe(false)
})