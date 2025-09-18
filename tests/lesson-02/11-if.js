//
const a = 6;

if (a > 5) {
    console.log("a lớn hơn 5");
}


//if else
    const a1 = 3;

if (a1 > 5) {
    console.log("a1 lớn hơn 5");
} else {
    console.log("a1 nhỏ hơn hoặc = 5");
}

//if else if

const score = 6.5 
// 0 ==> 5: yeu
// 5=> 7: TB
// 7 => 9: kha
//9=> 10: gioi

if (score>= 0 && score <=5) {
    console.log('Yếu');
} else if (score > 5 && score <=7 ) {
    console.log('TB');
}else if (score >7 && score<=9 ) {
    console.log('Kha');
}else  {
    console.log('Gioi');
}