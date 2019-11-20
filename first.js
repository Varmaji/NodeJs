
MyFunc();

function MyFunc()
{
    console.log("Hello function");
}

var fruits=["apple","mango","orange"];

for( let index=0;index<fruits.length;index++)
{
console.log(fruits[index]);
}

//number array
let numArr=new Array(10);

for (let index = 0; index < numArr.length; index++) {
     numArr[index]=index+1;
}
//print the array
numArr.forEach((v)=>console.log(v));

//Executing the filter..Map and reduce function

let evenNos=numArr.filter(v=>v%2==0);
console.log(`EvenNumbers: ${evenNos}`);

let mappedNos=evenNos.map(v=>v+10);

let reduce=mappedNos.reduce((sum,v)=>sum+=v);

console.log(`Mapped Nos:${mappedNos}`);
console.log(`Reduced Value:${reduce}`);

//constructor Functions
function MyClass(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;
}

var Name=new MyClass("Ravivarma","Yaganti");
console.log(Name);
console.log(`firstName:${Name.firstName} ,lastname:${Name.lastName}`);

MyClass.prototype={
    FirstName:function(){return this.firstName;},
    LastName:function(value){return this.lastName=value;},
    FullName:function(){return this.firstName +" "+ this.lastName;}

}
var Name1=new MyClass("Varma","ji");

console.log(Name1.firstName);   
console.log(Name1.FullName());
