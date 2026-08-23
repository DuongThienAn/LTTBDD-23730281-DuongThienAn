import { Car, Person, Rectangle, Student } from "./baitap";

// Câu 1
console.log("Câu 1:");
new Person("Dương Thiên Ân", 21).displayInfo();

// Câu 2
console.log("Câu 2:");
new Student("Dương Thiên Ân", 21, 9).displayInfo();

// Câu 3
console.log("Câu 3:");
new Car("Honda", "Civic", 2020).displayInfo();

// Câu 4
console.log("Câu 4:");
const reg = new Rectangle(4, 5);
console.log("Area: ", reg.area());
console.log("Perimeter: ", reg.perimete());


