// Generic
var arrayOfNumbers = [1, 1, 2, 3, 9, 4, 6, 8];
var arrayOfStrings = ['quasar', 'aesthetic'];
// Здесь мы указываем то что данная функция работает
// с типом Т и массив типа Т и возвращяющяя массив типа Т
var reverseArr = function (array) {
    return array.reverse();
};
reverseArr(arrayOfNumbers);
reverseArr(arrayOfStrings);
var sayHello = function (args) {
    return args;
};
console.log(sayHello('hello'));
