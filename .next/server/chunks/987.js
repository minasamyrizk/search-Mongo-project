exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 1532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Container = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
    className: "my-8",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container mx-auto px-6",
      children: children
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 2266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(454);
/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(realm_web__WEBPACK_IMPORTED_MODULE_4__);








const Header = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: autoComplete,
    1: setAutoComplete
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    if (searchTerm.length) {
      // Realm App Id in the .env.local file
      const REALM_APP_ID = "intelistyle-project-bbjcc";
      const app = new realm_web__WEBPACK_IMPORTED_MODULE_4__.App({
        id: REALM_APP_ID
      });
      const credentials = realm_web__WEBPACK_IMPORTED_MODULE_4__.Credentials.anonymous();

      try {
        const user = await app.logIn(credentials);
        const searchAutoComplete = await user.functions.searchAutoComplete(searchTerm);
        setAutoComplete(() => searchAutoComplete);
      } catch (error) {
        console.error(error);
      }
    } else {
      setAutoComplete([]);
    }
  }, [searchTerm]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm("");
    router.push({
      pathname: `/search/${searchTerm}`
    });
  };

  const handleSelect = id => {
    setSearchTerm("");
    router.push({
      pathname: `/products/${id}`
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-6 py-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex items-center justify-between",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "w-full text-green-500 text-2xl font-semibold cursor-pointer",
              children: "Intelistyle Search Project"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mt-6 max-w-lg mx-auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            className: "w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline",
            type: "text",
            placeholder: "Search",
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm
          })
        }), autoComplete.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          className: "absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20",
          children: autoComplete.map(item => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "px-4 py-2 hover:bg-green-300 cursor-pointer",
              onClick: () => handleSelect(item._id),
              children: item.product_title
            }, item._id);
          })
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Header);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;