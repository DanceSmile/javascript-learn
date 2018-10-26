// 内置对象

/* 
 JavaScript 中有很多内置对象
 它们可以直接在 TypeScript 中当做定义好了的类型

 内置对象是指根据标准在全局作用域（Global）上存在的对象。
 这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

 ECMAScript 标准提供的内置对象有：
 Boolean、Error、Date、RegExp 等。
*/



// Boolean、Error、Date、RegExp 等, 在 TypeScript 中将变量定义为这些类型
let b: Boolean = new Boolean(1)
let e: Error = new Error('error code')
let d: Date = new Date()
let r: RegExp = new RegExp('12')

// DOM 和 BOM 提供的内置对象有 Document、HTMLElement、Event、NodeList 等
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});


// TypeScript 核心库的定义文件

/* 
 TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
*/

interface Math{
    pow(x: number, y: number): number
}


// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：

