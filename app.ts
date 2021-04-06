enum Role { ADMIN, READ_ONLY, AUTHOR}
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//     access: string;
// }
const person = {
    name: 'Nagama',
    age: 30,
    hobbies: ['sports','cooking'],
    role: Role.ADMIN,
    access: 'READ_ONLY_USER'
}

let favouriteActivities: string[];
favouriteActivities = ['sports'];
console.log(person.name);

for(const hobby of person.hobbies) {
console.log(hobby.toUpperCase());
}

if(person.role === 0){
    console.log("is author");
}