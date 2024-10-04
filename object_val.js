let clas = {
    boys: 25,
    girls: 20,
    total: [30, 20],
    marks: {
        st1: "sai",
        rank: 1,
    },
    pincode: 504303
 }


// object key

let values = Object.keys(clas);
console.log(values);
let x=(Object.keys(clas).includes("boys"))
if(x==true){
    console.log("valid")
    let add={staf:10}
    console.log(Object.assign(clas,add))
}
else{
    console.log("Not valid")
 }