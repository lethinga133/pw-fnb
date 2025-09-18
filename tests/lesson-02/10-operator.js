const name = "Vân Lê"; //toán tử gán
console.log(name);

let age = 2; 
age += 20; 
console.log(age);

age-=20;
console.log(age);

age*=20;
console.log(age);

age /= 20;
console.log(age);

age %=3
console.log(age); //age = age % 3 ==> lấy phần dư


//Toán tử typeof trả về dữ liệu của biến cần kiểm tra
const pw1 = 100;
const pw2 = "Playwright Viet Nam";
const pw3 = true;
const pw4 = null;
const pw5 = undefined;

console.log(typeof(pw1)); // trả về number
console.log(typeof(pw2)); // trả về string
console.log(typeof(pw3)); // trả về boolean
console.log(typeof(pw4)); // trả về object
console.log(typeof(pw5)); // trả về undefined
console.log(typeof(pw6)); // trả về undefined