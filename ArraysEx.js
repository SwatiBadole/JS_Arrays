
//Arrays
let origDogs = ["puppy","kinniii","Tommy"];
console.log("AllDogs are :"+origDogs); // output:AllDogs are :puppy,kinniii,Tommy

let cats = new Array("Americal curl", "bengal")
console.log("cats are:"+cats); //output:cats are:Americal curl,bengal

let birds = new Array("Falcons","Ducks","Faamlingoes");
console.log("Birds are :"+birds); //output:Birds are :Falcons,Ducks,Faamlingoes

//Array Copy element
let sliceDogs= origDogs.slice(1,2);
console.log("sliceDogs:" + sliceDogs); //output sliceDogs:kinniii

let copyDogs = [...origDogs];
console.log("copyDogs : "+ copyDogs); //output:copyDogs puppy,kinniii,Tommy


let dogs = origDogs.slice(0);
console.log("dogs:"+dogs); //Output:dogs:puppy,kinniii,Tommy

//Stack Function (LIFO) push and pop

let pushDog =dogs.push("golden retriever");
console.log("push the dog in the array:" + pushDog); //output:push the dog in the array:4 golden retriever

let popDog=dogs.pop();
dogs[dogs.length] = "Poodle"
console.log(popDog);

//Add and remove from First 
let addFirst = dogs.unshift("Golden retriver");
console.log(addFirst)                             //output:5
let ShiftDog =dogs.shift();
console.log(ShiftDog);                             //5 Golden retriver


//Atomatic add and remove element 
//dogs.splice(2,1, "pug" ,"Boxer");


//Array Function - concat,slice and short
let animals = dogs.concat(cats,birds);
console.log(animals);
let newAnimal = [...dogs, ...cats, ...birds].toString();
console.log(newAnimal);

/*output:[
  'puppy',
  'kinniii',
  'pug',
  'Boxer',
  'Poodle',
  'Americal curl',
  'bengal',
  'Falcons',
  'Ducks',
  'Faamlingoes'
]
puppy,kinniii,pug,Boxer,Poodle,Americal curl,bengal,Falcons,Ducks,Faamlingoes
*/
//let sortDog =dogs.slice(0).short();
//console.log(sortDog);


function scanArray([first ,second]) {
    console.log("scan:"+first+ "" +second);}
    scanArray(animals);

    let joinAnimals = animals.join(" ");
    let allAnimals = "";
    for(let animal of animals) allAnimals += animal + "" ;
    console.log("Animals :" +allAnimals);


