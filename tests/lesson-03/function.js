//Khai báo 1 function sayHello 
function sayhello() {
    console.log("Hello");
}
//sử dụng func - thực hiện 
sayhello(); 

// Gọi nhiều lần
sayhello(); 
sayhello(); 


//chạy file: node tests\lesson-03\function.js


//Tái sử dụng:Ycau: in 2 lần nội dung: 1-> 10, Hello
//ko sdung function
for (let i=1; i<=10; i++) {
    console.log(i);
}
console.log("Hello1");

for (let i=1; i<=10; i++) {
    console.log(i);
}
console.log("Hello1");

//sử dụng function
function printNum() {
    for (let i=1; i<=10; i++) {
    console.log(i);
}
}
printNum();
console.log("Hello2");
printNum();
console.log("Hello2");

//Parameter
//Ex: in 3 lần số 
//lần 1: 1 đến 5 -lần 2: từ 1 đến 10 - lần 3: từ 1 đến 15
//==>gọi hàm truyền tham số mong muốn

function printNum(n) {
    for (let i=1; i <=n; i++) {
        console.log(i);
    }
}
printNum(5);
printNum(10);
printNum(15);

//return value, getMax (lấy giá trị lớn nhất)
function getMax(a,b) {
    console.log("Trước return ==> nên in đc , ko thoát");
    if (a >b) {
        return a;
    }

    return b;
    console.log("Thoát nhá"); ////lưu ý, hàm trả về gtri , khi return ==> thoát ra khỏi hàm luôn ==> nên sẽ ko in đc console này 
}

const max =getMax(15,20); //expect = 15
console.log(max);

