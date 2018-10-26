"use strict";
// 类型断言
/*
 类型断言（Type Assertion）可以用来手动指定一个值的类型。

 语法:
 1. <类型>值
 2. 值 as 类型

 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。

*/
/*

 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
 我们只能访问此联合类型的所有类型里共有的属性或方法

 function getLength(something: string | number ){
    return something.length
 }

 类型“string | number”上不存在属性“length”。 类型“number”上不存在属性“length”

*/
// 在需要断言的变量前加上 <Type> 即可
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
