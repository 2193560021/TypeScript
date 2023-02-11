// 也可以使用字面量进行类型声明

let a:10;
a = 10;

// 可以使用 | 来连接多个类型（联合类型）
let b:"male" | "female";
b = "male";
b = "female";

let c:boolean | string;
c = true;
c = 'hello';

// any表示的是任意类型，可以任意赋值，设置后相当于对该变量关闭了类型检测
// let d:any;
let d;
d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型的值
let e:unknown;
e = 10;
e = 'hello';
e = true;

let s:string;
s = d;

e = 'hello';

//unknown实际上是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
if(typeof e === "string"){
    s = e;
}

//类型断言
/*
* 语法：
*   变量 as 类型
*   <类型>变量
* */
s = e as string;
s = <string>e;

function fn(num) {
    if(num > 0){
        return true;
    }else{
        return 123;
    }
}

function fn2():never{
    throw new Error('报错了！');
}