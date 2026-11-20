const student ={

   fullName : "Om Shendkar",
   age :20,
   cgpa : 8.3,
   isPass :true,

};
//Access the key value of object
console.log(student.age);


// update the value of key in object
student ["age"]= student["age"]+1;
console.log(student["age"])