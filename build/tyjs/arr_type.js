"use strict";
// 数组类型
/*
 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
*/
// 类型 + 方括号 , 项目中不与许出现其他类型
var fibonacci_one = [1, 2, 3, 4];
// 数组泛型
var fibonacci_two = [1, 2, 3, 4, 5, 6];
var fibonacci_three = [1, 2, 3, 4, 5, 6];
// any 在数组中的应用
var fibonacci_four = [1, 'zero', 'age', [1, 2, 3], 10];
/*
 Array-like Object 不是数组类型
*/ 
