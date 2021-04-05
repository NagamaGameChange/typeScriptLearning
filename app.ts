const person: {
    name: string;
    age: number;
    hobbies: string[]
} = {
    name: 'Nagama',
    age: 30,
    hobbies: ['sports','cooking']
}

let favouriteActivities: string[];
favouriteActivities = ['sports'];
console.log(person.name);

for(const hobby of person.hobbies) {
console.log(hobby.toUpperCase());
}