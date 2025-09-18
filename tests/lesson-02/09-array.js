let numberArr = [1, 20.5, -300, 4]; //Kiểu number
const strArr = ['Cấn Hoài', 'Lê Vân', 'Đặng Linh']; // kiểu string
var mixedArr = ['Cấn Hoài', 10, true, null, {id: 1, name:'Lê Vân', age: 22}]; 
console.log(numberArr);
console.log(strArr);
console.log(mixedArr);


// // Lấy độ dài của mảng
const arr1 = [1, 2, 1, 2];
console.log(arr1.length);

//
const arr2 = [20, 50, 30, 40]; //
for (let i = 0; i< arr2.length; i++) { 
    console.log(arr2[i]);
}


//truy suất từng phần tử của mạng
const fnbtest = [20, 50, 30, 40];
console.log(fnbtest[0]);
console.log(fnbtest[1]);
console.log(fnbtest[2]);
console.log(fnbtest[3]);

//thêm phần tử vào đầu mảng
const arr21 = [20, 50];
arr21.unshift(10);
console.log(arr21);

//thêm vào cuối mảng
const arr22 = [20, 50];
arr22.push(10);
console.log(arr22);

//xóa phần tử khỏi đầu, dùng hàm (shift) hoặc cuối (pop) mảng 
const arr23 = [20, 50, 10];
const deleted23 = arr23.shift();
console.log(arr23);
console.log(deleted23);

const arr24 = [20, 50, 10];
const deleted24 = arr24.pop();
console.log(arr24);
console.log(deleted24);
