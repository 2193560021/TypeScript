//声明一个变量a，同时指定类型为number
var a;
a = 10;
a = 33;
// a = '33';    此行代码会报错
var b;
b = 'hello';
// 声明完变量直接赋值
// let c:boolean = true;
// 如果变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
var c = true;
//JS中的函数不考虑参数的类型和个数
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); //579
