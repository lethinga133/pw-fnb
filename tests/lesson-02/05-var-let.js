/* var: Function-scoped hoặc globally-scoped
// let: Block-scoped
//1. scope
 function example() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // 1 - var có thể truy cập
  console.log(b); // ReferenceError - let không thể truy cập
}

//2. Hoisting 
//var: Được hoisted và khởi tạo với undefined
console.log(a); // undefined (không lỗi)
var a = 5;

//let: Được hoisted nhưng không khởi tạo (Temporal Dead Zone)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
*/

/*3. Khai báo lại
//var: Cho phép khai báo lại
var name = "John1";
var name = "Jane1"; // OK
console.log(name);

//let: Không cho phép khai báo lại trong cùng scope
let name = "John2";
let name = "Jane2"; // SyntaxError: Identifier 'name' has already been declared

//4. Vòng lặp và Closures
//var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // In ra: 3, 3, 3
}
let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // In ra: 0, 1, 2
}


/* Nên dùng let: 
- Hầu hết các trường hợp - đây là lựa chọn mặc định
- Khi cần block scope
- Trong vòng lặp
- Khi muốn tránh bugs do hoisting
- Code hiện đại (ES6+)
Tránh dùng var:
- Trong code mới
- Khi không cần function scope cụ thể
- Để tránh các vấn đề về scope không mong muốn
Nên dùng var: 
- Code legacy cần maintain
- Khi cần function scope cụ thể
- Polyfill cho môi trường cũ
==> 
Sử dụng const cho giá trị không thay đổi
Sử dụng let cho giá trị có thể thay đổi
Tránh var trong code mới
<<let là lựa chọn hiện đại, an toàn hơn
var chỉ dùng khi cần thiết hoặc maintain code cũ>>
*/