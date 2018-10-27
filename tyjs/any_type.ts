/*
 任意值
 任意值（Any）用来表示允许赋值为任意类型。
*/


/*
 如果是一个普通类型，在赋值过程中改变类型是不被允许的
 在任意值上访问任何属性都是允许的
*/

let anyThing: any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)