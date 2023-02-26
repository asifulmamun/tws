/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/js/mini_cart.js ***!
  \*****************************/
var ajaxUrl = frontend_ajax_object.ajaxurl; // get admin-ajax.php url
var wpNonce = frontend_ajax_object.ajaxnonce; // get admin-ajax.php nonce - for unique ajax requests

// All elements under ul - select all li>data-pdoduct_id then with product_id action another function
var tws__mini_cart_ul = document.getElementById('tws__mini_cart_ul');
// var ids_tws__mini_cart_li = []; // initialize an array
// check mini cart ul is eixist or not, if exist then collect all li data-pdoduct_id then with product_id action another function
if (tws__mini_cart_ul) {
  var _loop = function _loop() {
    var currentChild = tws__mini_cart_ul.childNodes[i];
    if (currentChild.id && currentChild.nodeName === 'LI') {
      // ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

      // with peoduct_id action another function
      document.getElementById("tws__mini_decrement_".concat(currentChild.dataset.product_id)).addEventListener('click', function (e) {
        // console.log(`tws__mini_decrement_${currentChild.getAttribute('data-product_id')}`);

        // action with product_id
        decrement_quantity("".concat(currentChild.dataset.product_id));
      });
    }
    ;
  };
  for (var i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
    _loop();
  }
  ;
}
// console.log(ids_tws__mini_cart_li); // the array of ids

// Clicking on decrement button
function decrement_quantity(product_id) {
  var tws__quantity = parseInt(document.getElementById("tws__mini_cart_quantity_".concat(product_id)).innerText);
  var tws__product_key = document.getElementById("tws__mini_decrement_".concat(product_id)).dataset.cart_item_key;

  // calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
  if (tws__quantity > 1) {
    var newQuantity = parseInt(tws__quantity) - 2;
    save_to_db(tws__product_key, newQuantity, product_id);
  }
}

// New Quantity	Set
function save_to_db(ckey, qty, product_id) {
  // var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", ajaxUrl, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(this.response);
      if (this.response == 0) {
        // after decrement qty = 2, then it will be increment qty = 1 for fregment refresh
        document.getElementById("tws__mini_increment_".concat(product_id)).click();
      }
    }
  };
  xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
}

// Coupon code action
function coupon_code(action, coupon_code) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", ajaxUrl, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(this.response);
      // freagment refresh
      document.body.dispatchEvent(new Event('wc_fragment_refresh'));
      if (this.response == 0) {
        // console.log(this.response);
        // freagment refresh
        document.body.dispatchEvent(new Event('wc_fragment_refresh'));
      }
    }
  };
  xhr.send('action=' + action + '&coupon_code=' + coupon_code + '&wp_nonce=' + wpNonce);
}

// click the coupon submit button
if (document.getElementById('tws__coupon_submit')) {
  document.getElementById('tws__coupon_submit').addEventListener('click', function (e) {
    coupon_code('add_coupon_code', document.getElementById('tws__coupon_input').value);
  });
}

// Remove button for coupon code
var tws__coupon_list_ul = document.getElementById('tws__coupon_list_ul');
if (tws__coupon_list_ul) {
  var _loop2 = function _loop2() {
    var currentChildcpn = tws__coupon_list_ul.childNodes[_i];
    if (currentChildcpn.id && currentChildcpn.nodeName === 'LI') {
      // ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

      // with coupon code
      document.getElementById("tws__coupon_remove_".concat(currentChildcpn.dataset.cpcode)).addEventListener('click', function (e) {
        // action with remove coupon code
        coupon_code('remove_coupon_code', currentChildcpn.dataset.cpcode);
      });
    }
    ;
  };
  for (var _i = 0; _i < tws__coupon_list_ul.childNodes.length; _i++) {
    _loop2();
  }
  ;
}
/******/ })()
;
//# sourceMappingURL=mini_cart.js.map