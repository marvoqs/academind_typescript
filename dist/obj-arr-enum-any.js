"use strict";
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
const person = {
    name: 'Marv',
    age: 27,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favoriteActivities;
favoriteActivities = ['sports', 'cooking'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // => ERROR!!!
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
