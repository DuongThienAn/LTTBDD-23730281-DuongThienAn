import { Account, AirConditioner, AnimalPolymorphism, BankAccount, BikeVehicle, Bird, Book, Box, Car, CarMovable, CarVehicle, CardPayment, CashPayment, Cat, CatPolymorphism, CatProtected, Circle, Developer, Dog, DogPolymorphism, DogProtected, Fan, Fish, Library, Logger, Manager, MathUtil, Order, Person, Product, Rectangle, Repository, Robot, School, ShapeStatic, Square, Stack, Student, Teacher, User, filterProductsOver100 } from "./baitap";

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

// Câu 14
console.log("Câu 14:");
new Manager("Manager", 2000).manage();
new Developer("Developer", 1800).code();

// Câu 15
console.log("Câu 15:");
const library = new Library();
library.addBook(new Book("TypeScript Basics", "Author", 2026));
library.addUser(new User("User"));
console.log("Books:", library.getBooks());
console.log("Users:", library.getUsers());

console.log("Câu 16:");
const box = new Box<number>(111);
console.log("Box value:", box.getValue());

console.log("Câu 17:");
Logger.getInstance().log("Hello!");

// Câu 18
console.log("Câu 18: ");
console.log(MathUtil.add(1, 99));
console.log(MathUtil.subtract(10, 7));
console.log(MathUtil.multiply(5, 10));
console.log(MathUtil.divide(9, 3));

// Câu 19
console.log("Câu 19: ");
const animals: AnimalPolymorphism[] = [
  new DogPolymorphism(),
  new CatPolymorphism()
];
animals.forEach(a => a.makeSound());

console.log("Câu 20:");
new CarVehicle().drive();
new BikeVehicle().drive();

// Câu 21
console.log("Câu 21:");
const repo = new Repository<Product>();
repo.add(new Product("Laptop", 1000));
repo.add(new Product("Phone", 700));
console.log(repo.getAll());

// Câu 22
console.log("Câu 22:");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Is empty:", stack.isEmpty());

// Câu 23
console.log("Câu 23:");
new CashPayment().pay(600);
new CardPayment().pay(800);

// Câu 24
console.log("Câu 24:");
new Fan().turnOn();
new AirConditioner().turnOn();

// Câu 25
console.log("Câu 25:");
ShapeStatic.describe();

// Câu 26
console.log("Câu 26: ");
const order = new Order([
  new Product("Product A", 100),
  new Product("Product B", 250)
]);
order.addProduct(new Product("Product C", 50));
console.log("Total:", order.totalPrice());

// Câu 27
console.log("Câu 27: ");
new Teacher("Nguyen Van A", 35, "TypeScript").introduce();

// Cau 28
console.log("Câu 28: ");
new DogProtected("Doggy").playSound();
new CatProtected("Mimi").playSound();

// Câu 29
console.log("Câu 29: ");
new CarMovable().move();
new Robot().move();

// Câu 30
console.log("Câu 30:");
const school = new School(
  [new Student("Student 1", 20, 8), new Student("Student 2", 21, 9)],
  [new Teacher("Teacher 1", 35, "Programming")]
);
school.displayInfo();