//map: tạo ra 1 mảng mới dựa trên từng phần tử mảng gốc 
let numbers = [1,2,3,4];
let newNum = numbers.map(num => num*2) //num đại diện cho 1 phần từ mảng gốc, sau đó mỗi phần tử đó *2 của 1 phần tử ==> tạo mảng mới 
console.log(newNum); //[ 2, 4, 6, 8 ], 

//filter(): tọ 1 mảng mới chứa các phần tử thỏa mãn ddkien trong hàm
let newNum2 = numbers.filter(num => num%2===0);
console.log(newNum2);

//find() trae về gtri phần tử đầu tiên thỏa mãn ddkien, nếu ko 
let newNum3 = numbers.find(num => num%2===0);
console.log(newNum3);

// reduce()
// ● Khái niệm: Phương thức reduce() áp dụng một hàm lên từng phần tử của mảng (từ
// trái qua phải) để trả về một giá trị duy nhất.

let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum); // Kết quả: 10
//total: biến nhận giá trị duy nhất
//num: phần tử của mảng
//0 giá trị khởi tạo cho biến total

// some() 
// kiểm tra xem có ít nhất một phần tử trong mảng thỏa
// mãn điều kiện được chỉ định trong hàm callback. Trả về true nếu tìm thấy, ngược lại trả
// về false.

let numbers4 = [1, 2, 3, 4];
let hasEven = numbers4.some(num => num % 2 === 0);
console.log(hasEven); // Kết quả: true

// 6. every()
// ● Khái niệm: Phương thức every() kiểm tra xem tất cả các phần tử trong mảng có thỏa
// mãn điều kiện được chỉ định trong hàm callback hay không. Trả về true nếu tất cả đều
// thỏa mãn, ngược lại trả về false.

let numbers5 = [2, 4, 6, 8];
let allEven = numbers5.every(num => num % 2 === 0);
console.log(allEven); // Kết quả: true

// push() thêm một hoặc nhiều phần tử vào cuối mảng và
// trả về độ dài mới của mảng.
let numbers6 = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers6); // Kết quả: [1, 2, 3, 4, 5]

// shift()
// ● Khái niệm: Phương thức shift() loại bỏ phần tử đầu tiên của mảng và trả về phần
// tử bị loại bỏ. Phương thức này thay đổi độ dài của mảng**.**

let numbers7 = [1, 2, 3];
let firstElement = numbers7.shift();
console.log(firstElement); // Kết quả: 1
console.log(numbers7); // Kết quả: [2, 3]

// 9. sort()
// ● sắp xếp các phần tử của mảng theo thứ tự tăng
// dần hoặc theo hàm so sánh được cung cấp. Nó thay đổi mảng ban đầu.
// ● sort() mặc định: sắp xếp các phần tử của mảng như chuỗi theo thứ tự từ điển
// học Unicode (ASCII hoặc UTF-16). Điều này có nghĩa là mỗi phần tử sẽ được chuyển
// đổi thành chuỗi (nếu không phải là chuỗi) trước khi so sánh.

let numbers8 = [4, 2, 3, 1];
numbers.sort();
console.log(numbers8);