"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonth = exports.getDayMonth = void 0;
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getMonth = function getMonth(date) {
  return monthNames[date.getMonth()];
};

exports.getMonth = getMonth;

var getDayMonth = function getDayMonth(date) {
  return "".concat(date.getDate(), " / ").concat(date.getMonth() + 1);
};

exports.getDayMonth = getDayMonth;