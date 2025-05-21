const accountId = 12345
let accountEmail = "satyam@microsoft.com"
var accountPassword = "54321"
accountCity = "Jaipur"
let accountState; // Output: undefined

/* 

accountId = 2 -> Not allowed

*/

accountEmail = "sj@ms.com"
accountPassword = "123321"
accountCity = "Bengaluru"

/*
Prefer not to use var to declare varaibles
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);