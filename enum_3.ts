// enum ------------------------------
// Представляет собой перечисление чего либо, допустим есть ресторан и нужно перечислить роли
// В таком случаи хорошо пригодится перечисление enum, также enum имеет нумирацию ключей

enum MemberShip {
    // Simple = 0,
    // Standart = 1,
    // Premium = 2

    Simple,
    Standart,
    Premium
}

const memberShip = MemberShip.Standart // Получение значение либо нумирации
const memberShipReverse = MemberShip[0] // Получние самого ключа
// console.log(memberShip)
// console.log(memberShipReverse)

enum Positions { // Перечисление с помощью значений по умолчанию
    owner = 'Владелец',
    admin = 'Администратор',
    worker = 'Работник'
}

const getPosition = (position: string) => console.log(`Ваша должность ${position}`)

getPosition(Positions.admin)