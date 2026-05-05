class Animal {
    name : string;
    species : string;
    sound : string;

    constructor(name : string, species: string , sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} bhai ${this.sound}`)
    }
}

const dog = new Animal("dog bhai", "dog" , "gew gew");
const cat = new Animal("dog cat", "cat" , "mew mew");

cat.makeSound()