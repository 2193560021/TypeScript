// 也可以使用字面量进行类型声明
var a;
a = 10;
// 可以使用 | 来连接多个类型（联合类型）
var b;
b = "male";
b = "female";
var c;
c = true;
c = 'hello';
// any表示的是任意类型，可以任意赋值，设置后相当于对该变量关闭了类型检测
// let d:any;
var d;
d = 10;
d = 'hello';
d = true;
// unknown 表示未知类型的值
var e;
e = 10;
e = 'hello';
e = true;
var s;
s = d;
e = 'hello';
//unknown实际上是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
if (typeof e === "string")
    s = e;
