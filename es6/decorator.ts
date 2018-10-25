// decorator 装饰器

// 类的修饰
function test(target) {
    target.isTestable = true
}
class MyTestableClass{}

c = new MyTestableClass()

console.log(c)

