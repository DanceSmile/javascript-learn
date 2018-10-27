"use strict";
/*
 声明合并
 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
*/
var merge = {
    name: 'zero',
    age: 10,
    sex: 1
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
/*
 类的合并与接口的合并规则一致。
*/ 
