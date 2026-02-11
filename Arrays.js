const myarr=[0,1,2,3,4,5]
onsole.log("original array : ",myarr);

const myarr2=new Array("ali","ahmed","awais")
console.log(myarr2);

myarr.push(5)

//                push add a member on last and pop remove the member from last of array

console.log(myarr);
console.log("now pop");
myarr.pop();
console.log(myarr);


//          unshift add an element at the first and the shift remove element from the first/0th index
 myarr.unshift(8)
 console.log(myarr);
 myarr.shift()
 console.log(myarr);
 console.log(typeof myarr);
 

 //            join
 const newArr= myarr.join()
 console.log(newArr);
 console.log(typeof newArr);

//            slice and splice
const myn1=myarr.slice(1,3)
console.log("slice : ", myn1);
console.log("orginal : " ,myarr);
// slice prints number from starting index to 1-ending index


//         splice  
//splice includes the ending index and manipulate the original array
const myn2=myarr.splice(1,3)
console.log("splice : ", myn2);
console.log("orginal : " ,myarr);

const secA= ["ali", "ahmed", "usman"]
const secB= ["hamza", "syam", "hammad"]
//secA.push(secB)
//it push the whole array as a single element on 3rd index

console.log(secA);

//           concat

const allheros= secA.concat(secB)
console.log(allheros);

// spread operator can also be used if more we have to add more then 2 values






 
 

 

