var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(id, name, desig) {
        this.empId = id;
        this.empName = name;
        this.designation = desig;
    }
    EmployeeClass.prototype.details = function () {
        return 'ID:' + this.empId + ',Name:' + this.empName + ',Designation:' + this.designation;
    };
    return EmployeeClass;
}());
var obj = new EmployeeClass(10, 'Canarys', 'Bengaluru');
console.log(obj.details());
//Inheritance
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this.privField = 999;
        this.protField = 888, this.pubField = 777;
        console.log("BaseClass.Constructor() called.");
    }
    BaseClass.prototype.show = function () {
        console.log("Priv:" + this.privField + ",Prot:" + this.protField + ",Publ:" + this.pubField);
    };
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        var _this = 
        //All derived class constructors must call the base class ctor first using 'super'
        _super.call(this) || this;
        console.log("Derived class.constructor() called");
        return _this;
    }
    DerivedClass.prototype.show = function () {
        console.log("show method is called");
        console.log("protected field:" + this.protField);
        console.log("Public field:" + this.pubField);
    };
    return DerivedClass;
}(BaseClass));
