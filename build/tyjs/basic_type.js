"use strict";
// 布尔类型
var isDone = false;
// 数字类型
var num = 100;
// 字符串类型
var username = 'zero';
// 列表类型
var List = [1, 2, 3];
// 元组类型
var tuple = ['1', 2];
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// 任意类型
var random = 123;
var minxList = [1, 2, 'name'];
// 没有返回值 void
var unable = undefined;
function f() {
    console.log('void function');
}
// undefined null 类型
var u = undefined;
var n = null;
// 返回never的函数必须存在无法达到的终点
function loop() {
    while (true) {
    }
}
// 类型断言
var someValue = "any some value";
var strlen = someValue.length;
console.log(strlen);
