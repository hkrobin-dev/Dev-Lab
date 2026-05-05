const arrNum:number[] = [2,4,5];
const arrStr:string[] = ["2",'4',"5"];


const arrMap : string[] = arrNum.map((num)=> num.toString())


console.log(arrMap)


type area = {
    [key in "height" | "width"] :string;
}

type ar ={}