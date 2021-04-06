var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//     access: string;
// }
var person = {
    name: 'Nagama',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
    access: 'READ_ONLY_USER'
};
var favouriteActivities;
favouriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === 0) {
    console.log("is author");
}
