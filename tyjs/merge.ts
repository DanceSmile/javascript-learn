/*
 声明合并
 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
*/


/*
 相同名称接口中的属性在合并时会简单的合并到一个接口中
 注意，合并的属性的类型必须是唯一的
*/

interface merge {
    name: string
    age: number
}

interface merge{
    name: string
    sex: number
}


let merge: merge = {
    name: 'zero',
    age: 10,
    sex: 1
}

// 函数的合并

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | undefined {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

/*
 类的合并与接口的合并规则一致。
*/