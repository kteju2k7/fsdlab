class Student {
    public name: string;
    private age: number;
    protected course: string;
    readonly id: number;

    static college: string = "ABC College";

    constructor(name: string, age: number, course: string, id: number) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.id = id;
    }

    public display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("ID:", this.id);
    }
}

class StudentDetails extends Student {
    showCourse(): void {
        console.log("Protected Course:", this.course);
    }
}

let s1 = new Student("Teja", 20, "CSE", 101);

console.log("College:", Student.college);
s1.display();

let s2 = new StudentDetails("Ravi", 21, "ECE", 102);

s2.showCourse();