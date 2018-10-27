"use strict";
// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 比如一周只能有七天，颜色限定为红绿蓝等。
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days.Sun); //0
console.log(Days.Mon); //1
// 给枚举项手动赋值,未手动赋值的枚举项会接着上一个枚举项递增。
var Days_one;
(function (Days_one) {
    Days_one[Days_one["Sun"] = 3] = "Sun";
    Days_one[Days_one["Mon"] = 1] = "Mon";
    Days_one[Days_one["Tue"] = 2] = "Tue";
    Days_one[Days_one["Wed"] = 3] = "Wed";
    Days_one[Days_one["Thu"] = 4] = "Thu";
    Days_one[Days_one["Fri"] = 5] = "Fri";
    Days_one[Days_one["Sat"] = 6] = "Sat";
})(Days_one || (Days_one = {}));
;
console.log(Days_one["Sun"]); // 3
console.log(Days_one["Wed"]); // 3
