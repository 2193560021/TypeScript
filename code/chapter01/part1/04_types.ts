//object表示一个js对象
let a:object;
a = {};
a = function (){};

//{} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值}
// 在属性名后加? 表示可选属性
let b:{name:string,age?:number};

b = {name:'lyy'}

let c:{name:string,[propName:string]:any};
c = {name:'猪八戒',age:18,gender:'男'};

let d:(a:number,b:number,[]:any)=>number;
d = function (n1,n2,n3){
    return n1 + n2 + n3;
}

/*
*   数组的类型声明
*       类型[]
*       Array<类型>
* */

// string[]表示字符串数组
let e:string[];
e = ['a','b','c'];

let f:number[];

let g:Array<number>;
g = [1,2,3]

/*
    元组，元组就是固定长度的数组
*/
let h:[string,string];
h = ['hello','abe'];

//enum 枚举

enum Gender{
    Male = 0,
    Female = 1
}
let i : {name:string,gender:Gender}
i = {
    name:'孙悟空',
    gender:Gender.Male
}

// console.log(i.gender === Gender.Male)

//& 表示同时
let j:{name: string} | {age:number}

type myType = string;
