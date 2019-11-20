let num:number;//[optional initial value]
num=10;
console.log(num);

function show():void{
    console.log('show() called');
    return;
}

show();
function fnWithArgs(id:number,name:string):string{
    return `ID:${id},Name:${name}`;
}
console.log(fnWithArgs(10,'Canarys'));

let arr=new Array(10);
arr[11]='welcome'

console.log(arr[11]);

let numArr:Array<number>=new Array<number>(10);
numArr[0]=parseInt("10");
console.log(numArr[0]);

//spread operators
let fruits=["apple","mango","Orange"];
//let a =fruits[0];
//let b=fruits[1];
let[a,b,c]=[...fruits];
console.log(a,b,c);

//Rest Operator
function fnWithVarArgs(...args)
{
    console.log(args.length);
}
fnWithVarArgs();
fnWithVarArgs(1);
fnWithVarArgs(1,2,3);
fnWithVarArgs(1,2,4,4,3,4,3,2,3,2,3);
let[...args]=[1,2,3,4,4,3,,4,3,4,3,2,4,3,3];//REST OPERATOR
