import { Account, BankAccount, Bird, Book, Car, Cat, Circle, Dog, Fish, Person, Product, Rectangle, Square, Student, User, filterProductsOver100 } from "./baitap";

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

// Câu 5
console.log("Câu 5:");
const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(300);
console.log("Balance: ", acc.balance);

// Câu 6
console.log("Câu 6:");
console.log(new Book("Ngữ Văn 7", "NXB Văn Học", 2011));

// Câu 7
console.log("Câu 7:");
const user = new User("Thiên Ân");
console.log(user.getName());
user.setName("Dương Thiên Ân");
console.log(user.getName());

// Câu 8
console.log("Câu 8:");
const products = [
    new Product("Keyboard", 80),
    new Product("Monitor", 250),
    new Product("Mouse", 120)
  ];
  console.log(filterProductsOver100(products));

//   Câu 9
console.log("Câu 9:");
const animal: { name: string; sound: () => void } = {
    name: "Dog",
    sound: () => console.log("Wof")
  };
  console.log(animal.name);
  animal.sound();

//   Câu 10
console.log("Câu 10:");
const account = new Account("Ân", 100000, "ACC001");
acc.deposit(500);
console.log("Owner:", account.owner, "Balance:", account.getBalance(), "No:", account.accountNumber);

// Câu 11
console.log("Câu 11:");
new Dog("Buddy").bark();
new Cat("Kitty").meow();

// Câu 12
console.log("Câu 12:");
new Bird().fly();
new Fish().swim();

// Câu 13
console.log("Câu 13:");
console.log("Square area:", new Square(4).area());
console.log("Circle area:", new Circle(3).area());