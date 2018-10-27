
 // 第一个 typescript 文件

// 类型注解
 function get_start(person: string) {
    return 'hello ' + person
}

let user  = 'Jane User'
let r_user = get_start(user)

console.log(r_user)


 // 接口
 interface Person {
     name: string
     age: string
 }
 function greeterInterface(person: Person) {
    return 'interface: hello ' + person.name + ', age is ' + person.age
 }
 let rest = greeterInterface({name: 'zero', age: '19'})

 console.log(rest)


 // 类
 class Student{
    copyName:String
    constructor(public name:string, public age: number, public sex: number){
        this.copyName = name
    }
 }

 let s = new Student('zero', 20 , 0)

console.log(s.name)
