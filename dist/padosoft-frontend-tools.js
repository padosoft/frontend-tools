/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("luxon"));
	else if(typeof define === 'function' && define.amd)
		define(["luxon"], factory);
	else if(typeof exports === 'object')
		exports["padosoftFrontendTools"] = factory(require("luxon"));
	else
		root["padosoftFrontendTools"] = factory(root["luxon"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_luxon__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/calcolaImportoConIva.js":
/*!******************************************!*\
  !*** ./includes/calcolaImportoConIva.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcolaImportoConIva\": () => (/* binding */ calcolaImportoConIva)\n/* harmony export */ });\n/* harmony import */ var _roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimal */ \"./includes/roundWithDecimal.js\");\n\n\nfunction calcolaImportoConIva(importo, aliquota){\n    const a = 100 + aliquota;\n    return (0,_roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__.roundWithDecimal)((importo * a) / 100, 5);\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/calcolaImportoConIva.js?");

/***/ }),

/***/ "./includes/calcoloIvaDaImponibile.js":
/*!********************************************!*\
  !*** ./includes/calcoloIvaDaImponibile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcoloIvaDaImponibile\": () => (/* binding */ calcoloIvaDaImponibile)\n/* harmony export */ });\nfunction calcoloIvaDaImponibile(value, aliquota){\n    return value * (aliquota/100);\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/calcoloIvaDaImponibile.js?");

/***/ }),

/***/ "./includes/checkAndCorrectImportiModImponibile.js":
/*!*********************************************************!*\
  !*** ./includes/checkAndCorrectImportiModImponibile.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAndCorrectImportiModImponibile\": () => (/* binding */ checkAndCorrectImportiModImponibile)\n/* harmony export */ });\nfunction checkAndCorrectImportiModImponibile (totale, imponibile, imposta){\n    const diff = totale - (imponibile + imposta);\n    if (diff !== 0) {\n        imponibile += diff;\n    }\n\n    return {totale, imponibile, imposta};\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/checkAndCorrectImportiModImponibile.js?");

/***/ }),

/***/ "./includes/checkAndCorrectImportiModImposta.js":
/*!******************************************************!*\
  !*** ./includes/checkAndCorrectImportiModImposta.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAndCorrectImportiModImposta\": () => (/* binding */ checkAndCorrectImportiModImposta)\n/* harmony export */ });\nfunction checkAndCorrectImportiModImposta (totale, imponibile, imposta){\n    const diff = totale - (imponibile + imposta);\n    if (diff !== 0) {\n        imposta += diff;\n    }\n\n    return {totale, imponibile, imposta};\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/checkAndCorrectImportiModImposta.js?");

/***/ }),

/***/ "./includes/dateTimeDefaults.js":
/*!**************************************!*\
  !*** ./includes/dateTimeDefaults.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nowDbIsoDateTime\": () => (/* binding */ nowDbIsoDateTime),\n/* harmony export */   \"nowDateTime\": () => (/* binding */ nowDateTime),\n/* harmony export */   \"dateITA2ISO\": () => (/* binding */ dateITA2ISO),\n/* harmony export */   \"dateISO2ITA\": () => (/* binding */ dateISO2ITA),\n/* harmony export */   \"dateTimeDbISO2ITA\": () => (/* binding */ dateTimeDbISO2ITA),\n/* harmony export */   \"dateTimeITA2ISO\": () => (/* binding */ dateTimeITA2ISO),\n/* harmony export */   \"dateTimeISO2ITA\": () => (/* binding */ dateTimeISO2ITA),\n/* harmony export */   \"isITADate\": () => (/* binding */ isITADate),\n/* harmony export */   \"isISODate\": () => (/* binding */ isISODate)\n/* harmony export */ });\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ \"luxon\");\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction nowDbIsoDateTime() {\n    return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().toFormat(\"yyyy-MM-dd HH:mm:ss\");\n}\n\nfunction nowDateTime() {\n    return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();\n}\n\nfunction dateITA2ISO (dateStr) {\n    let inDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(dateStr, \"dd/MM/yyyy\");\n    return inDate.toFormat(\"yyyy-MM-dd\");\n}\n\nfunction dateISO2ITA (dateStr) {\n    let inDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateStr);\n    return inDate.toFormat(\"dd/MM/yyyy\");\n}\n\nfunction dateTimeDbISO2ITA (dateStr) {\n    let inDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(dateStr, \"yyyy-MM-dd HH:mm:ss\");\n    return inDate.toFormat(\"dd/MM/yyyy HH:mm:ss\");\n}\n\nfunction dateTimeITA2ISO (dateStr) {\n    let inDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(dateStr, \"dd/MM/yyyy HH:mm:ss\");\n    return inDate.toFormat(\"yyyy-MM-dd HH:mm:ss\");\n}\n\nfunction dateTimeISO2ITA (dateStr) {\n    let inDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateStr);\n    return inDate.toFormat(\"dd/MM/yyyy HH:mm:ss\");\n}\n\nfunction isITADate(dateStr) {\n    return dateStr.indexOf(\"/\") >= 0;\n} \n\nfunction isISODate(dateStr) {\n    return dateStr.indexOf(\"-\") >= 0;\n}\n\n\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/dateTimeDefaults.js?");

/***/ }),

/***/ "./includes/getDataFromSelect2Multiple.js":
/*!************************************************!*\
  !*** ./includes/getDataFromSelect2Multiple.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataFromSelect2Multiple\": () => (/* binding */ getDataFromSelect2Multiple)\n/* harmony export */ });\nfunction getDataFromSelect2Multiple(data) {\n    return data && data.length > 0 ? data : null\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/getDataFromSelect2Multiple.js?");

/***/ }),

/***/ "./includes/getDataFromSelect2Single.js":
/*!**********************************************!*\
  !*** ./includes/getDataFromSelect2Single.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataFromSelect2Single\": () => (/* binding */ getDataFromSelect2Single)\n/* harmony export */ });\nfunction getDataFromSelect2Single(data, property = null, defaultValue = null) {\n    const selectionObj = data && data.length > 0 ? data[0] : defaultValue;\n    if (selectionObj !== null && property !== null) {\n        return selectionObj[property];\n    }\n\n    return selectionObj;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/getDataFromSelect2Single.js?");

/***/ }),

/***/ "./includes/getListForSelectAjax.js":
/*!******************************************!*\
  !*** ./includes/getListForSelectAjax.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListForSelectAjax\": () => (/* binding */ getListForSelectAjax)\n/* harmony export */ });\nfunction getListForSelectAjax(id, model) {\n    return `<option value=\"${id}\">${model}</option>`;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/getListForSelectAjax.js?");

/***/ }),

/***/ "./includes/initDateTimePicker.js":
/*!****************************************!*\
  !*** ./includes/initDateTimePicker.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initDateTimePicker\": () => (/* binding */ initDateTimePicker)\n/* harmony export */ });\nfunction initDateTimePicker(id){\n    // Questo deve essere rivisto\n    const el = $(id);\n    if(el.length > 0) {\n        el.flatpickr({\n            enableTime: true,\n            altInput: true,\n            altFormat: \"d/m/Y H:i:ss\",\n            dateFormat: \"Y-m-d H:i:ss\",\n            time_24hr: true,\n            allowInput: true,\n            onReady: function ( dateObj, dateStr, instance ) {\n                let $clear = $( '<div class=\"flatpickr-clear\"><span class=\"badge-pill badge-primary\">Clear</span></div>' )\n                    .on( 'click', () => {\n                        instance.clear();\n                        instance.close();\n                    } )\n                    .appendTo( $( instance.calendarContainer ) );\n            }\n        });\n    }\n};\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/initDateTimePicker.js?");

/***/ }),

/***/ "./includes/initDatepicker.js":
/*!************************************!*\
  !*** ./includes/initDatepicker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initDatepicker\": () => (/* binding */ initDatepicker)\n/* harmony export */ });\nfunction initDatepicker(id){\n    const el = $(id);\n    if(el.length > 0) {\n        el.flatpickr({\n            altInput: true,\n            altFormat: \"d/m/Y\",\n            dateFormat: \"Y-m-d\",\n            allowInput: true,\n            onReady: function ( dateObj, dateStr, instance ) {\n                let $clear = $( '<div class=\"flatpickr-clear\"><span class=\"badge-pill badge-primary\">Clear</span></div>' )\n                    .on( 'click', () => {\n                        instance.clear();\n                        instance.close();\n                    } )\n                    .appendTo( $( instance.calendarContainer ) );\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/initDatepicker.js?");

/***/ }),

/***/ "./includes/initSelectAjax.js":
/*!************************************!*\
  !*** ./includes/initSelectAjax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSelectAjax\": () => (/* binding */ initSelectAjax)\n/* harmony export */ });\nfunction initSelectAjax(id) {\n    let el = $(id);\n    console.log(\"initSelectAjax\", el);\n    if (el.length < 1) {\n        return;\n    }\n    el.each(function () {\n        console.log(\"initSelectAjax inner\", this);\n        var placeholder = $(this).attr('data-placeholder');\n        var ajax_url = $(this).attr('data-ajax_url');\n        var templateResultFunction = $(this).attr('data-templateResult');\n        var templateSelectionFunction = $(this).attr('data-templateSelection');\n        var delay_default = parseInt($(this).attr('data-delay'));\n        if (isNaN(delay_default) || delay_default <= 0) {\n            delay_default = 250;\n        }\n        var minimumInputLength_default = parseInt($(this).attr('data-minimumInputLength'));\n        if (isNaN(minimumInputLength_default) || minimumInputLength_default < 0) {\n            minimumInputLength_default = 0;\n        }\n        var $select_element = $(this);\n        $(this).select2({\n            ajax: {\n                url: ajax_url,\n                dataType: 'json',\n                delay: delay_default,\n                data: function (params) {\n                    return {\n                        search: params.term, // search term\n                        page: params.page\n                    };\n                },\n                processResults: function (data, params) {\n                    // parse the results into the format expected by Select2\n                    // since we are using custom formatting functions we do not need to\n                    // alter the remote JSON data, except to indicate that infinite\n                    // scrolling can be used\n                    params.page = params.page || 1;\n\n                    return {\n                        results: data.data,\n                        pagination: {\n                            more: (params.page * data.per_page) < data.total\n                        }\n                    };\n                },\n                cache: true\n            },\n            escapeMarkup: function (markup) {\n                return markup;\n            }, // let our custom formatter work\n            minimumInputLength: minimumInputLength_default,\n            templateResult: function (repo) {\n                if (templateResultFunction != undefined && templateResultFunction != '' && templateResultFunction in window) {\n                    return window[templateResultFunction](repo);\n                }\n                if (repo.loading) return repo.text;\n\n                var markup = \"<div class='row'>\"\n                    + \"<div class='col-md-12'>\" + repo.descr\n                    + \"</div>\"\n                    + \"</div>\";\n\n                return markup;\n            }, // omitted for brevity, see the source of this page\n            templateSelection: function (repo) {\n                if (templateSelectionFunction != undefined && templateSelectionFunction != '' && templateSelectionFunction in window) {\n                    return window[templateSelectionFunction](repo);\n                }\n                if (!repo.descr) {\n                    if ($select_element.children('option:selected').length > 0) {\n                        return $select_element.children('option:selected').text();\n                    }\n                    return (templateSelectionFunction != undefined) ? placeholder : '';\n                }\n                return repo.descr;\n            } // omitted for brevity, see the source of this page\n        });\n        /* $('[data-submitOnChange]').on(\"select2:select\", function (event) {\n            $(event.currentTarget).closest(\"form\").submit();\n        }); */\n    });\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/initSelectAjax.js?");

/***/ }),

/***/ "./includes/initTimePicker.js":
/*!************************************!*\
  !*** ./includes/initTimePicker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTimePicker\": () => (/* binding */ initTimePicker)\n/* harmony export */ });\nfunction initTimePicker(id){\n    // Questo deve essere rivisto\n    const el = $(id);\n    if(el.length > 0) {\n        el.flatpickr({\n            enableTime: true,\n            noCalendar: true,\n            dateFormat: \"H:i\",\n            time_24hr: true,\n            allowInput: true,\n            onReady: function ( dateObj, dateStr, instance ) {\n                let $clear = $( '<div class=\"flatpickr-clear\"><span class=\"badge-pill badge-primary\">Clear</span></div>' )\n                    .on( 'click', () => {\n                        instance.clear();\n                        instance.close();\n                    } )\n                    .appendTo( $( instance.calendarContainer ) );\n            }\n        });\n    }\n};\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/initTimePicker.js?");

/***/ }),

/***/ "./includes/roundWithDecimal.js":
/*!**************************************!*\
  !*** ./includes/roundWithDecimal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roundWithDecimal\": () => (/* binding */ roundWithDecimal)\n/* harmony export */ });\nfunction roundWithDecimal(value, decimal) {\n    const digits = Math.pow(10, decimal);\n    return Math.round((value + 0.00001) * digits) / digits;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/roundWithDecimal.js?");

/***/ }),

/***/ "./includes/scorporoIvaImponibileConCorrezione.js":
/*!********************************************************!*\
  !*** ./includes/scorporoIvaImponibileConCorrezione.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scorporoIvaImponibileConCorrezione\": () => (/* binding */ scorporoIvaImponibileConCorrezione)\n/* harmony export */ });\n/* harmony import */ var _scorporoIvaParteImponibile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorporoIvaParteImponibile */ \"./includes/scorporoIvaParteImponibile.js\");\n/* harmony import */ var _scorporoIvaParteImposta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scorporoIvaParteImposta */ \"./includes/scorporoIvaParteImposta.js\");\n/* harmony import */ var _checkAndCorrectImportiModImponibile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkAndCorrectImportiModImponibile */ \"./includes/checkAndCorrectImportiModImponibile.js\");\n\n\n\n\nfunction scorporoIvaImponibileConCorrezione(importo, aliquota){\n    let tmpImponibile = (0,_scorporoIvaParteImponibile__WEBPACK_IMPORTED_MODULE_0__.scorporoIvaParteImponibile)(importo, aliquota);\n    let tmpImposta = (0,_scorporoIvaParteImposta__WEBPACK_IMPORTED_MODULE_1__.scorporoIvaParteImposta)(importo, aliquota);\n    const {totale, imponibile, imposta} = (0,_checkAndCorrectImportiModImponibile__WEBPACK_IMPORTED_MODULE_2__.checkAndCorrectImportiModImponibile)(importo, tmpImponibile, tmpImposta);\n\n    return imponibile;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/scorporoIvaImponibileConCorrezione.js?");

/***/ }),

/***/ "./includes/scorporoIvaParteImponibile.js":
/*!************************************************!*\
  !*** ./includes/scorporoIvaParteImponibile.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scorporoIvaParteImponibile\": () => (/* binding */ scorporoIvaParteImponibile)\n/* harmony export */ });\n/* harmony import */ var _roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimal */ \"./includes/roundWithDecimal.js\");\n\n\nfunction scorporoIvaParteImponibile(importo, alquota) {\n    const a = 100 + alquota;\n    return (0,_roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__.roundWithDecimal)((importo * 100) / a, 2);\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/scorporoIvaParteImponibile.js?");

/***/ }),

/***/ "./includes/scorporoIvaParteImposta.js":
/*!*********************************************!*\
  !*** ./includes/scorporoIvaParteImposta.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scorporoIvaParteImposta\": () => (/* binding */ scorporoIvaParteImposta)\n/* harmony export */ });\n/* harmony import */ var _roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimal */ \"./includes/roundWithDecimal.js\");\n\n\nfunction scorporoIvaParteImposta (importo, alquota){\n    const a = 100 + alquota;\n    const imponibile = (0,_roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__.roundWithDecimal)((importo * 100) / a, 2);\n\n    return importo - imponibile;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/scorporoIvaParteImposta.js?");

/***/ }),

/***/ "./includes/toEuroFormatted.js":
/*!*************************************!*\
  !*** ./includes/toEuroFormatted.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toEuroFormatted\": () => (/* binding */ toEuroFormatted)\n/* harmony export */ });\n/* harmony import */ var _roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimal */ \"./includes/roundWithDecimal.js\");\n\n\nfunction toEuroFormatted(value) {\n    value = (0,_roundWithDecimal__WEBPACK_IMPORTED_MODULE_0__.roundWithDecimal)(value, 2);\n    return new Intl.NumberFormat('it-IT', {\n        style: 'currency',\n        currency: 'EUR'\n    }).format(value);\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/toEuroFormatted.js?");

/***/ }),

/***/ "./includes/zeroOrValue.js":
/*!*********************************!*\
  !*** ./includes/zeroOrValue.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zeroOrValue\": () => (/* binding */ zeroOrValue)\n/* harmony export */ });\nfunction zeroOrValue(value) {\n    return !isNaN(value) ? value : 0;\n}\n\n//# sourceURL=webpack://padosoftFrontendTools/./includes/zeroOrValue.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcolaImportoConIva\": () => (/* reexport safe */ _includes_calcolaImportoConIva__WEBPACK_IMPORTED_MODULE_0__.calcolaImportoConIva),\n/* harmony export */   \"calcoloIvaDaImponibile\": () => (/* reexport safe */ _includes_calcoloIvaDaImponibile__WEBPACK_IMPORTED_MODULE_1__.calcoloIvaDaImponibile),\n/* harmony export */   \"checkAndCorrectImportiModImponibile\": () => (/* reexport safe */ _includes_checkAndCorrectImportiModImponibile__WEBPACK_IMPORTED_MODULE_2__.checkAndCorrectImportiModImponibile),\n/* harmony export */   \"checkAndCorrectImportiModImposta\": () => (/* reexport safe */ _includes_checkAndCorrectImportiModImposta__WEBPACK_IMPORTED_MODULE_3__.checkAndCorrectImportiModImposta),\n/* harmony export */   \"getDataFromSelect2Multiple\": () => (/* reexport safe */ _includes_getDataFromSelect2Multiple__WEBPACK_IMPORTED_MODULE_4__.getDataFromSelect2Multiple),\n/* harmony export */   \"getDataFromSelect2Single\": () => (/* reexport safe */ _includes_getDataFromSelect2Single__WEBPACK_IMPORTED_MODULE_5__.getDataFromSelect2Single),\n/* harmony export */   \"getListForSelectAjax\": () => (/* reexport safe */ _includes_getListForSelectAjax__WEBPACK_IMPORTED_MODULE_6__.getListForSelectAjax),\n/* harmony export */   \"initDateTimePicker\": () => (/* reexport safe */ _includes_initDateTimePicker__WEBPACK_IMPORTED_MODULE_7__.initDateTimePicker),\n/* harmony export */   \"initDatepicker\": () => (/* reexport safe */ _includes_initDatepicker__WEBPACK_IMPORTED_MODULE_8__.initDatepicker),\n/* harmony export */   \"initSelectAjax\": () => (/* reexport safe */ _includes_initSelectAjax__WEBPACK_IMPORTED_MODULE_9__.initSelectAjax),\n/* harmony export */   \"initTimePicker\": () => (/* reexport safe */ _includes_initTimePicker__WEBPACK_IMPORTED_MODULE_10__.initTimePicker),\n/* harmony export */   \"roundWithDecimal\": () => (/* reexport safe */ _includes_roundWithDecimal__WEBPACK_IMPORTED_MODULE_11__.roundWithDecimal),\n/* harmony export */   \"scorporoIvaImponibileConCorrezione\": () => (/* reexport safe */ _includes_scorporoIvaImponibileConCorrezione__WEBPACK_IMPORTED_MODULE_12__.scorporoIvaImponibileConCorrezione),\n/* harmony export */   \"scorporoIvaParteImponibile\": () => (/* reexport safe */ _includes_scorporoIvaParteImponibile__WEBPACK_IMPORTED_MODULE_13__.scorporoIvaParteImponibile),\n/* harmony export */   \"scorporoIvaParteImposta\": () => (/* reexport safe */ _includes_scorporoIvaParteImposta__WEBPACK_IMPORTED_MODULE_14__.scorporoIvaParteImposta),\n/* harmony export */   \"zeroOrValue\": () => (/* reexport safe */ _includes_zeroOrValue__WEBPACK_IMPORTED_MODULE_15__.zeroOrValue),\n/* harmony export */   \"dateISO2ITA\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.dateISO2ITA),\n/* harmony export */   \"dateITA2ISO\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.dateITA2ISO),\n/* harmony export */   \"dateTimeDbISO2ITA\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.dateTimeDbISO2ITA),\n/* harmony export */   \"dateTimeISO2ITA\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.dateTimeISO2ITA),\n/* harmony export */   \"dateTimeITA2ISO\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.dateTimeITA2ISO),\n/* harmony export */   \"isISODate\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.isISODate),\n/* harmony export */   \"isITADate\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.isITADate),\n/* harmony export */   \"nowDateTime\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.nowDateTime),\n/* harmony export */   \"nowDbIsoDateTime\": () => (/* reexport safe */ _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__.nowDbIsoDateTime),\n/* harmony export */   \"toEuroFormatted\": () => (/* reexport safe */ _includes_toEuroFormatted__WEBPACK_IMPORTED_MODULE_17__.toEuroFormatted)\n/* harmony export */ });\n/* harmony import */ var _includes_calcolaImportoConIva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes/calcolaImportoConIva */ \"./includes/calcolaImportoConIva.js\");\n/* harmony import */ var _includes_calcoloIvaDaImponibile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./includes/calcoloIvaDaImponibile */ \"./includes/calcoloIvaDaImponibile.js\");\n/* harmony import */ var _includes_checkAndCorrectImportiModImponibile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./includes/checkAndCorrectImportiModImponibile */ \"./includes/checkAndCorrectImportiModImponibile.js\");\n/* harmony import */ var _includes_checkAndCorrectImportiModImposta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./includes/checkAndCorrectImportiModImposta */ \"./includes/checkAndCorrectImportiModImposta.js\");\n/* harmony import */ var _includes_getDataFromSelect2Multiple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./includes/getDataFromSelect2Multiple */ \"./includes/getDataFromSelect2Multiple.js\");\n/* harmony import */ var _includes_getDataFromSelect2Single__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./includes/getDataFromSelect2Single */ \"./includes/getDataFromSelect2Single.js\");\n/* harmony import */ var _includes_getListForSelectAjax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./includes/getListForSelectAjax */ \"./includes/getListForSelectAjax.js\");\n/* harmony import */ var _includes_initDateTimePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./includes/initDateTimePicker */ \"./includes/initDateTimePicker.js\");\n/* harmony import */ var _includes_initDatepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./includes/initDatepicker */ \"./includes/initDatepicker.js\");\n/* harmony import */ var _includes_initSelectAjax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./includes/initSelectAjax */ \"./includes/initSelectAjax.js\");\n/* harmony import */ var _includes_initTimePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./includes/initTimePicker */ \"./includes/initTimePicker.js\");\n/* harmony import */ var _includes_roundWithDecimal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./includes/roundWithDecimal */ \"./includes/roundWithDecimal.js\");\n/* harmony import */ var _includes_scorporoIvaImponibileConCorrezione__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./includes/scorporoIvaImponibileConCorrezione */ \"./includes/scorporoIvaImponibileConCorrezione.js\");\n/* harmony import */ var _includes_scorporoIvaParteImponibile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./includes/scorporoIvaParteImponibile */ \"./includes/scorporoIvaParteImponibile.js\");\n/* harmony import */ var _includes_scorporoIvaParteImposta__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./includes/scorporoIvaParteImposta */ \"./includes/scorporoIvaParteImposta.js\");\n/* harmony import */ var _includes_zeroOrValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./includes/zeroOrValue */ \"./includes/zeroOrValue.js\");\n/* harmony import */ var _includes_dateTimeDefaults__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./includes/dateTimeDefaults */ \"./includes/dateTimeDefaults.js\");\n/* harmony import */ var _includes_toEuroFormatted__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./includes/toEuroFormatted */ \"./includes/toEuroFormatted.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://padosoftFrontendTools/./index.js?");

/***/ }),

/***/ "luxon":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"luxon","commonjs2":"luxon","amd":"luxon","root":"luxon"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_luxon__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});