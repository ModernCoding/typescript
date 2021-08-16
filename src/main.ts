interface UserInterface {
  name: string,
  age?: number,

  getMessage (): string
}


const user: UserInterface = {
  name: "Monster",
  age: 30,

  getMessage: () => {
    return "Hello"
  }
}


const user2: UserInterface = {
  name: "Jack",
  
  getMessage: () => {
    return "Hello"
  }
}


console.log(user.name)
console.log(user2.age)