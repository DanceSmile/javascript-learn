
// 类
// TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。


abstract class Animal {
    /*
     TypeScript 可以使用三种访问修饰符（Access Modifiers），
     分别是 public、private 和 protected
    */     
    protected name: string

    constructor(name: string){
        this.name = name
    }

    //抽象方法 sayHi
    abstract sayHi(): void
}

class Dog extends Animal{

    constructor(name: string) {
        super(name)
    }

    public sayHi(){
        console.log(`hello ${this.name}`)
    }

}

// 给类加上 TypeScript 的类型很简单，与接口类似
let d_klass: Animal = new Dog('zero')

d_klass.sayHi() // hello zero