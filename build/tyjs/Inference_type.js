"use strict";
/*
 推导类型
 如果没有明确的指定类型
 那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
*/
/*
 TypeScript 会在没有明确的指定类型的时候推测出一个类型
 这就是类型推论
    let inference = 1
 等价于：
    let inference: number
    inference = 1
*/
/*
 定义的时候没有赋值，不管之后有没有赋值，
 都会被推断成 any 类型而完全不被类型检查
*/
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
