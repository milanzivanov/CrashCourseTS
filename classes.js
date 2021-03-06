var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Classes working!!!");
var User = (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: " + this.name + ", " + "User age: " + this.age + ", " + "User email: " + this.email);
    }
    // method
    User.prototype.register = function () {
        console.log(this.name + " is now register");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    // method
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
//let john = new User("Milan Zivanov", "test@test.com", 34);
//john.register();
var mica = new Member(1, "Mica Smit", "mica@mica.com", 33);
mica.payInvoice();
