const accountId = 14453;
let accountEmail = "ankit@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

console.log(accountId);
accountEmail = "ankit@outlool.com";
accountPassword = "123456789";
accountCity = "Bangluru";

/*
prefer not to user var 
because of issue in block scope  and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);


