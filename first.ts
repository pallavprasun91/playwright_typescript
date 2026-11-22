let myName="Pallav Prasun"
console.log(`My Name is: ${myName}`)

let myNameFn=function (num1:number,num2:number=10){
    let sum=num1+num2;
    return sum;
}

console.log(myNameFn(4))
let revName='';
for(let ch of myName)
{
revName=ch+revName
}
console.log(revName);

let sum=(num1:number,num2:number)=>{
return num1+num2;
};

console.log(sum(3,6));

let numArrow=(num3:number)=>console.log(`The number is ${num3}`);

numArrow(3);

