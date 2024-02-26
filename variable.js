const accountID = 13567
// let means memory me space declare ho gya (variable declare)
let accountEmail = "ds324@gmail.com"
var accountPassword = "23384"
accountCity = "Jaipur"
let accountState;

// accountID = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "35678"
accountCity = "Bengaluru"

console.log(accountID);

/*
Prefer not to use var
because of issue  in block scope and functional scope
 */

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
