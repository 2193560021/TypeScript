//object表示一个js对象
var a;
a = {};
a = function () { };
//{} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值}
// 在属性名后加? 表示可选属性
var b;
b = { name: 'lyy' };
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
var d;
d = function (n1, n2, n3) {
    return n1 + n2 + n3;
};
/*
*   数组的类型声明
*       类型[]
*       Array<类型>
* */
// string[]表示字符串数组
var e;
e = ['a', 'b', 'c'];
var f;
var g;
g = [1, 2, 3];
/*
    元组，元组就是固定长度的数组
*/
var h;
h = ['hello', 'abe'];
//enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
