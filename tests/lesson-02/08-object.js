//Khai báo vs let/const
const student = {
    'id' : 1,
    'name': "Alex",
    'age' : 18
}
//ko dùng object
const sv1ID = 1;
const sv1Name = "Alex";
const sv1Age = 20;

const sv2ID = 2;
const sv2Name = "Nagi";
const sv2Age = 18;

const sv3ID = 3;
const sv3Name = "Lua";
const sv3Age = 19;

console.log(`- Thông tin SV1: ${sv1ID}, ${sv1Name}, ${sv1Age}`);
console.log(`- Thông tin SV1: ${sv2ID}, ${sv2Name}, ${sv2Age}`);
console.log(`- Thông tin SV1: ${sv3ID}, ${sv3Name}, ${sv3Age}`);

//dùng object
const sv1 = {
 "ID": 1,
 "name": "Alex",
 "age": 20
};
console.log(sv1.ID);
//hoặc dùng ngoặc vuông [“<key>”]:
console.log(sv1["name"]);
console.log(sv1.age);

const sv2 = {
 "ID": 2,
 "name": "Ngagi",
 "age": 18
};

const sv3 = {
 "ID": 3,
 "name": "Lua",
 "age": 19
};

console.log(`- Thông tin SV1 OOP: ${sv1.ID}, ${sv1.age}, ${sv1.name};`);
console.log(`- Thông tin SV2 OOP: ${sv2.ID}, ${sv2.age}, ${sv2.name};`);
console.log(`- Thông tin SV2 OOP: ${sv3.ID}, ${sv3.age}, ${sv3.name};`);

//objet lồng nhau
const student2 = {
 id: 1,
 name: "Alex",
 address: {
    province: "Ha Noi",
    isCapital: true,
    country: "Viet Nam"
 }
}

console.log(student2.address.province);
console.log(student2["address"].isCapital);
console.log(student2.address['country']);