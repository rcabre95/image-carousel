"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Header.module.scss */ \"./styles/Header.module.scss\");\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Header = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Header, Component1);\n    var _super = _createSuper(Header);\n    function Header(props) {\n        _classCallCheck(this, Header);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {};\n        return _this;\n    }\n    var _proto = Header.prototype;\n    _proto.capitalizeWord = function capitalizeWord(word) {\n        var capWord = word.charAt(0).toUpperCase() + word.slice(1);\n        return capWord;\n    };\n    _proto.render = function render() {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"10 Cats\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().spacer)\n                }, void 0, false, {\n                    fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().filter),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                            variant: \"outlined\",\n                            color: \"primary\",\n                            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n                                    id: \"categoryid\",\n                                    children: \"Category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                    labelId: \"categoryid\",\n                                    id: \"category\",\n                                    value: this.props.category,\n                                    onChange: this.props.changeCategory,\n                                    label: \"Category\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            value: 0,\n                                            children: \"Any\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this),\n                                        this.props.categories.map(function(catCategory) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                                value: catCategory.id,\n                                                children: _this.capitalizeWord(catCategory.name)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 37\n                                            }, _this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {\n                            control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                                checked: this.props.includeGifs,\n                                onChange: this.props.handleCheckbox,\n                                color: \"primary\"\n                            }, void 0, false, void 0, void 0),\n                            label: \"Include Gifs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonSection),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                color: \"primary\",\n                                type: \"button\",\n                                onClick: this.props.getCats,\n                                children: \"Get more cats!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raphaelcabrera/Downloads/dev-portfolio/image-carousel/components/Header.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this);\n    };\n    return Header;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUO0tBQ0o7O0NBQ0osQ0F6RG9CL0MsNENBQVMsQ0F5RDdCO0FBRUQsK0RBQWVTLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgQnV0dG9uLCBNZW51SXRlbSwgSW5wdXRMYWJlbCwgRm9ybUhlbHBlclRleHQsIEZvcm1Db250cm9sLCBTZWxlY3QsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmludGVyZmFjZSBJSGVhZGVyUHJvcHMge1xuICAgIGluY2x1ZGVHaWZzOiBib29sZWFuO1xuICAgIGNhdGVnb3JpZXM6IGFueVtdO1xuICAgIGNhdGVnb3J5OiBudW1iZXI7XG4gICAgZ2V0Q2F0czogKCkgPT4gdm9pZDtcbiAgICBjaGFuZ2VDYXRlZ29yeTogKGU6IGFueSkgPT4gdm9pZDtcbiAgICBoYW5kbGVDaGVja2JveDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElIZWFkZXJTdGF0ZSB7XG5cbn1cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50PElIZWFkZXJQcm9wcywgSUhlYWRlclN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IElIZWFkZXJQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FwaXRhbGl6ZVdvcmQod29yZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNhcFdvcmQgPSB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNhcFdvcmRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPjEwIENhdHM8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhdGVnb3J5aWRcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiY2F0ZWdvcnlpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfT5Bbnk8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYXRlZ29yaWVzLm1hcCgoY2F0Q2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Y2F0Q2F0ZWdvcnkuaWR9Pnt0aGlzLmNhcGl0YWxpemVXb3JkKGNhdENhdGVnb3J5Lm5hbWUpfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5pbmNsdWRlR2lmc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tib3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW5jbHVkZSBHaWZzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmdldENhdHN9PkdldCBtb3JlIGNhdHMhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsIkJ1dHRvbiIsIk1lbnVJdGVtIiwiSW5wdXRMYWJlbCIsIkZvcm1Db250cm9sIiwiU2VsZWN0IiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsImNhcGl0YWxpemVXb3JkIiwid29yZCIsImNhcFdvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibWFpbiIsImgxIiwic3BhY2VyIiwiZmlsdGVyIiwidmFyaWFudCIsImNvbG9yIiwiZm9ybUNvbnRyb2wiLCJpZCIsImxhYmVsSWQiLCJ2YWx1ZSIsImNhdGVnb3J5Iiwib25DaGFuZ2UiLCJjaGFuZ2VDYXRlZ29yeSIsImxhYmVsIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdENhdGVnb3J5IiwibmFtZSIsImNvbnRyb2wiLCJjaGVja2VkIiwiaW5jbHVkZUdpZnMiLCJoYW5kbGVDaGVja2JveCIsImJ1dHRvblNlY3Rpb24iLCJ0eXBlIiwib25DbGljayIsImdldENhdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});