//     sigleton Object

const tinder= new Object();

tinder.id=123
tinder.name="hamza gul"
tinder.mailadd="hamza.gmailcom"

//console.log(tinder);

/***************** new example nesting *************/
const regular_user= {
    email: "someone@mail.com",
    fullname: {
        firstname: "hamza ",
        lastname: "gul"
            },
    add: "abbottabad" 
}
//console.log(regular_user.fullname.firstname);


/********************combining two objects****************/

const obj1 = {1: "g",2:"h"}
const obj2 = {3:"c", 4:"d"}
const obj4= {5:"e", 6:"f"}

//const obj3={obj1,obj2}


// the curly braces {} in object.assign({}) are for safety that it will or combine the string in targeted string all vlues will be stored in {} otherwise the values will be stored in obj1 */

//const obj3= Object.assign({},obj1,obj2,obj4)


//most common way that is used to combine the objects (spread)

const obj3={...obj1,...obj2,...obj4}

console.log(obj3);
console.log(Object.keys(obj4));







