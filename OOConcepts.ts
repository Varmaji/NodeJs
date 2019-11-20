class EmployeeClass{
    //Fields of the class
    private empId:number;
    private empName:string;
    private designation:string;

    constructor(
        id:number,
        name:string,
        desig:string){
                this.empId=id;this.empName=name;this.designation=desig;
        }
     details(){
        return 'ID:'+this.empId+',Name:'+this.empName+',Designation:' +this.designation ; 
     }
}

var obj=new EmployeeClass(10,'Canarys','Bengaluru');
console.log(obj.details());


//Inheritance
class BaseClass
{
    private privField:number;
    protected protField:number;
    public pubField:number;

    constructor()
    {
        this.privField=999;this.protField=888,this.pubField=777;
        console.log(`BaseClass.Constructor() called.`);
    }

    show()
    {
        console.log(`Priv:${this.privField},Prot:${this.protField},Publ:${this.pubField}`);

    }
}

class DerivedClass extends BaseClass{
    constructor(){
        //All derived class constructors must call the base class ctor first using 'super'
        super();//Invoke the base class constructor
        console.log("Derived class.constructor() called");

    }
    

    show()
    {
        console.log("show method is called");
        //console.log("Private field:"+this.privField);
        console.log("protected field:"+this.protField);
        console.log("Public field:"+this.pubField);
    }
    

    
   
}