// 函数的类型

/*
 函数声明
 在 JavaScript 中，有两种常见的定义函数的方式

 function sum(x, y){
    return x + y 
 }

 let mySum = function(x, y){
    return x + y
 }

*/

// 函数声明

function sum(x: number, y : number): number { 
    return x + y
}

// 注意，输入多余的（或者少于要求的）参数，是不被允许的



// 函数表达式

let mySum: (x: number, y: number) => number  = function(x: number, y: number): number {
    return x + y
}

//用接口定义函数的形状

interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc =  function (source: string, subString: string): boolean {
    return source === subString
} 

// 可选参数

function buildName(name: string, age?: number ) :string {
    return name + age
}

// 参数默认值

function buildNameDefault(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}


// 剩余参数

function push(array: any[], ...items: any[] ): void {
    items.forEach(function(item){
        array.push(item)
    })
}


// 重载

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string ): number | string | undefined {
    if ( typeof x === 'number' ){
        return Number( x.toString().split('').reverse().join('') )
    }else if (typeof x === 'string'){
        return x.split("").reverse().join("")
    }
}


