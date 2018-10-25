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
