/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ios_vh_fix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ios-vh-fix.js */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_modals_init_modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals/init-modals.js */ \"./js/modules/modals/init-modals.js\");\n/* harmony import */ var _modules_menu_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-button.js */ \"./js/modules/menu-button.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll.js */ \"./js/modules/scroll.js\");\n\n\n\n // ---------------------------------\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // Utils\n  // ---------------------------------\n  Object(_utils_ios_vh_fix_js__WEBPACK_IMPORTED_MODULE_0__[\"iosVhFix\"])();\n  Object(_modules_menu_button_js__WEBPACK_IMPORTED_MODULE_2__[\"initMenu\"])();\n  Object(_modules_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"initScroll\"])(); // Modules\n  // ---------------------------------\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\n\n  window.addEventListener('load', function () {\n    Object(_modules_modals_init_modals_js__WEBPACK_IMPORTED_MODULE_1__[\"initModals\"])();\n  });\n}); // ---------------------------------\n// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.\n// привязывайте js не на классы, а на дата атрибуты (data-validate)\n// вместо модификаторов .block--active используем утилитарные классы\n// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)\n// .select.select--opened ❌ ---> [data-select].is-open ✅\n// выносим все в дата атрибуты\n// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.\n// для адаптивного JS используейтся matchMedia и addListener\n// const breakpoint = window.matchMedia(`(min-width:1024px)`);\n// const breakpointChecker = () => {\n//   if (breakpoint.matches) {\n//   } else {\n//   }\n// };\n// breakpoint.addListener(breakpointChecker);\n// breakpointChecker();\n// используйте .closest(el)\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/menu-button.js":
/*!***********************************!*\
  !*** ./js/modules/menu-button.js ***!
  \***********************************/
/*! exports provided: initMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMenu\", function() { return initMenu; });\nvar menuButton = document.querySelector('[data-menu=menu-button]');\nvar nav = document.querySelector('.main-nav');\nvar menuElements = document.querySelectorAll('[data-menu]');\n\nvar initMenu = function initMenu() {\n  var isMenuOpen = false;\n  menuElements.forEach(function (element) {\n    element.classList.remove('no-js');\n  });\n\n  var openMenu = function openMenu() {\n    menuElements.forEach(function (element) {\n      element.classList.add('menu-open');\n    });\n    menuButton.ariaLabel = 'Закрыть меню';\n    isMenuOpen = true;\n    document.body.classList.add('scroll-lock');\n    nav.addEventListener('click', closeMenu);\n  };\n\n  var closeMenu = function closeMenu() {\n    menuElements.forEach(function (element) {\n      element.classList.remove('menu-open');\n    });\n    menuButton.ariaLabel = 'Открыть меню';\n    isMenuOpen = false;\n    document.body.classList.remove('scroll-lock');\n    document.removeEventListener('click', closeMenu);\n  };\n\n  closeMenu();\n  menuButton.addEventListener('click', function (evt) {\n    evt.stopPropagation();\n\n    if (isMenuOpen) {\n      closeMenu();\n    } else {\n      openMenu();\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/menu-button.js?");

/***/ }),

/***/ "./js/modules/modals/init-modals.js":
/*!******************************************!*\
  !*** ./js/modules/modals/init-modals.js ***!
  \******************************************/
/*! exports provided: modals, initModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modals\", function() { return modals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initModals\", function() { return initModals; });\n/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.js */ \"./js/modules/modals/modals.js\");\n\nvar modals; // Здесь реализован пример открытия модалки через колбэк закрытия\n// const openModalInCloseCallback = (name, context = this) => {\n//   context._enableScrolling = false;\n//   context._setSettings('default');\n//   modals.open(name);\n// };\n// closeCallback() {\n//   openModalInCloseCallback('modal-5');\n// },\n\nvar settings = {\n  'default': {\n    preventDefault: true,\n    stopPlay: true,\n    lockFocus: true,\n    startFocus: true,\n    focusBack: true,\n    eventTimeout: 400,\n    openCallback: false,\n    closeCallback: false\n  }\n};\n\nvar initModals = function initModals() {\n  var modalElements = document.querySelectorAll('.modal');\n  modalElements.forEach(function (el) {\n    setTimeout(function () {\n      el.classList.remove('modal--preload');\n    }, 100);\n  });\n  modals = new _modals_js__WEBPACK_IMPORTED_MODULE_0__[\"Modals\"](settings); // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда\n\n  window.modals = modals;\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/modals/init-modals.js?");

/***/ }),

/***/ "./js/modules/modals/modals.js":
/*!*************************************!*\
  !*** ./js/modules/modals/modals.js ***!
  \*************************************/
/*! exports provided: Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modals\", function() { return Modals; });\n/* harmony import */ var _utils_scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/scroll-lock.js */ \"./js/utils/scroll-lock.js\");\n/* harmony import */ var _utils_focus_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-lock.js */ \"./js/utils/focus-lock.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Modals = /*#__PURE__*/function () {\n  function Modals() {\n    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Modals);\n\n    this._scrollLock = new _utils_scroll_lock_js__WEBPACK_IMPORTED_MODULE_0__[\"ScrollLock\"]();\n    this._focusLock = new _utils_focus_lock_js__WEBPACK_IMPORTED_MODULE_1__[\"FocusLock\"]();\n    this._modalOpenElements = document.querySelectorAll('[data-open-modal]');\n    this._openedModalElement = null;\n    this._modalName = null;\n    this._enableScrolling = true;\n    this._settingKey = 'default';\n    this._settings = settings;\n    this._preventDefault = this._settings[this._settingKey].preventDefault;\n    this._stopPlay = this._settings[this._settingKey].stopPlay;\n    this._lockFocus = this._settings[this._settingKey].lockFocus;\n    this._startFocus = this._settings[this._settingKey].startFocus;\n    this._focusBack = this._settings[this._settingKey].focusBack;\n    this._eventTimeout = this._settings[this._settingKey].eventTimeout;\n    this._openCallback = this._settings[this._settingKey].openCallback;\n    this._closeCallback = this._settings[this._settingKey].closeCallback;\n    this._documentKeydownHandler = this._documentKeydownHandler.bind(this);\n    this._documentClickHandler = this._documentClickHandler.bind(this);\n    this._modalClickHandler = this._modalClickHandler.bind(this);\n\n    this._init();\n  }\n\n  _createClass(Modals, [{\n    key: \"_init\",\n    value: function _init() {\n      if (this._modalOpenElements.length) {\n        document.addEventListener('click', this._documentClickHandler);\n      }\n    }\n  }, {\n    key: \"_setSettings\",\n    value: function _setSettings() {\n      var settingKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._settingKey;\n\n      if (!this._settings[settingKey]) {\n        return;\n      }\n\n      this._preventDefault = typeof this._settings[settingKey].preventDefault === 'boolean' ? this._settings[settingKey].preventDefault : this._settings[this._settingKey].preventDefault;\n      this._stopPlay = typeof this._settings[settingKey].stopPlay === 'boolean' ? this._settings[settingKey].stopPlay : this._settings[this._settingKey].stopPlay;\n      this._lockFocus = typeof this._settings[settingKey].lockFocus === 'boolean' ? this._settings[settingKey].lockFocus : this._settings[this._settingKey].lockFocus;\n      this._startFocus = typeof this._settings[settingKey].startFocus === 'boolean' ? this._settings[settingKey].startFocus : this._settings[this._settingKey].startFocus;\n      this._focusBack = typeof this._settings[settingKey].lockFocus === 'boolean' ? this._settings[settingKey].focusBack : this._settings[this._settingKey].focusBack;\n      this._eventTimeout = typeof this._settings[settingKey].eventTimeout === 'number' ? this._settings[settingKey].eventTimeout : this._settings[this._settingKey].eventTimeout;\n      this._openCallback = this._settings[settingKey].openCallback || this._settings[this._settingKey].openCallback;\n      this._closeCallback = this._settings[settingKey].closeCallback || this._settings[this._settingKey].closeCallback;\n    }\n  }, {\n    key: \"_documentClickHandler\",\n    value: function _documentClickHandler(evt) {\n      var target = evt.target;\n\n      if (!target.closest('[data-open-modal]')) {\n        return;\n      }\n\n      evt.preventDefault();\n      this._modalName = target.closest('[data-open-modal]').dataset.openModal;\n\n      if (!this._modalName) {\n        return;\n      }\n\n      this.open();\n    }\n  }, {\n    key: \"_documentKeydownHandler\",\n    value: function _documentKeydownHandler(evt) {\n      var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';\n\n      if (isEscKey) {\n        evt.preventDefault();\n        this.close(document.querySelector('.modal.is-active').dataset.modal);\n      }\n    }\n  }, {\n    key: \"_modalClickHandler\",\n    value: function _modalClickHandler(evt) {\n      var target = evt.target;\n\n      if (!target.closest('[data-close-modal]')) {\n        return;\n      }\n\n      this.close(target.closest('[data-modal]').dataset.modal);\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners(modal) {\n      modal.addEventListener('click', this._modalClickHandler);\n      document.addEventListener('keydown', this._documentKeydownHandler);\n    }\n  }, {\n    key: \"_removeListeners\",\n    value: function _removeListeners(modal) {\n      modal.removeEventListener('click', this._modalClickHandler);\n      document.removeEventListener('keydown', this._documentKeydownHandler);\n    }\n  }, {\n    key: \"_stopInteractive\",\n    value: function _stopInteractive(modal) {\n      if (this._stopPlay) {\n        modal.querySelectorAll('video, audio').forEach(function (el) {\n          return el.pause();\n        });\n        modal.querySelectorAll('[data-iframe]').forEach(function (el) {\n          el.querySelector('iframe').contentWindow.postMessage('{\"event\": \"command\", \"func\": \"pauseVideo\", \"args\": \"\"}', '*');\n        });\n      }\n    }\n  }, {\n    key: \"_autoPlay\",\n    value: function _autoPlay(modal) {\n      modal.querySelectorAll('[data-iframe]').forEach(function (el) {\n        var autoPlay = el.closest('[data-auto-play]');\n\n        if (autoPlay) {\n          el.querySelector('iframe').contentWindow.postMessage('{\"event\":\"command\",\"func\":\"playVideo\",\"args\":\"\"}', '*');\n        }\n      });\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      var _this = this;\n\n      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._modalName;\n      var modal = document.querySelector(\"[data-modal=\\\"\".concat(modalName, \"\\\"]\"));\n\n      if (!modal || modal.classList.contains('is-active')) {\n        return;\n      }\n\n      document.removeEventListener('click', this._documentClickHandler);\n      this._openedModalElement = document.querySelector('.modal.is-active');\n\n      if (this._openedModalElement) {\n        this._enableScrolling = false;\n        this.close(this._openedModalElement.dataset.modal);\n      }\n\n      this._setSettings(modalName);\n\n      modal.classList.add('is-active');\n\n      if (!this._openedModalElement) {\n        this._scrollLock.disableScrolling();\n      }\n\n      if (this._openCallback) {\n        this._openCallback();\n      }\n\n      if (this._lockFocus) {\n        this._focusLock.lock('.modal.is-active', this._startFocus);\n      }\n\n      setTimeout(function () {\n        _this._addListeners(modal);\n\n        _this._autoPlay(modal);\n\n        document.addEventListener('click', _this._documentClickHandler);\n      }, this._eventTimeout);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var _this2 = this;\n\n      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._modalName;\n      var modal = document.querySelector(\"[data-modal=\\\"\".concat(modalName, \"\\\"]\"));\n      document.removeEventListener('click', this._documentClickHandler);\n\n      if (!modal || !modal.classList.contains('is-active')) {\n        return;\n      }\n\n      if (this._lockFocus) {\n        this._focusLock.unlock(this._focusBack);\n      }\n\n      modal.classList.remove('is-active');\n\n      this._removeListeners(modal);\n\n      this._stopInteractive(modal);\n\n      if (this._closeCallback) {\n        this._closeCallback();\n      }\n\n      if (this._enableScrolling) {\n        setTimeout(function () {\n          _this2._scrollLock.enableScrolling();\n        }, this._eventTimeout);\n      }\n\n      setTimeout(function () {\n        document.addEventListener('click', _this2._documentClickHandler);\n      }, this._eventTimeout);\n\n      this._setSettings('default');\n\n      this._enableScrolling = true;\n    }\n  }]);\n\n  return Modals;\n}();\n\n//# sourceURL=webpack:///./js/modules/modals/modals.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! exports provided: initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initScroll\", function() { return initScroll; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar links = document.querySelectorAll('a[href^=\"#\"]');\n\nvar initScroll = function initScroll() {\n  if (links) {\n    var _iterator = _createForOfIteratorHelper(links),\n        _step;\n\n    try {\n      var _loop = function _loop() {\n        var link = _step.value;\n        link.addEventListener('click', function (evt) {\n          evt.preventDefault();\n          var id = link.getAttribute('href');\n\n          if (id.length > 1) {\n            document.querySelector(id).scrollIntoView({\n              behavior: 'smooth',\n              block: 'start'\n            });\n          }\n        });\n      };\n\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/utils/focus-lock.js":
/*!********************************!*\
  !*** ./js/utils/focus-lock.js ***!
  \********************************/
/*! exports provided: FocusLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FocusLock\", function() { return FocusLock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar SELECTORS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^=\"-\"])'];\nvar FocusLock = /*#__PURE__*/function () {\n  function FocusLock() {\n    _classCallCheck(this, FocusLock);\n\n    this._lockedSelector = null;\n    this._focusableElements = null;\n    this._endElement = null;\n    this._selectors = SELECTORS;\n    this._documentKeydownHandler = this._documentKeydownHandler.bind(this);\n  }\n\n  _createClass(FocusLock, [{\n    key: \"_documentKeydownHandler\",\n    value: function _documentKeydownHandler(evt) {\n      var activeElement = document.activeElement;\n\n      if (evt.key === 'Tab') {\n        if (!this._focusableElements.length) {\n          evt.preventDefault();\n          activeElement.blur();\n          return;\n        }\n\n        if (this._focusableElements.length === 1) {\n          evt.preventDefault();\n\n          this._focusableElements[0].focus();\n\n          return;\n        }\n\n        if (this._focusableElements.length > 1 && !activeElement.closest(this._lockedSelector)) {\n          evt.preventDefault();\n\n          this._focusableElements[0].focus();\n\n          return;\n        }\n      }\n\n      if (evt.key === 'Tab' && !evt.shiftKey && activeElement === this._focusableElements[this._focusableElements.length - 1]) {\n        evt.preventDefault();\n\n        this._focusableElements[0].focus();\n      }\n\n      if (evt.key === 'Tab' && evt.shiftKey && activeElement === this._focusableElements[0]) {\n        evt.preventDefault();\n\n        this._focusableElements[this._focusableElements.length - 1].focus();\n      }\n    }\n  }, {\n    key: \"lock\",\n    value: function lock(lockedSelector) {\n      var startFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.unlock();\n      this._lockedSelector = lockedSelector;\n      var lockedElement = document.querySelector(this._lockedSelector);\n\n      if (!lockedElement) {\n        return;\n      }\n\n      this._focusableElements = lockedElement.querySelectorAll(this._selectors);\n      this._endElement = document.activeElement;\n\n      var startElement = lockedElement.querySelector('[data-focus]') || this._focusableElements[0];\n\n      if (this._endElement) {\n        this._endElement.blur();\n      }\n\n      if (startElement && startFocus) {\n        startElement.focus();\n      }\n\n      document.addEventListener('keydown', this._documentKeydownHandler);\n    }\n  }, {\n    key: \"unlock\",\n    value: function unlock() {\n      var returnFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n      if (this._endElement && returnFocus) {\n        this._endElement.focus();\n      }\n\n      this._lockedSelector = null;\n      this._focusableElements = null;\n      this._endElement = null;\n      document.removeEventListener('keydown', this._documentKeydownHandler);\n    }\n  }]);\n\n  return FocusLock;\n}();\nwindow.focusLock = new FocusLock();\n\n//# sourceURL=webpack:///./js/utils/focus-lock.js?");

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosChecker\", function() { return iosChecker; });\nvar iosChecker = function iosChecker() {\n  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection\n  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;\n};\n\n//# sourceURL=webpack:///./js/utils/ios-checker.js?");

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosVhFix\", function() { return iosVhFix; });\n/* harmony import */ var _ios_checker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker.js */ \"./js/utils/ios-checker.js\");\n\n\nvar iosVhFix = function iosVhFix() {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    if (Object(_ios_checker_js__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"])()) {\n      var vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n      window.addEventListener('resize', function () {\n        vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n      });\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils/ios-vh-fix.js?");

/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: ScrollLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollLock\", function() { return ScrollLock; });\n/* harmony import */ var _ios_checker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker.js */ \"./js/utils/ios-checker.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar ScrollLock = /*#__PURE__*/function () {\n  function ScrollLock() {\n    _classCallCheck(this, ScrollLock);\n\n    this._iosChecker = _ios_checker_js__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"];\n    this._lockClass = this._iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';\n    this._scrollTop = null;\n    this._fixedBlockElements = document.querySelectorAll('[data-fix-block]');\n  }\n\n  _createClass(ScrollLock, [{\n    key: \"_getScrollbarWidth\",\n    value: function _getScrollbarWidth() {\n      return window.innerWidth - document.documentElement.clientWidth;\n    }\n  }, {\n    key: \"_getBodyScrollTop\",\n    value: function _getBodyScrollTop() {\n      return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || document.body && document.body.scrollTop;\n    }\n  }, {\n    key: \"disableScrolling\",\n    value: function disableScrolling() {\n      var _this = this;\n\n      this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this._getBodyScrollTop();\n\n      if (this._getScrollbarWidth()) {\n        document.body.style.paddingRight = \"\".concat(this._getScrollbarWidth(), \"px\");\n\n        this._fixedBlockElements.forEach(function (block) {\n          block.style.paddingRight = \"\".concat(_this._getScrollbarWidth(), \"px\");\n        });\n      }\n\n      document.body.style.top = \"-\".concat(this._scrollTop, \"px\");\n      document.body.classList.add(this._lockClass);\n    }\n  }, {\n    key: \"enableScrolling\",\n    value: function enableScrolling() {\n      document.body.classList.remove(this._lockClass);\n      window.scrollTo(0, +document.body.dataset.scroll);\n      document.body.style.paddingRight = null;\n      document.body.style.top = null;\n\n      this._fixedBlockElements.forEach(function (block) {\n        block.style.paddingRight = null;\n      });\n\n      document.body.removeAttribute('data-scroll');\n      this._scrollTop = null;\n    }\n  }]);\n\n  return ScrollLock;\n}();\nwindow.scrollLock = new ScrollLock();\n\n//# sourceURL=webpack:///./js/utils/scroll-lock.js?");

/***/ })

/******/ });