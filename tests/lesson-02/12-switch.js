const dayInNumber = 9;

switch (dayInNumber) {
    case 1: 
        console.log("Sunday");
        break;
    case 2: 
        console.log("Mon");
        break;
    case 3:
        console.log("Tue");
        break; //nếu ko có break ==> thì sẽ chạy tiếp 
    case 4: 
        console.log("We");
        break;
    case 5: 
        console.log("Thur");
        break;
    case 6:
        console.log("Fri");
        break;
    case 7: 
        console.log("Sat");
        break;
    
    default:
        console.log("Invalid@@");        
}