"use strict";
// 第一个 typescript 文件
// 类型注解
function get_start(person) {
    return 'hello ' + person;
}
var user = 'Jane User';
var r = get_start(user);
console.log(r);
function greeterInterface(person) {
    return 'interface: hello ' + person.name + ', age is ' + person.age;
}
r = greeterInterface({ name: 'zero', age: '19' });
console.log(r);
// 类
var Student = /** @class */ (function () {
    function Student(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.copyName = name;
    }
    return Student;
}());
var s = new Student('zero', 20, 0);
console.log(s.name);
