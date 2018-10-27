"use strict";
// 第一个 typescript 文件
// 类型注解
function get_start(person) {
    return 'hello ' + person;
}
var user = 'Jane User';
var r_user = get_start(user);
console.log(r_user);
function greeterInterface(person) {
    return 'interface: hello ' + person.name + ', age is ' + person.age;
}
var rest = greeterInterface({ name: 'zero', age: '19' });
console.log(rest);
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
