// let score = "33" 
// let score = "33abc" 
// let score = null; 
// let score = undefined; 
// let score = true;   

let score = "ankit";  
console.log(typeof (score)); // as a method

let valueInNumber = Number(score); 
console.log(typeof valueInNumber); 
console.log(valueInNumber);


// "33" => 33 
//"33abc" => NaN  (not a number)
// true => 1 ; false => 0;

let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);

// 1 => true ; 0=> false
// "" => false ; "ankit" => true