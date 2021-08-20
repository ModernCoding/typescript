var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// interface UserInterface {
//   id: ID,
//   name: string,
//   surname: string
// }
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = "alex";
var pageName = "1";
var errorMessage = null;
// let user: UserInterface | null = null
var s1 = 3;
var s2 = s1;
// const someElement = document.querySelector ('.foo')
// someElement.addEventListener ('blur', (e: Event): void => {
//   console.log ((e.target as HTMLInputElement).value)
// })
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user2 = {
    name: "Jack",
    data: ['foo'],
    meta: 1
};
var result = addId(user);
console.log(result);
