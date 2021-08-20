// interface UserInterface {
//   getFullname (): string
// }


// class User implements UserInterface {

//   protected firstName: string
//   private lastName: string
//   readonly unchangeableName: string
//   static readonly maxAge: number = 50


//   constructor (firstName: string, lastName: string) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.unchangeableName = firstName
//   }


//   getFullname = (): string => {
//     return `${ this.firstName } ${ this.lastName }`
//   }

// }


// class Admin extends User {

//   private editor: string

//   setEditor (editor: string): void {
//     this.editor = editor
//   }

// }


// const user: User = new User ("Monster", "lessons")
// console.log (user.getFullname ())
// console.log (User.maxAge)


// const admin: Admin = new Admin ('Foo', 'Bar')
// console.log (admin.setEditor ('toto'))