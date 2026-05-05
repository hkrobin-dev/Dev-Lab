type student = { id: number, name: string }

const addStudent = <T extends student>(studestInfo: T) => {
    return {
        course: "next Level";
        ...studestInfo
    }
}


const studest1 = {
    id: 123,
    name: "jk",
    pen: true
}

const studest2 = {
    watch: true,
    week: false,
    about: {
        name: "hk",
        id: "123",

    }

}
const studest3 = {
    watch: true,
    id:122,
    name:"hk "

}

const result = addStudent(studest3)

console.log(result) 