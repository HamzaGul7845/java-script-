//singleton is form by constructor:  Object.create


const mysym=Symbol("key1")

const JSuser ={
    name : "hamza gul",
    age: 23,
    [mysym]: "mykey1",
    location: "Abbottabad",
    email : "hamza@gmail.com",
    isloggedin : false,

}

// console.log(JSuser["email"]);
// console.log(JSuser["age"]);
// console.log(JSuser["location"]);
// console.log(JSuser[mysym]); 

// changing values it can be done by [] and by dot like JSuser.age 

//JSuser["age"]=34
//console.log(JSuser["age"]);


//freezing an object: 

//Object.freeze(JSuser)

//JSuser.age=55;
//console.log("after freeze : ", JSuser["age"]);



/**********************  greeting functions.*************************/
JSuser.greeting= function()
{
    console.log("hello js user")
}

JSuser.greetingtwo= function()
{
    console.log(`hello js user ${this.name}`)
}
console.log(JSuser.greetingtwo())
console.log(JSuser.greeting())



