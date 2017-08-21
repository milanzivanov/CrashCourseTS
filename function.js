function mySum(num1, num2) {
    return num1 + num2;
}
console.log(mySum(10, 25));
var mySum2 = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum2("4", 17));
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
// console.log(getName("Milan"," Zivanov"));
console.log(getName("Milan"));
function myVoid1() {
    return;
}
