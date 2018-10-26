"use strict";
// 函数的类型
/*
 函数声明
 在 JavaScript 中，有两种常见的定义函数的方式

 function sum(x, y){
    return x + y
 }

 let mySum = function(x, y){
    return x + y
 }

*/
// 函数声明
function sum(x, y) {
    return x + y;
}
// 注意，输入多余的（或者少于要求的）参数，是不被允许的
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source === subString;
};
// 可选参数
function buildName(name, age) {
    return name + age;
}
// 参数默认值
function buildNameDefault(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split("").reverse().join("");
    }
}
