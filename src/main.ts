type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

// interface UserInterface {
//   id: ID,
//   name: string,
//   surname: string
// }

const popularTags: PopularTag [] = [ 'dragon', 'coffee' ]
const dragonsTag: MaybePopularTag = 'dragon'

let username: string = "alex"
let pageName: string | number = "1"
let errorMessage: string | null = null
// let user: UserInterface | null = null

let s1: number = 3
let s2: string = s1 as unknown as string

// const someElement = document.querySelector ('.foo')

// someElement.addEventListener ('blur', (e: Event): void => {
//   console.log ((e.target as HTMLInputElement).value)
// })


const addId = <T extends object> (obj: T): T => {

  const id: string = Math.random ().toString (16)

  return {
    ...obj,
    id
  }

}


interface UserInterface <T, V> {
  name: string,
  data: T,
  meta: V
}


const user: UserInterface < { meta: string }, string > = {
  
  name: "Jack",
  
  data: {
    meta: "foo"
  },

  meta: "bar"

}


const user2: UserInterface < string [], number > = {
  name: "Jack",
  data: ['foo'],
  meta: 1
}


const result = addId <UserInterface <object, string>> (user)
console.log (result)