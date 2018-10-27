// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 比如一周只能有七天，颜色限定为红绿蓝等。


enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days.Sun) //0
console.log(Days.Mon) //1

// 给枚举项手动赋值,未手动赋值的枚举项会接着上一个枚举项递增。
enum Days_one {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days_one["Sun"]); // 3
console.log(Days_one["Wed"] ); // 3