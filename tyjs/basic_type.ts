
// 布尔类型
let isDone: boolean = false

// 数字类型
let num: number = 100

// 字符串类型
let username: String = 'zero'

// 列表类型
let List: number[] = [1,2,3]

// 元组类型
let tuple: [String, number]  = ['1', 2]

// 枚举类型
enum Color{ Red, Green, Blue}
let c: Color = Color.Blue

// 任意类型
let random : any = 123
let minxList: any[] = [1, 2, 'name']

// 没有返回值 void
let unable :void = undefined
function f():void {
    console.log('void function')
}

// undefined null 类型
let u: undefined  = undefined
let n: null = null

// 返回never的函数必须存在无法达到的终点
function loop():never {
    while(true){
    }
}
// 类型断言
let someValue: any = "any some value"
let strlen: number = (<String>someValue).length

console.log(strlen)





