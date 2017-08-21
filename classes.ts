console.log("Classes working!!!");

interface UserInterface {
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age:number;

    constructor (name: string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User created: "+this.name + ", "+"User age: "+this.age+", "+ "User email: "+this.email);
    }
    // method
    register() {
        console.log(this.name+" is now register");
    }

    payInvoice() {
        console.log(this.name+" paid invoice");
    }

}

class Member extends User {
    id:number;

    constructor(id:number,name:string,email:string, age:number) {
        super(name,email,age);
        this.id = id;
    }
    // method
    payInvoice() {
        super.payInvoice();
    }
}

//let john = new User("Milan Zivanov", "test@test.com", 34);

//john.register();

let mica: User = new Member(1, "Mica Smit", "mica@mica.com", 33);
mica.payInvoice();

