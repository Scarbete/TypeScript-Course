// Перегрузка функций
var add = function (a, b) {
    return a + b;
};
var toUpper = function (str) {
    return str.trim().toUpperCase();
};
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One params: ', position(31));
console.log('Two params: ', position(31, 312));
