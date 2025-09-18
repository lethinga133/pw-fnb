//thêm thuộc tính mới vào object
let bike = {
 make: 'Yamaha', //thuộc tính
 model: 'YZF-R3' //thuộc tính
};

bike.color = 'Blue'; //thêm thuộc tính mới - blue vào object 
bike['price new'] = 100;

console.log(bike);


let employee = {
 name: 'Cấn Thị Thu Hoài',
 age: 37,
 department: 'Test Man',
 Hair: 'Thẳng'
};
delete employee.age;
console.log(employee);
