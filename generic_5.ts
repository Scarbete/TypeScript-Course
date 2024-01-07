// Generic
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 9, 4, 6, 8]
const arrayOfStrings: Array<string> = ['quasar', 'aesthetic']

// Здесь мы указываем то что данная функция работает
// с типом Т и массив типа Т и возвращяющяя массив типа Т

const reverseArr = <T>(array: T[]): T[] => {
    return array.reverse()
}

reverseArr(arrayOfNumbers)
reverseArr(arrayOfStrings)

const sayHello = <T>(args: T): T => {
    return args
}

console.log(
    sayHello<string>('hello')
)