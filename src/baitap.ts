
// Họ tên: Dương Thiên Ân - Mssv: 23730281



// Câu 1
export class Person {
    constructor (public name: string, public age: number) {}

    displayInfo(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

}
// Câu 2
export class Student extends Person {
    constructor(name: string, age: number, public grade: number) {
      super(name, age);
    }
  
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
  }

// Câu 3
export class Car {
    constructor(public brand: string, public model: String, public year: number){}
    displayInfo(): void{
        console.log(`Car: ${this.brand} ${this.model} ${this.year}`);
        
    }
}
// Câu 4
export class Rectangle {
    constructor(public width: number, public height: number){}

    area(): number{
        return this.width * this.height;
    }

    perimete(): number{
        return 2 * (this.width * this.height);
    }
}