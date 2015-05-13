var accountStr = '{"firstname":"karan","lastname":"krishan"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj);
console.log(accountObj.firstname);
console.log(accountObj.lastname);

var profile = {"firstname":"Bharat","lastname":"christian"};
console.log(profile);
var profileStr = JSON.stringify(profile);
console.log(profileStr);