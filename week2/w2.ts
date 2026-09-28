function add(a: number, b: number): number {
    return a + b;
}

// 2. Optional parameter
function greet(name: string, message?: string): string {
    return message ? `${message}, ${name}` : `Hello, ${name}`;
}

// 3. Default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

// 4. REST parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 5. Arrow function
const square = (num: number): number => {
    return num * num;
};

// 6. Normal function converted to arrow function
const sayHello = (name: string): string => {
    return "Hello " + name;
};

// Output
console.log("Addition:", add(10, 20));
console.log(greet("Alice"));
console.log(greet("Bob", "Welcome"));
console.log("Multiply:", multiply(5));
console.log("Multiply:", multiply(5, 4));
console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("Square:", square(6));
console.log(sayHello("John"));