/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n::-webkit-input-placeholder {\n  color: var(--clr-light);\n}\n\n::-moz-placeholder {\n  color: var(--clr-light);\n}\n\n::-ms-placeholder {\n  color: var(--clr-light);\n}\n\n::placeholder {\n  color: var(--clr-light);\n}\n\n:root {\n  --clr-primary: #598B96;\n  --clr-light: #FFADAD;\n  --clr-light-2: white;\n  --clr-dark: black;\n  --clr-warning: rgb(99, 36, 36);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Zen Kaku Gothic Antique', sans-serif;\n  font-size: 1.5rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-light-2);\n  \n  display: grid;\n  grid: \n    \"header header header nav\" auto\n    \"...... lists active ......\" auto /\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\n}\n\n.nav-container {\n  grid-area: nav;\n  align-self: center;\n  padding-top: 1.4em;\n  margin-left: -1.5em;\n  padding-bottom: 1em;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n  transform: rotate(45deg) translate(-8px, -8px);\n}\n\n\n/* header */\n\n.title {\n  grid-area: header;\n  margin: 0.5em;\n  font-size: 4rem;\n  font-weight: 100;\n  color: black;\n  letter-spacing: -6px;\n\n}\n\n.all-tasks {\n  grid-area: lists;\n  display: inline-block;\n}\n\n.task-list {\n  font-size: 1rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1em;\n}\n\n.list-name {\n  cursor: pointer;\n}\n\n.list-name:hover {\n  opacity: 0.7;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  opacity: 0.7;\n  font-size: 0.9rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  padding: 0.25em;\n  max-width: 75%;\n  position: relative;\n\n\n  transition: border-bottom 150ms ease-in;\n  order: 2;\n}\n\n\n.new:focus {\n  border-bottom-width: 3px;\n}\n\n.new:focus::placeholder {\n  opacity: 0.5;\n}\n\n\n.active-list {\n  font-weight: 700;\n}\n\n.new.list {\n  font-size: 1rem;\n}\n\n.new.task {\n  margin-bottom: 0;\n}\n\n.todo-list {\n  --spacer: 2rem;\n\n  grid-area: active;\n  background: var(--clr-light-2);\n  color: var(--clr-dark);\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background: var(--clr-light);\n  color: var(--clr-light-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.list-title {\n  margin: 0 1em 0 0;\n\n}\n\n.task-count {\n  margin:  0;\n  font-size: 1rem;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  position: relative;\n}\n\n.new-task-creator .create {\n  color: var(--clr-primary)\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -.5em;\n  height: 1px;\n  background: var(--clr-light);\n  opacity: .4;\n}\n\n.custom-checkbox {\n  --size: .75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  box-shadow: inset 0 0 0 2px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  left: 1.5em;\n  top: 60%;\n  height: 3px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::After {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-things {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--clr-light-2)\n}\n\n.task-list-title, .list-title {\n  font-weight: 400;\n  letter-spacing: -2px;\n}\n\n@media (max-width: 840px) {\n\n  body {\n    margin: 0;\n    font-family: 'Zen Kaku Gothic Antique', sans-serif;\n    font-size: 1.5rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-light-2);\n    \n    display: grid;\n    grid: \n      \"header header header nav\" auto\n      \"lists lists lists lists\"\n      \"active active active active\" auto /\n      1fr 1fr 1fr 1fr;\n  }\n\n    .nav-container {\n      grid-area: nav;\n      align-self: center;\n      margin-top: 1em;\n      margin-left: 4em;\n      margin-right: 1.5em;\n    }\n\n    .bar1, .bar2, .bar3 {\n      width: 35px;\n      height: 5px;\n      background-color: #333;\n      margin: 6px 0;\n      transition: 0.4s;\n    }\n\n    .change .bar1 {\n      -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n      transform: rotate(-45deg) translate(-9px, 6px);\n    }\n\n    .change .bar2 {opacity: 0;}\n\n    .change .bar3 {\n      -webkit-transform: rotate(45deg) translate(-8px, -8px);\n      transform: rotate(45deg) translate(-8px, -8px);\n    }\n\n    .title {\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n\n    .all-tasks {\n      margin-left: 1em;\n      margin-bottom: 1em;\n\n    }\n\n    .task-list-title {\n      margin-top: 0.5em;\n      margin-bottom: 0;\n    }\n\n    .todo-list {\n      margin: 0.8em;\n    }\n\n    .task-count {\n      margin-left: 2em;\n    }\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n::-webkit-input-placeholder {\n  color: var(--clr-light);\n}\n\n::-moz-placeholder {\n  color: var(--clr-light);\n}\n\n::-ms-placeholder {\n  color: var(--clr-light);\n}\n\n::placeholder {\n  color: var(--clr-light);\n}\n\n:root {\n  --clr-primary: #598B96;\n  --clr-light: #FFADAD;\n  --clr-light-2: white;\n  --clr-dark: black;\n  --clr-warning: rgb(99, 36, 36);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Zen Kaku Gothic Antique', sans-serif;\n  font-size: 1.5rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-light-2);\n  \n  display: grid;\n  grid: \n    \"header header header nav\" auto\n    \"...... lists active ......\" auto /\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\n}\n\n.nav-container {\n  grid-area: nav;\n  align-self: center;\n  padding-top: 1.4em;\n  margin-left: -1.5em;\n  padding-bottom: 1em;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n  transform: rotate(45deg) translate(-8px, -8px);\n}\n\n\n/* header */\n\n.title {\n  grid-area: header;\n  margin: 0.5em;\n  font-size: 4rem;\n  font-weight: 100;\n  color: black;\n  letter-spacing: -6px;\n\n}\n\n.all-tasks {\n  grid-area: lists;\n  display: inline-block;\n}\n\n.task-list {\n  font-size: 1rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1em;\n}\n\n.list-name {\n  cursor: pointer;\n}\n\n.list-name:hover {\n  opacity: 0.7;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  opacity: 0.7;\n  font-size: 0.9rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n  padding: 0.25em;\n  max-width: 75%;\n  position: relative;\n\n\n  transition: border-bottom 150ms ease-in;\n  order: 2;\n}\n\n\n.new:focus {\n  border-bottom-width: 3px;\n}\n\n.new:focus::placeholder {\n  opacity: 0.5;\n}\n\n\n.active-list {\n  font-weight: 700;\n}\n\n.new.list {\n  font-size: 1rem;\n}\n\n.new.task {\n  margin-bottom: 0;\n}\n\n.todo-list {\n  --spacer: 2rem;\n\n  grid-area: active;\n  background: var(--clr-light-2);\n  color: var(--clr-dark);\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background: var(--clr-light);\n  color: var(--clr-light-2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.list-title {\n  margin: 0 1em 0 0;\n\n}\n\n.task-count {\n  margin:  0;\n  font-size: 1rem;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  position: relative;\n}\n\n.new-task-creator .create {\n  color: var(--clr-primary)\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -.5em;\n  height: 1px;\n  background: var(--clr-light);\n  opacity: .4;\n}\n\n.custom-checkbox {\n  --size: .75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  box-shadow: inset 0 0 0 2px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  left: 1.5em;\n  top: 60%;\n  height: 3px;\n  background: currentColor;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 150ms ease-in-out;\n}\n\n[type=\"checkbox\"]:checked + label::After {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-things {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--clr-light-2)\n}\n\n.task-list-title, .list-title {\n  font-weight: 400;\n  letter-spacing: -2px;\n}\n\n@media (max-width: 840px) {\n\n  body {\n    margin: 0;\n    font-family: 'Zen Kaku Gothic Antique', sans-serif;\n    font-size: 1.5rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-light-2);\n    \n    display: grid;\n    grid: \n      \"header header header nav\" auto\n      \"lists lists lists lists\"\n      \"active active active active\" auto /\n      1fr 1fr 1fr 1fr;\n  }\n\n    .nav-container {\n      grid-area: nav;\n      align-self: center;\n      margin-top: 1em;\n      margin-left: 4em;\n      margin-right: 1.5em;\n    }\n\n    .bar1, .bar2, .bar3 {\n      width: 35px;\n      height: 5px;\n      background-color: #333;\n      margin: 6px 0;\n      transition: 0.4s;\n    }\n\n    .change .bar1 {\n      -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n      transform: rotate(-45deg) translate(-9px, 6px);\n    }\n\n    .change .bar2 {opacity: 0;}\n\n    .change .bar3 {\n      -webkit-transform: rotate(45deg) translate(-8px, -8px);\n      transform: rotate(45deg) translate(-8px, -8px);\n    }\n\n    .title {\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n\n    .all-tasks {\n      margin-left: 1em;\n      margin-bottom: 1em;\n\n    }\n\n    .task-list-title {\n      margin-top: 0.5em;\n      margin-bottom: 0;\n    }\n\n    .todo-list {\n      margin: 0.8em;\n    }\n\n    .task-count {\n      margin-left: 2em;\n    }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


//nav bar
const navContainer = document.querySelector(".nav-container")

navContainer.addEventListener("click", () => {
    toggleProjects()
})


function toggleProjects() {
    const allTasks = document.querySelector(".all-tasks")

    if (allTasks.style.display == "block") { 
        allTasks.style.display = "none"
    } else {
        allTasks.style.display = "block"

    }
  }

const listsContainer = document.querySelector("[data-lists]")
const newListForm = document.querySelector("[data-new-list-form]")
const newListInput = document.querySelector("[data-new-list-input]")
const deleteListButton = document.querySelector("[data-delete-list-button]")
const listDisplayContainer = document.querySelector("[data-list-display-container]")
const listTitleElement = document.querySelector("[data-list-title]")
const listCountElement = document.querySelector("[data-list-count]")
const tasksContainer = document.querySelector("[data-tasks]")
const taskTemplate = document.getElementById("task-template")
const newTaskForm = document.querySelector("[data-new-task-form]")
const newTaskInput = document.querySelector("[data-new-task-input]")
const clearCompleteTaskButton = document.querySelector("[data-clear-complete-tasks-button]")


const LOCAL_STORAGE_LIST_KEY = "task.lists"
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId"
// if this key exists, parse it from string to JSON object or just give it an empty array
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [] 
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listsContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "li") {
        selectedListId = e.target.dataset.listId 
        saveAndRender()
    }
})


tasksContainer.addEventListener("click",  e => {
    // if user clicks on the check box
    if (e.target.tagName.toLowerCase() === "input" ) {
        const selectedList = lists.find(list => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})


clearCompleteTaskButton.addEventListener("click", e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})


deleteListButton.addEventListener("click", e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})


//add new list 
newListForm.addEventListener("submit", e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === "") return 
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

//new task form
newTaskForm.addEventListener("submit", e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === "") return 
    const task = createTask(taskName)
    newTaskInput.value = null
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
    saveAndRender()
})


function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}


function createTask(name) {
    return { id: Date.now().toString(), name: name, complete: false }

}


//save and render
function saveAndRender() {
    save()
    render()
}

//save to local storage
//pass the key then value of the key
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)

}


// render project lists & tasks
function render() {
    clearElement(listsContainer)
    renderLists()
    
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = "none"
    } else {
        listDisplayContainer.style.display = ""
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector("input")
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector("label")
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        if (list.id === selectedListId) listElement.classList.add("active-list")
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBLGFBQWE7O0FBRWI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCLEVBQUUsWUFBWTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cXG5cXG46Oi1tcy1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogIzU5OEI5NjtcXG4gIC0tY2xyLWxpZ2h0OiAjRkZBREFEO1xcbiAgLS1jbHItbGlnaHQtMjogd2hpdGU7XFxuICAtLWNsci1kYXJrOiBibGFjaztcXG4gIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1plbiBLYWt1IEdvdGhpYyBBbnRpcXVlJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodC0yKTtcXG4gIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgbmF2XFxcIiBhdXRvXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgYWN0aXZlIC4uLi4uLlxcXCIgYXV0byAvXFxuICAgIDFmciBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEuNGVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmNoYW5nZSAuYmFyMSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbn1cXG5cXG4uY2hhbmdlIC5iYXIyIHtvcGFjaXR5OiAwO31cXG5cXG4uY2hhbmdlIC5iYXIzIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxufVxcblxcblxcbi8qIGhlYWRlciAqL1xcblxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC02cHg7XFxuXFxufVxcblxcbi5hbGwtdGFza3Mge1xcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxufVxcblxcbi5uZXcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG59XFxuXFxuXFxuLm5ldzpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uZXcubGlzdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIC0tc3BhY2VyOiAycmVtO1xcblxcbiAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQtMik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0LTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xcblxcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICBtYXJnaW46ICAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGUge1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KVxcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLnRhc2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtLjVlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIG9wYWNpdHk6IC40O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tc2l6ZTogLjc1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAxLjVlbTtcXG4gIHRvcDogNjAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6QWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uZGVsZXRlLXRoaW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zNXB4O1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodC0yKVxcbn1cXG5cXG4udGFzay1saXN0LXRpdGxlLCAubGlzdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcblxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdaZW4gS2FrdSBHb3RoaWMgQW50aXF1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQtMik7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBcXG4gICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgbmF2XFxcIiBhdXRvXFxuICAgICAgXFxcImxpc3RzIGxpc3RzIGxpc3RzIGxpc3RzXFxcIlxcbiAgICAgIFxcXCJhY3RpdmUgYWN0aXZlIGFjdGl2ZSBhY3RpdmVcXFwiIGF1dG8gL1xcbiAgICAgIDFmciAxZnIgMWZyIDFmcjtcXG4gIH1cXG5cXG4gICAgLm5hdi1jb250YWluZXIge1xcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgbWFyZ2luOiA2cHggMDtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICB9XFxuXFxuICAgIC5jaGFuZ2UgLmJhcjEge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgICB9XFxuXFxuICAgIC5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxcblxcbiAgICAuY2hhbmdlIC5iYXIzIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcXG4gICAgfVxcblxcbiAgICAudGl0bGUge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmFsbC10YXNrcyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2stbGlzdC10aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudG9kby1saXN0IHtcXG4gICAgICBtYXJnaW46IDAuOGVtO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvdW50IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgICB9XFxuXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrREFBa0Q7RUFDbEQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyx5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYjs7O3FEQUdtRDtBQUNyRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQSxlQUFlLFVBQVUsQ0FBQzs7QUFFMUI7RUFDRSxzREFBc0Q7RUFDdEQsOENBQThDO0FBQ2hEOzs7QUFHQSxXQUFXOztBQUVYO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VB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O0lBQ2xCOztJQUVBO01BQ0Usc0RBQXNEO01BQ3RELDhDQUE4QztJQUNoRDs7SUFFQSxlQUFlLFVBQVUsQ0FBQzs7SUFFMUI7TUFDRSxzREFBc0Q7TUFDdEQsOENBQThDO0lBQ2hEOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7O0lBRXBCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cXG5cXG46Oi1tcy1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogIzU5OEI5NjtcXG4gIC0tY2xyLWxpZ2h0OiAjRkZBREFEO1xcbiAgLS1jbHItbGlnaHQtMjogd2hpdGU7XFxuICAtLWNsci1kYXJrOiBibGFjaztcXG4gIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1plbiBLYWt1IEdvdGhpYyBBbnRpcXVlJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodC0yKTtcXG4gIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgbmF2XFxcIiBhdXRvXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgYWN0aXZlIC4uLi4uLlxcXCIgYXV0byAvXFxuICAgIDFmciBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEuNGVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmNoYW5nZSAuYmFyMSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbn1cXG5cXG4uY2hhbmdlIC5iYXIyIHtvcGFjaXR5OiAwO31cXG5cXG4uY2hhbmdlIC5iYXIzIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxufVxcblxcblxcbi8qIGhlYWRlciAqL1xcblxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC02cHg7XFxuXFxufVxcblxcbi5hbGwtdGFza3Mge1xcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxufVxcblxcbi5uZXcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG59XFxuXFxuXFxuLm5ldzpmb2N1cyB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uZXcubGlzdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5uZXcudGFzayB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIC0tc3BhY2VyOiAycmVtO1xcblxcbiAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQtMik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0LTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xcblxcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICBtYXJnaW46ICAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGUge1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KVxcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLnRhc2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtLjVlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIG9wYWNpdHk6IC40O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tc2l6ZTogLjc1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAxLjVlbTtcXG4gIHRvcDogNjAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6QWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uZGVsZXRlLXRoaW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zNXB4O1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodC0yKVxcbn1cXG5cXG4udGFzay1saXN0LXRpdGxlLCAubGlzdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcblxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdaZW4gS2FrdSBHb3RoaWMgQW50aXF1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQtMik7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBcXG4gICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgbmF2XFxcIiBhdXRvXFxuICAgICAgXFxcImxpc3RzIGxpc3RzIGxpc3RzIGxpc3RzXFxcIlxcbiAgICAgIFxcXCJhY3RpdmUgYWN0aXZlIGFjdGl2ZSBhY3RpdmVcXFwiIGF1dG8gL1xcbiAgICAgIDFmciAxZnIgMWZyIDFmcjtcXG4gIH1cXG5cXG4gICAgLm5hdi1jb250YWluZXIge1xcbiAgICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgbWFyZ2luOiA2cHggMDtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICB9XFxuXFxuICAgIC5jaGFuZ2UgLmJhcjEge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgICB9XFxuXFxuICAgIC5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxcblxcbiAgICAuY2hhbmdlIC5iYXIzIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcXG4gICAgfVxcblxcbiAgICAudGl0bGUge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmFsbC10YXNrcyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2stbGlzdC10aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudG9kby1saXN0IHtcXG4gICAgICBtYXJnaW46IDAuOGVtO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvdW50IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgICB9XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuLy9uYXYgYmFyXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIilcblxubmF2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlUHJvamVjdHMoKVxufSlcblxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0cygpIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tzXCIpXG5cbiAgICBpZiAoYWxsVGFza3Muc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHsgXG4gICAgICAgIGFsbFRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbFRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcblxuICAgIH1cbiAgfVxuXG5jb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0c11cIilcbmNvbnN0IG5ld0xpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1saXN0LWZvcm1dXCIpXG5jb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtaW5wdXRdXCIpXG5jb25zdCBkZWxldGVMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbl1cIilcbmNvbnN0IGxpc3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3QtZGlzcGxheS1jb250YWluZXJdXCIpXG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3QtdGl0bGVdXCIpXG5jb25zdCBsaXN0Q291bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3QtY291bnRdXCIpXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrc11cIilcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKVxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIilcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dF1cIilcbmNvbnN0IGNsZWFyQ29tcGxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIilcblxuXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xJU1RfS0VZID0gXCJ0YXNrLmxpc3RzXCJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVkgPSBcInRhc2suc2VsZWN0ZWRMaXN0SWRcIlxuLy8gaWYgdGhpcyBrZXkgZXhpc3RzLCBwYXJzZSBpdCBmcm9tIHN0cmluZyB0byBKU09OIG9iamVjdCBvciBqdXN0IGdpdmUgaXQgYW4gZW1wdHkgYXJyYXlcbmxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdIFxubGV0IHNlbGVjdGVkTGlzdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSlcblxubGlzdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgICBzZWxlY3RlZExpc3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkIFxuICAgICAgICBzYXZlQW5kUmVuZGVyKClcbiAgICB9XG59KVxuXG5cbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAgZSA9PiB7XG4gICAgLy8gaWYgdXNlciBjbGlja3Mgb24gdGhlIGNoZWNrIGJveFxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKVxuICAgICAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZExpc3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkKVxuICAgICAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgIHNhdmUoKVxuICAgICAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KVxuICAgIH1cbn0pXG5cblxuY2xlYXJDb21wbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZClcbiAgICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGUpXG4gICAgc2F2ZUFuZFJlbmRlcigpXG59KVxuXG5cbmRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGxpc3RzID0gbGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQpXG4gICAgc2VsZWN0ZWRMaXN0SWQgPSBudWxsXG4gICAgc2F2ZUFuZFJlbmRlcigpXG59KVxuXG5cbi8vYWRkIG5ldyBsaXN0IFxubmV3TGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZVxuICAgIGlmIChsaXN0TmFtZSA9PSBudWxsIHx8IGxpc3ROYW1lID09PSBcIlwiKSByZXR1cm4gXG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QobGlzdE5hbWUpXG4gICAgbmV3TGlzdElucHV0LnZhbHVlID0gbnVsbFxuICAgIGxpc3RzLnB1c2gobGlzdClcbiAgICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbi8vbmV3IHRhc2sgZm9ybVxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZVxuICAgIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSBcIlwiKSByZXR1cm4gXG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUpXG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gbnVsbFxuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZClcbiAgICBzZWxlY3RlZExpc3QudGFza3MucHVzaCh0YXNrKVxuICAgIHNhdmVBbmRSZW5kZXIoKVxufSlcblxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgICByZXR1cm4geyBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBuYW1lOiBuYW1lLCB0YXNrczogW10gfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSkge1xuICAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IG5hbWUsIGNvbXBsZXRlOiBmYWxzZSB9XG5cbn1cblxuXG4vL3NhdmUgYW5kIHJlbmRlclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpIHtcbiAgICBzYXZlKClcbiAgICByZW5kZXIoKVxufVxuXG4vL3NhdmUgdG8gbG9jYWwgc3RvcmFnZVxuLy9wYXNzIHRoZSBrZXkgdGhlbiB2YWx1ZSBvZiB0aGUga2V5XG5mdW5jdGlvbiBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVksIEpTT04uc3RyaW5naWZ5KGxpc3RzKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZLCBzZWxlY3RlZExpc3RJZClcblxufVxuXG5cbi8vIHJlbmRlciBwcm9qZWN0IGxpc3RzICYgdGFza3NcbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjbGVhckVsZW1lbnQobGlzdHNDb250YWluZXIpXG4gICAgcmVuZGVyTGlzdHMoKVxuICAgIFxuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZClcbiAgICBpZiAoc2VsZWN0ZWRMaXN0SWQgPT0gbnVsbCkge1xuICAgICAgICBsaXN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgICAgICBsaXN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHNlbGVjdGVkTGlzdC5uYW1lXG4gICAgICAgIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpXG4gICAgICAgIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcilcbiAgICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gICAgc2VsZWN0ZWRMaXN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSlcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICAgICAgY2hlY2tib3guaWQgPSB0YXNrLmlkXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpXG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkXG4gICAgICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpIHtcbiAgICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKS5sZW5ndGhcbiAgICBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiXG4gICAgbGlzdENvdW50RWxlbWVudC5pbm5lclRleHQgPSBgJHtpbmNvbXBsZXRlVGFza0NvdW50fSAke3Rhc2tTdHJpbmd9IHJlbWFpbmluZ2Bcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG4gICAgbGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZFxuICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpXG4gICAgICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QubmFtZVxuICAgICAgICBpZiAobGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKVxuICAgICAgICBsaXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5yZW5kZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==