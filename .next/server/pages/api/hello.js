(function() {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ helloAPI; }
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function helloAPI(req, res) {
  res.status(200).json({
    name: 'John Doe'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(689));
module.exports = __webpack_exports__;

})();