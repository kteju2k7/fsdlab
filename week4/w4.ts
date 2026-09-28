// Namespace creation
namespace StudentInfo {
    export class Student {
        constructor(public name: string) {}

        display(): void {
            console.log("Student Name:", this.name);
        }
    }
}

// Using namespace
let s = new StudentInfo.Student("Teja");
s.display();


// Generic variable
let value: any = 100;
console.log("Generic Variable:", value);


// Generic function
function showData<T>(data: T): T {
    return data;
}

console.log("Generic Function:", showData<string>("Hello"));
console.log("Generic Function:", showData<number>(500));


// Generic constant
const collegeName: string = "ABC College";
console.log("College:", collegeName);


// Export module example
export function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));