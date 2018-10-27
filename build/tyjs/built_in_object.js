"use strict";
// 内置对象
/*
 JavaScript 中有很多内置对象
 它们可以直接在 TypeScript 中当做定义好了的类型

 内置对象是指根据标准在全局作用域（Global）上存在的对象。
 这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

 ECMAScript 标准提供的内置对象有：
 Boolean、Error、Date、RegExp 等。
*/
// Boolean、Error、Date、RegExp 等, 在 TypeScript 中将变量定义为这些类型
var b = new Boolean(1);
var e = new Error('error code');
var d = new Date();
var r = new RegExp('12');
// DOM 和 BOM 提供的内置对象有 Document、HTMLElement、Event、NodeList 等
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // Do something
});
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
