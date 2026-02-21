// let age=21
// console.log(typeof age)

// let score=true
// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// let isloggedin=1
// console.log(isloggedin)
// console.log(typeof isloggedin)
// let Booleanvalue=Boolean(isloggedin)
// console.log(Booleanvalue)
// console.log(typeof Booleanvalue)

//******               ******************comparison***************** */
// console.log(2>1)
// let num= 1234231223212213434234134432423n
// console.log(typeof num)
//******            ***********************STRINGS********************/
// let name = "hamza gul"
// let age = 23
// console.log(`hello mu name is ${name} and my age is ${age}`);
// let fullname= String('hamza gul aa')
// console.log(fullname)

// console.log(fullname[8])
// console.log(fullname.length)
// console.log(fullname.charAt(2))
// console.log(fullname.trim())
//console.log(fullname.split(" "))
//can also add splitter limit to which the string will be splitted


//               **************NUM & MATHS******************/
//               generating random number btw 10-20
min=10;
max=20;
// console.log(Math.floor((Math.random()*10)+1)+min)

// *                  ************DATES ND TIME IN JS*************
let date=new Date()
 console.log(date.toLocaleString())

// self declared date
 let mycreatedDate= new Date(2003,11,28)
//  console.log(mycreatedDate.toDateString());
 

 let mytime= Date.now()
//  console.log(mytime);
//  console.log(mytime.getTime);
console.log(date.getMonth()+1);
console.log(`the time and date is ${date.toLocaleString('default', {
weekday: "short",

})}`);


 
 
