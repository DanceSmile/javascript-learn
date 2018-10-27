/*
 泛型
 泛型（Generics）是指在定义函数、接口或类的时候
 不预先指定具体的类型，而在使用的时候再指定类型的一种特性
*/


function set_name<T>(name: T ): Array<any> {
    return [name]
}

function createArray<T>(length: number, value: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

/*
多个类型参数
*/


function swap<T, U>(tuple: [T, U]): [U, T] {
return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]


/*
 泛型约束
*/
  interface Lengthwise {
    length: number;
  }
  
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

/*
 泛型接口
*/

interface CreateArrayFunc {
    <T>(name: T): Array<T>
}


let get_name_: CreateArrayFunc = function get_name_interface<T>(name: T): Array<T>{
    return [name]
}
