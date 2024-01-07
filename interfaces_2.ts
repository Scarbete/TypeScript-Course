// - interface ----------------------------------------------------
// Позволяет создавать готовую типизацию для таких конструкций как обьекты и тд
// Также в отличии от Type данный interface не переопределяется
interface Rect {
    // readonly - делает свойство только читабельным, и запрещяет к изменениям, но их можно инициадизировать
    readonly id: number
    color?: string   // делает опциональным, то есть не обьязательным
    // color: string
    // id: number
    size: {
        height: number
        width: number
    }
}

const rect: Rect = { // обьект с использованием готовой типизации Rect
    id: 31013,
    color: '#fff',
    size: {
        width: 1229,
        height: 231
    },
}

const rect2: Rect = {
    id: 389111,
    size: {
        width: 3498,
        height: 8624
    }
}

rect2.color = '#000'
// rect2.id = 123123 // readonly

// - Указание, приведение в тип
const rect3 = {} as Rect
const react4 = <Rect>{}


// ===============================================================

// - Наследование Интерфейсов
// когда интерфейс наследуется от другого интерфейса, дочергий интерфейс который
// наследуется берет все свойства ну или значения у родительского интерфейса
interface RectWithArea extends Rect {
    getArea: () => number // Функция которая возвращяет тип данных Number
}

const rect5: RectWithArea = {
    id: 132213,
    color: '#412',
    size: {
        width: 319301,
        height: 29031
    },
    getArea(): number {
        return this.color.width * this.size.height
    }
}



// ===============================================================
// Взаимодействие класса с интерфейсами

interface IClock {
    time: Date
    // Функция setTime которая принимает аргумент date у которого тип будет Date и функция ничего не возвращяет
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}



// ===============================================================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid gray',
    marginTop: '2px',
    borderRadius: '5px'
}