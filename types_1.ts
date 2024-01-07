
// 6 types ----------------------------------------------------
const text: string = 'Quasar' // Строкый тип данных
const num: number = 19 // Числовое
const bool: boolean = false // Логический ти данных правда ложь
const und: undefined = undefined // не определенный
const nil: null = null // пустота
const obj: object = {} // тип данных обьект

// console.log(text)
// console.log(num)
// console.log(bool)
// console.log(und)
// console.log(nil)
// console.log(obj)

// Array типизация массива ----------------------------------------------------
const arr: number[] = [12, 1, 32, 13, 21, 31, 2]
const arr2: string[] = ['dewdioew', 'dewdweo', 'dewiodw']
const arr3: [number, string] = [12, "text"]
// console.log(arr)


// Дженерики ----------------------------------------------------
const generic: Array<number> = [12, 1, 32, 13, 21, 31, 2]
// console.log(generic)

// Any ----------------------------------------------------
// Представляет собой разные типы данных ну или иначе любой из существующих
const array: any[] = [31,3,1, "dewd", true, undefined]
// console.log(array)

// let testAny = 213 // при создании переменной без указания типа, тип присваивается из первого значения
let testAny: any = 213 // для того чтобы переменная была типа Any его нужно явно указать
testAny = "new value"
testAny = []


// function ----------------------------------------------------
// void - означает то что функия ничего не возвращяет
const sayHello = (): void => {
    console.log('Hello')
}
// sayHello()

const sayHelloUser = (name: string, surname: string): void => {
    // name && surname - к ним тоже задаются типизации
    console.log(name, surname)
}
// sayHelloUser('Quasar', 'Maybe')


// Never -----------------------------------------------------
// Признак для значений, описать функцию что оно не вернет значение по причине зацикленности
function error(message: string): never {
    throw new Error(message)
}

function infiniteLoop(): never {
    while (true) {}
}

function infiniteRec(): never {
    return infiniteRec()
}

// Type ----------------------------------------------------
// Позвляет создавать именованные типы и использовать их для типизации
// также имеется возомжность совмещят с другими типами и для повторного использования
type user = string

const quasar: user = 'Quasar'
// const quasar2: user = 21312

type ID = string | number // Перечисление типов
const id1: ID = 13213
const id2: ID = '13213'

type someType = string | null | undefined

type Point = { // типизация конструкции обьекта
    x: number
    y: number
}

type Size = {
    height: number
    width: number
}

type Shape = {
    // создание нового типа с помощью наследования от другого существующего
    // то есть данный тип имеет все те же типы что и у Point
    color: string
} & Point & Size
