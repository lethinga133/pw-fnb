// Class là một khái niệm quan trọng trong lập trình hướng đối tượng (OOP), được dùng
// để tạo ra các đối tượng (object).
// - Class là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng
// thuộc class đó sẽ có.

class Animal {
    name: string; // Khai báo thuộc tính
    constructor(name: string) {
    this.name = name;
}
    makeSound() {
        console.log("Generic animal sound");
    }
}

// constructor là một phương thức đặc biệt được gọi khi một đối tượng mới của class được
// tạo ra. Nó được sử dụng để khởi tạo các thuộc tính của đối tượng.



// Kế thừa
// Tính kế thừa: giúp tạo ra các class con từ class cha, giảm thiểu được việc lặp lại code và tăng
// tính linh hoạt trong code.

class Dog extends Animal {
breed: string;
constructor(name: string, breed: string) {
super(name); // Gọi constructor của lớp cha
this.breed = breed;
}
makeSound() {
console.log("Woof!"); // Ghi đè phương thức của lớp cha
}
wagTail() {
console.log("Wagging tail");
}
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Woof!
myDog.wagTail(); // Wagging tail
