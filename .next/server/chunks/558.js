exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 2993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const Category = ({
  category,
  categoryCount
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: "text-gray-700 text-2xl font-medium block mt-16",
      children: category
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "mt-3 text-sm text-gray-500",
      children: categoryCount
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Category);

/***/ }),

/***/ 4758:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Products; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
;// CONCATENATED MODULE: ./components/Product.js


 //import Image from "next/image";




const Product = ({
  product
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/products/${product._id}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-end justify-end h-56 w-full bg-cover relative",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
            className: "w-5 h-5"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 py-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-gray-700 uppercase",
          children: product.product_title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-gray-500 mt-2",
          children: ["$", product.price]
        })]
      })]
    })
  });
};

/* harmony default export */ var components_Product = (Product);
;// CONCATENATED MODULE: ./components/Products.js




const Products = ({
  products
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6",
    children: products.map(product => /*#__PURE__*/jsx_runtime_.jsx(components_Product, {
      product: product
    }, product._id))
  });
};

/* harmony default export */ var components_Products = (Products);

/***/ })

};
;