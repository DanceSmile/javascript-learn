// 数组类型

/* 
 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
*/


// 类型 + 方括号 , 项目中不与许出现其他类型
let fibonacci_one: number[] = [1, 2, 3, 4]


// 数组泛型
let fibonacci_two: Array<number> = [1, 2, 3, 4, 5, 6]


// 用接口表示数组
interface NumberArray{
    [index: number]: number
}

let fibonacci_three: NumberArray = [1, 2, 3, 4 , 5, 6]

// any 在数组中的应用
let fibonacci_four: any[] = [1, 'zero', 'age', [1, 2, 3] , 10]



/*
 Array-like Object 不是数组类型
*/