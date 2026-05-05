// const createArrayWithString = (value: string)=>[value];


// const createArrayWithNumber  = (value: string)=>[value];
// const createArrayWithObj  = (value: {id:number,name:string})=>{return[value]};


const createArrayWithGeneric = <T>(value: T) => {
    { return [value] }
}

const arrayString = createArrayWithGeneric("apple")

const arrayNumber = createArrayWithGeneric(2333)


const arraywithObj = createArrayWithGeneric({
    id: 123,
    name: "name Level "
})


// tuple 



const createArrayWithTupleGeneric = <X, Y>(params1: X, params2: Y) => [params1, params2]

const res1 = createArrayWithTupleGeneric("hk",true);

// const res2 = createArrayWithTupleGeneric(222,{id:123,true})



const addStudent = <T> (studestInfo: T)=>{
    return {
    course: "next Level",
    ...studestInfo
    }
}


const studest1 = {
    id:123,
    name:"jk",
    pen: true
}

const studest2 ={
    watch: true,
    week:false,
    about:{
        name:"hk",
        id:"123",

    }
}

const result = addStudent(studest1)

console.log(result)