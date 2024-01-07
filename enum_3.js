var MemberShip;
(function (MemberShip) {
    // Simple = 0,
    // Standart = 1,
    // Premium = 2
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standart"] = 1] = "Standart";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var memberShip = MemberShip.Standart; // Получение значение либо нумирации
var memberShipReverse = MemberShip[0]; // Получние самого ключа
console.log(memberShip);
console.log(memberShipReverse);
var Positions;
(function (Positions) {
    Positions["owner"] = "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446";
    Positions["admin"] = "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    Positions["worker"] = "\u0420\u0430\u0431\u043E\u0442\u043D\u0438\u043A";
})(Positions || (Positions = {}));
var getPosition = function (position) {
    console.log("\u0412\u0430\u0448\u0430 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C ".concat(position));
};
getPosition(Positions.admin);
