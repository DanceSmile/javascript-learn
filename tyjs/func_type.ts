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



function sum(x: number, y : number): number { 
    return x + y
}

// 注意，输入多余的（或者少于要求的）参数，是不被允许的


let mySum: (x: number, y: number) => number  = function(x: number, y: number): number {
    return x + y
}


interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc =  function (source: string, subString: string): boolean {
    return source === subString
} 


