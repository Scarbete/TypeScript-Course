
interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

// const key: PersonKeys = 'name'
let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// - Exclude: нужен для удаления ключей в типе для создания нового типа
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>

// - Pick: нужен для того чтобы забрать только нужные ключи для создания нового типа
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>