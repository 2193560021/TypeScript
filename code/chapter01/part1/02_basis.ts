//声明一个变量a，同时指定类型为number
let a : number;

a = 10;
a = 33;
// a = '33';    此行代码会报错

let b:string;
b = 'hello';

// 声明完变量直接赋值
// let c:boolean = true;

// 如果变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = true;

//JS中的函数不考虑参数的类型和个数
function sum(a:number,b:number):number{
    return a + b;
}

let result = sum(123, 456);   //579