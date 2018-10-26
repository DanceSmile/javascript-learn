"use strict";
// decorator 装饰器
// 类的修饰
function test(target) {
    target.isTestable = true;
}
var MyTestableClass = /** @class */ (function () {
    function MyTestableClass() {
    }
    return MyTestableClass;
}());
c = new MyTestableClass();
console.log(c);
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
var unable = null;
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
for (var i = 0; i < 10; i++) {
    console.log(i);
}
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
