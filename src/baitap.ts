
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
// Câu 5
export class BankAccount {
    constructor(public balance: number = 0) {}
  
    deposit(amount: number): void {
      if (amount <= 0) throw new Error("Deposit amount must be positive.");
      this.balance += amount;
    }
  
    withdraw(amount: number): boolean {
      if (amount <= 0 || amount > this.balance) return false;
      this.balance -= amount;
      return true;
    }
  }

//  Câu 6
export class Book {
    constructor(
      public title: string,
      public author: string,
      public year: number
    ) {}
  }
//   Câu 7 
export class User {
    constructor(private name: string) {}
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  }
//   Câu 8
export class Product {
    constructor(public name: string, public price: number) {}
  }
  
  export function filterProductsOver100(products: Product[]): Product[] {
    return products.filter(product => product.price > 100);
  }
//   Câu 9
export interface AnimalInterface {
    name: string;
    sound(): void;
  }
//   Câu 10
export class Account {
    public owner: string;
    private balance: number;
    readonly accountNumber: string;
  
    constructor(owner: string, balance: number, accountNumber: string) {
      this.owner = owner;
      this.balance = balance;
      this.accountNumber = accountNumber;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) this.balance += amount;
    }
  }
  // Câu 11
export class AnimalBase {
    constructor(public name: string) {}
  
    makeSound(): void {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  export class Dog extends AnimalBase {
    bark(): void {
      console.log(`${this.name}: Woof!`);
    }
  }
  
  export class Cat extends AnimalBase {
    meow(): void {
      console.log(`${this.name}: Meow!`);
    }
  }

  // Câu 12
export interface Flyable {
    fly(): void;
  }
  
  export interface Swimmable {
    swim(): void;
  }
  
  export class Bird implements Flyable {
    fly(): void {
      console.log("Bird is flying.");
    }
  }
  
  export class Fish implements Swimmable {
    swim(): void {
      console.log("Fish is swimming.");
    }
  }

  // Câu 13
export abstract class ShapeAbstract {
    abstract area(): number;
  }
  
  export class Square extends ShapeAbstract {
    constructor(public side: number) {
      super();
    }
  
    area(): number {
      return this.side * this.side;
    }
  }
  
  export class Circle extends ShapeAbstract {
    constructor(public radius: number) {
      super();
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }