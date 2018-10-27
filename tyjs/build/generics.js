"use strict";
/*
 泛型
 泛型（Generics）是指在定义函数、接口或类的时候
 不预先指定具体的类型，而在使用的时候再指定类型的一种特性
*/
function set_name(name) {
    return [name];
}
function createArray(length, value) {
    var result = [];
    for (var i_1 = 0; i_1 < length; i_1++) {
        result[i_1] = value;
    }
    return result;
}
/*
多个类型参数
*/
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var get_name_ = function get_name_interface(name) {
    return [name];
};
