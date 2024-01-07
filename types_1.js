// 6 types
var text = 'Quasar';
var num = 19;
var bool = false;
var und = undefined;
var nil = null;
var obj = {};
// console.log(text)
// console.log(num)
// console.log(bool)
// console.log(und)
// console.log(nil)
// console.log(obj)
// Array
var arr = [12, 1, 32, 13, 21, 31, 2];
var arr2 = ['dewdioew', 'dewdweo', 'dewiodw'];
var arr3 = [12, "dwed"];
// console.log(arr)
// Дженерики
var generic = [12, 1, 32, 13, 21, 31, 2];
// console.log(generic)
// Any
var array = [31, 3, 1, "dewd", true, undefined];
// console.log(array)
// let testAny = 213 // при создании переменной без указания типа, тип присваивается из первого значения
var testAny = 213; // для того чтобы переменная была типа Any его нужно явно указать
// ...
testAny = "new value";
testAny = [];
var sayHello = function () {
    console.log('Hello');
};
sayHello();
var sayHelloUser = function (name, surname) {
    console.log(name, surname);
};
sayHelloUser('Quasar', 'Maybe');
