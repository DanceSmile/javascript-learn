 
// 类型别名
// 类型别名用来给一个类型起个新名字


type  Name = string
let name_type: Name = 'zero'


type Func_type = (name: string) => string
let func_type: Func_type = function ( name : string ): string {
    return "zero"
}



// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

type EventTypes = "click" | "scroll" | 'mousemove'

function getEvent(e: EventTypes ): string {
    return "zero"
}

getEvent("click")



