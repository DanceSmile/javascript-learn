
 // 第一个 typescript 文件

// 类型注解
 function get_start(person: string) {
    return 'hello ' + person
}

let user  = 'Jane User'
let r = get_start(user)

console.log(r)


 // 接口
 interface Person {
     name: string
     age: string
 }
 function greeterInterface(person: Person) {
    return 'interface: hello ' + person.name + ', age is ' + person.age
 }
 r = greeterInterface({name: 'zero', age: '19'})

 console.log(r)


 // 类
 class Student{
    copyName:String
    constructor(public name:string, public age, public sex){
        this.copyName = name
    }
 }

 let s = new Student('zero', 20 , 0)

console.log(s.name)
