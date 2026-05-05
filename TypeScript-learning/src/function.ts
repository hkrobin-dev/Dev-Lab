function normalAdd(num1 : number , num2: number):number {
    return num1 + num2;


} 

console.log(normalAdd(1,2))


const arrayFunc = (num1:number , num2 : number):number => num1 + num2 
console.log(arrayFunc(12,133))

 
const poorUser ={
     balance : 0,
     addBalance (value:number): number{
       return this.balance + value
     }

}

poorUser.addBalance(1)


const arr: number[] = [1,2,3];

const secure = arr.map((element :number):number=> element * element)