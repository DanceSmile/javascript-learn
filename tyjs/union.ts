/*
 联合类型
 联合类型（Union Types）表示取值可以为多种类型中的一种。
*/


//  联合类型使用 | 分隔每个类型。

let my_favorite: string | number

my_favorite = 'apple'
my_favorite = 169


/*
 访问联合类型的属性或方法
 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候
 我们只能访问此联合类型的所有类型里共有的属性或方法
*/

function getLength_union( something: number | string ): string {
    
    return something.toString()

}


