function mySum(num1:number, num2:number) {
    return num1 + num2;
}

console.log(mySum(10, 25));

let mySum2 = function(num1:any, num2:any):number {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1)
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

console.log(mySum2("4",17));

function getName(firstName:string, lastName?:string):string {
    if(lastName === undefined) {
        return firstName;
    }
    return firstName+" "+lastName;
}

// console.log(getName("Milan"," Zivanov"));
console.log(getName("Milan"));

function myVoid1(): void {
    return;
}