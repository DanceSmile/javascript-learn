// 对象类型 -- 接口

/*

 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，
 而具体如何行动需要由类（classes）去实现（implements）。

*/


interface People {
    name: string;
    sex: number;
}

let tom: People = {
    name: 'tom',
    sex: 1,
}


// 可选属性

interface People_one {
    name: string;
    sex?: number;
}

let tom_one: People_one =  {
    name: 'zero'
}

// 任意属性
// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface People_two {
    name: string;
    sex?: string;
    [propName: string]: string| undefined
}

let tome_two: People_two = {
    name: 'tom'
}


/*
 只读属性

 对象中的一些字段只能在创建的时候被赋值
 那么可以用 readonly 定义只读属性
*/

interface People_three {
    readonly id: number
}

let tom_three: People_three = {
    id: 1
}

