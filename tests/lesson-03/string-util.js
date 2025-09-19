// trim()
let str = "    JavaScript is awesome!    ";
str = str.trim(); 
console.log(str); 

// toLowerCase() và toUpperCase()
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//include()
console.log(str.includes("awesome")); // Kết quả: true
console.log(str.includes("Awesome")); 

// replace()
str = str.replace("awesome", "fun");
console.log(str); // Kết quả: "javascript is fun!"

// split() : chia chuỗi thành các array 
let words = str.split(" ");
console.log(words); // Kết quả: ["JavaScript", "is", "awesome!"]

const emails = "emailA@gmail.com,emailB@gmail.com";
let newemail = emails.split(",");
console.log(newemail);

// substring() trả về 1 chuỗi từ index đc chỉ định đén cuối chuỗi
console.log(str.substring(0, 5)); //
console.log(str.substring(6)); // 

// indexOf() trả về vị trí xuất hiện đầu tiên của chuỗi
console.log(str.indexOf("World")); //
console.log(str.indexOf("JavaScript")); // Kết quả: -1

let str2 = "HwELLO wORLD world";
console.log(str2.indexOf("w")); // đưa ra vtri index đầu tiên, vào nếu ko tìm đ,c trả về -1

