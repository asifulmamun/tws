/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/abstract/global.js":
/*!***********************************!*\
  !*** ./src/js/abstract/global.js ***!
  \***********************************/
/***/ (function() {

/* 
    Cookies
 */

console.log('This is global.js');

/***/ }),

/***/ "./src/js/mobile_components/aside.js":
/*!*******************************************!*\
  !*** ./src/js/mobile_components/aside.js ***!
  \*******************************************/
/***/ (function() {

console.log('this is mobile aside.js for desktop browser');

// set cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// get cookies
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// // // Sidebar Nav expendable - need li item add this class with number, example: tws__nav_li_1, tws__nav_li_2, every time change the class number 1,2,3.. etc, how many class want to add, which li has sub-menu 
// const main_menu_ul = document.getElementById('primary_menus'); // primary menu id select
// // check if main_menu_ul exists, then
// if(main_menu_ul){
//     // General loop for run menu
//     for (var i = 1; i <= main_menu_ul.childElementCount; i++) {
//         // Check if the selector exist
//         if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {
//             tws__loop_all_nav_li(`tws__nav_li_${i}`, i);
//         }
//     } // General loop for run menu

//     // Nav close exclude without selected
//     function close_all_sub_menu(exclude){
//         for (let i = 1; i <= main_menu_ul.childElementCount; i++) {
//             if(i===exclude){continue;}// exclude selected from loop
//             // Check if the selector exist
//             if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {

//                 // all sub-menu close by default after refresh
//                 setCookie(`tws__nav_li_${i}_sub`, 'none', 0);

//                 document.getElementById(`tws__nav_li_${i}_sub`).style.display = 'none';
//                 document.getElementById(`tws__nav_li_${i}_icon`).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
//             } // condition
//         } // for loop
//     } // close_all_sub_menu

//     // Looping with li
//     function tws__loop_all_nav_li(tws__nav_class_name, menu_numb) {

//         // Create Child Node for icon
//         let i = document.createElement('i');
//         i.setAttribute('id', `${tws__nav_class_name}_icon`);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(i);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].classList.add('relative');
//         document.getElementById(`${tws__nav_class_name}_icon`).innerHTML = `›`;
//         // Create an ID in sub-menu
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].setAttribute('id', `${tws__nav_class_name}_sub`);
//         // Create child as style element
//         let style = document.createElement('style');
//         let styleCss = `#${tws__nav_class_name}_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}`;
//         style.innerHTML = styleCss;
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(style);

//         // by default sub menu open or close with cookie
//         if(getCookie(`${tws__nav_class_name}_sub`) != ""){
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//             document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//         }else{
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'none';
//         } // by default sub menu open or close with cookie

//         // After click the li - open the sub-menu
//         if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){
//             main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', open_sub_menu); 
//         } // After click the li - open the sub-menu

//         // oepn sub-menu
//         function open_sub_menu() {

//             // All submenu close without selected
//             close_all_sub_menu(menu_numb);

//             if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){

//                 // sub-menu open by default after refresh
//                 setCookie(`${tws__nav_class_name}_sub`, 'block', 1);

//                 document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//                 document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//             }
//         } // oepn sub-menu
//     } // Looping with li
// } // end if main_menu_ul exists

var primary_menu = document.getElementById('primary_menu');
// var primary_menu_li = []; // initialize an array
if (primary_menu) {
  var _loop = function _loop() {
    var currentChild = primary_menu.childNodes[i];
    if (currentChild.id && currentChild.nodeName === 'LI') {
      // If has sub menu
      if (document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0) {
        // primary_menu_li.push(currentChild.getAttribute('id')); // add the id to the array

        // submenu set id
        document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu')[0].setAttribute('id', "".concat(currentChild.getAttribute('id'), "_sub"));

        // li style and auto event
        tws__loop_all_nav_li(currentChild.getAttribute('id'));

        // event click for li
        document.getElementById(currentChild.getAttribute('id')).addEventListener('click', function (e) {
          open_sub_menu(currentChild.getAttribute('id'));
        }); // event click for li
      } // If has sub menu
    }
    ;
  };
  for (var i = 0; i < primary_menu.childNodes.length; i++) {
    _loop();
  }
  ; // loop
  // console.log(primary_menu_li); // print the array with id

  // auto event and menu li style
  function tws__loop_all_nav_li(primary_menu_li_id) {
    // Create Child Node for icon
    var i = document.createElement('i');
    i.setAttribute('id', "".concat(primary_menu_li_id, "_icon"));
    document.getElementById(primary_menu_li_id).appendChild(i);

    // li make relative and add the arrow in inner icon
    document.getElementById(primary_menu_li_id).classList.add('relative');
    document.getElementById("".concat(primary_menu_li_id, "_icon")).innerHTML = "\u203A";

    // Create child as style element
    var style = document.createElement('style');
    var styleCss = "#".concat(primary_menu_li_id, "_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}");
    style.innerHTML = styleCss;
    document.getElementById(primary_menu_li_id).appendChild(style);

    // by default sub menu open or close with cookie
    if (getCookie("".concat(primary_menu_li_id, "_sub")) != "") {
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'block';
      document.getElementById("".concat(primary_menu_li_id, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    } else {
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'none';
    } // by default sub menu open or close with cookie
  } // tws__loop_all_nav_li

  function open_sub_menu(primary_menu_li_id) {
    // All submenu close without selected
    close_all_sub_menu(primary_menu_li_id);
    if (document.getElementsByClassName(primary_menu_li_id).length == 1) {
      // sub-menu open by default after refresh
      setCookie("".concat(primary_menu_li_id, "_sub"), 'block', 1);
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'block';
      document.getElementById("".concat(primary_menu_li_id, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    }
  } // open sub-menu

  // Nav close exclude without selected which id in exclude variable
  function close_all_sub_menu(exclude) {
    for (var _i = 0; _i < primary_menu.childNodes.length; _i++) {
      var currentChild = primary_menu.childNodes[_i];
      if (currentChild.id && currentChild.nodeName === 'LI') {
        // If has sub menu
        if (document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0) {
          if (currentChild.getAttribute('id') === exclude) {
            continue;
          } // exclude selected from loop

          // console.log(`${currentChild.getAttribute('id')}_sub`);

          // all sub-menu close by default after refresh
          setCookie("".concat(currentChild.getAttribute('id'), "_sub"), 'none', 0);
          document.getElementById("".concat(currentChild.getAttribute('id'), "_sub")).style.display = 'none';
          document.getElementById("".concat(currentChild.getAttribute('id'), "_icon")).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
        } // If has sub menu
      } // endif
    } // for loop
  } // close_all_sub_menu
} // end if primary_menu exists or not check

/***/ }),

/***/ "./src/js/mobile_components/toggle.js":
/*!********************************************!*\
  !*** ./src/js/mobile_components/toggle.js ***!
  \********************************************/
/***/ (function() {

console.log('this is mobile toggle.js for desktop browser');

// // Pixel to 
// const pxrem = function (px){
//     return px*0.0625+'rem';
// };

// Toggle
var toggle_primary_menu = document.getElementById('toggle_primary_menu');
var aside = document.getElementById('aside');
var main = document.getElementById('main');
var qmenu = document.getElementById('tws__quick_access_menu'); // quick access menu

// check the main id is exist, then
if (main) {
  // after click
  toggle_primary_menu.addEventListener('click', function (event) {
    // aside/page action by toggle
    if (aside.classList.contains('md:left-0')) {
      // sidebar hide bigger screen
      aside.classList.remove('md:left-0');
      aside.classList.add('md:-left-80');
      main.classList.remove('md:pl-56');
      qmenu.classList.remove('md:left-0');
      qmenu.classList.add('md:-left-80');

      // sidebar show - mobile or else
      aside.classList.remove('-left-80');
      aside.classList.add('left-0');
      qmenu.classList.remove('-left-80');
      qmenu.classList.add('left-0');
    }

    // if mobile aside hide by click on body then again the toggle menu will show by check if the aside is hide
    else if (aside.classList.contains('-left-80')) {
      // sidebar hide bigger screen
      aside.classList.remove('md:left-0');
      aside.classList.add('md:-left-80');
      main.classList.remove('md:pl-56');
      qmenu.classList.remove('md:left-0');
      qmenu.classList.add('md:-left-80');

      // sidebar show - mobile or else
      aside.classList.remove('-left-80');
      aside.classList.add('left-0');
      qmenu.classList.remove('-left-80');
      qmenu.classList.add('left-0');
    } else {
      // sidebar show smaller screen
      aside.classList.add('md:left-0');
      aside.classList.remove('md:-left-80');
      main.classList.add('md:pl-56');
      qmenu.classList.add('md:left-0');
      qmenu.classList.remove('md:-left-80');

      // sidebar hide - mobile or else
      aside.classList.add('-left-80');
      aside.classList.remove('left-0');
      qmenu.classList.add('-left-80');
      qmenu.classList.remove('left-0');
    }
  });

  // if clicking on main section | page and if the aside is open it will be closed
  main.addEventListener('click', function (event) {
    if (aside.classList.contains('left-0')) {
      // sidebar hide - mobile or else
      aside.classList.add('-left-80');
      aside.classList.remove('left-0');
    } // if left-0 class is exists
  }); // click on main section
} // end if, main id is exist

/***/ }),

/***/ "./src/sass/app_mobile.scss":
/*!**********************************!*\
  !*** ./src/sass/app_mobile.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/js/app_mobile.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_app_mobile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app_mobile.scss */ "./src/sass/app_mobile.scss");
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/global */ "./src/js/abstract/global.js");
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_abstract_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_components_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile_components/toggle */ "./src/js/mobile_components/toggle.js");
/* harmony import */ var _mobile_components_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mobile_components_toggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mobile_components_aside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile_components/aside */ "./src/js/mobile_components/aside.js");
/* harmony import */ var _mobile_components_aside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobile_components_aside__WEBPACK_IMPORTED_MODULE_3__);
// sass

console.log('this is app_mobile.js');

// global js


// components


}();
/******/ })()
;
//# sourceMappingURL=app_mobile.js.map