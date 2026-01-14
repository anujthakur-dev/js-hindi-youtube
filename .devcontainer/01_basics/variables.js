const accountId = 14780
let accountEmail = "anuj4299@gmail.com"
var accountPassword = "1234"
let accountState;
/*prefer not use var because of issue in functional and block scope*/

accountEmail = "anuj@gmail.com"
accountPassword = "2345"
console.table([accountId,accountEmail,accountPassword,accountState])