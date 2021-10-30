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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]; });\n\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todo_list_class__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/classes/index.js\");\n\r\n\r\nclass TodoList {\r\n\r\n    constructor(){\r\n\r\n        this.todos = [];\r\n\r\n        this.cargarTodo()\r\n    }\r\n\r\n    nuevoTodo(todo){\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage()\r\n    }\r\n\r\n    marcarCompletado(id){\r\n        for( const todo of this.todos ){\r\n            if (todo.id == id) {\r\n                todo.completado = !todo.completado;\r\n                break;\r\n            }\r\n        }\r\n        this.guardarLocalStorage\r\n    }\r\n\r\n    eliminarTodo(id){\r\n        this.todos = this.todos.filter(todo => todo.id != id);\r\n       this.guardarLocalStorage\r\n    }\r\n\r\n    eliminarCompletados(){\r\n       this.todos = this.todos.filter(todo => todo.completado != true)\r\n        this.guardarLocalStorage\r\n    }\r\n\r\n    guardarLocalStorage(){\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n    }\r\n\r\n    cargarTodo(){\r\n\r\n        this.todos = localStorage.getItem('todo') \r\n                                    ? JSON.parse(localStorage.getItem('todo'))\r\n                                    : [];\r\n\r\n        this.todos = this.todos.map( ___WEBPACK_IMPORTED_MODULE_0__[\"Todo\"].fromJson )\r\n\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n\r\nclass Todo {\r\n\r\n\r\n    static fromJson({tarea, id, completado, creado}){\r\n\r\n        const tempObj = new Todo(tarea);\r\n\r\n        tempObj.id = id;\r\n        tempObj.completado = completado;\r\n        tempObj.creado = creado;\r\n\r\n        return tempObj;\r\n    }\r\n\r\n    constructor(tarea){\r\n\r\n        this.tarea = tarea;\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\r\n\r\n\r\n\r\n\r\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]();\r\n\r\ntodoList.todos.forEach( _js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHtml\"] );\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: crearTodoHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHtml\", function() { return crearTodoHtml; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n//Referencias Html\r\n\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtInput = document.querySelector('.new-todo');\r\nconst btnDelAll = document.querySelector('.clear-completed');\r\nconst elFilter = document.querySelector('.filters');\r\nconst anchorFilter = document.querySelectorAll('.filtro');\r\n\r\nconst crearTodoHtml = (todo) =>{\r\n\r\n    const list = `<li class=\"${todo.completado ? 'completed' : ''}\" data-id=\"${todo.id}\">\r\n                    <div class=\"view\">\r\n                        <input class=\"toggle\" type=\"checkbox\" ${todo.completado ? 'checked' : ''}>\r\n                        <label>${todo.tarea}</label>\r\n                        <button class=\"destroy\"></button>\r\n                    </div>\r\n                    </li>`;\r\n\r\n    const div = document.createElement('div');\r\n\r\n    div.innerHTML = list;\r\n\r\n    divTodoList.append(div.firstElementChild);\r\n    return div;\r\n    // ul.innerHTML = list\r\n\r\n}\r\n\r\ntxtInput.addEventListener('keyup', (e) => {\r\n\r\n    if (e.keyCode === 13 && txtInput.value.length > 0) {\r\n        const nuevaTarea = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](txtInput.value);\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevaTarea);\r\n\r\n        crearTodoHtml(nuevaTarea);\r\n        \r\n        txtInput.value = '';\r\n    }\r\n    \r\n});\r\n\r\ndivTodoList.addEventListener('click', (event)=>{\r\n\r\n    const nombreElement  = event.target.localName;\r\n    const todoElement =  event.target.parentElement.parentElement;\r\n    const getId = todoElement.getAttribute('data-id');\r\n\r\n    if (nombreElement.includes('input')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].marcarCompletado(getId);\r\n        todoElement.classList.toggle('completed');\r\n\r\n    }\r\n\r\n    if (nombreElement.includes('button')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarTodo(getId);\r\n        divTodoList.removeChild(todoElement);\r\n    }\r\n});\r\n\r\n\r\nbtnDelAll.addEventListener('click', ()=>{\r\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarCompletados();\r\n \r\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\r\n        const element = divTodoList.children[i];\r\n        \r\n        if (element.classList.contains('completed')) {\r\n            divTodoList.removeChild(element)\r\n        }\r\n    }\r\n\r\n});\r\n\r\nelFilter.addEventListener('click', (event)=>{\r\n\r\n    const filtro = event.target.text;\r\n\r\n    if (!filtro) { return; }\r\n\r\n    anchorFilter.forEach( elem => elem.classList.remove('selected') );\r\n    event.target.classList.add('selected');\r\n\r\n    for(const elemento of divTodoList.children){\r\n\r\n        elemento.classList.remove('hidden');\r\n        const completLi = elemento.classList.contains('completed');\r\n\r\n        switch (filtro) {\r\n            case 'Pendientes':\r\n                    if(completLi){\r\n                        elemento.classList.add('hidden');\r\n                    }\r\n                break;\r\n            case 'Completados':\r\n                    if (!completLi) {\r\n                        elemento.classList.add('hidden');\r\n                    }\r\n                break;\r\n        }\r\n    }\r\n\r\n    \r\n\r\n})\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });