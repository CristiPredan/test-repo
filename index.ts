let age:number = 20;
console.log(age);
if (age < 50)
    age += 10;

function render(document:any) {
    console.log(document);
}

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, 'Mosh'];
user[1].length

enum Size {Small, Medium, Large}

//Functions

function calculateTax(income: number) {
    if (income < 50.000)
        return income * 1.2;
    return income * 1.3;
}


retire: (_date: Date) => void {}

let sum = (x: number, y: number): number => {
    return x + y;
}

console.log(sum);

// Objects

let employee: {
    readonly id: number;
    name: string;
    age: number,

} = {id: 1, name: 'Mosh', age: 24 };

// employee.id = 3;

