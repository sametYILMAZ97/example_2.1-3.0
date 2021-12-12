let workers = [
    {firstName : "Samet", lastName: "YILMAZ"},
    {firstName : "Ali", lastName: "VELİ"},
    {firstName : "Ahmet", lastName: "MEHMET"}
];
  
let workersFullnames = workers.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(workersFullnames);
let stringWorkers = workersFullnames.toString();
document.getElementById("workersFullnames").innerHTML= stringWorkers;

// OBJECT PROTOTYPES
function Bosses(first, last, mail) {
    this.firstName = first;
    this.lastName = last;
    this.mail = mail;
    this.salary = 15000;
}

const firstBoss = new Bosses("Zeyno", "ZEYNOYE", "zeyno@gmail.com");
const secondBoss = new Bosses("Ali", "ALİYE", "aliye@gmail.com");

console.log(Bosses);
document.getElementById("firstboss").innerHTML = "Birinci patronun ismi: " + firstBoss.firstName + ", soyismi: " + firstBoss.lastName + ", mail adresi: " + firstBoss.mail;
document.getElementById("secondboss").innerHTML = "İkinci patronun ismi: " + secondBoss.firstName + ", soyismi: " + secondBoss.lastName + ", mail adresi: " + secondBoss.mail;
document.getElementById("firstSalary").innerHTML = "Birinci patronun aylık geliri: " + "#" + firstBoss.salary + "#";
document.getElementById("secondSalary").innerHTML = "İkinci patronun aylık geliri: " + "#" + secondBoss.salary + "#";
//CALL
/* The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object. */

/* Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır.
 Argümanlar fonksiyona tek tek gönderilir. (Örnek: test(obj,arg1,arg2,arg3))
*/


//APPLY
/* Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır.
 Argümanlar fonksiyona argüman listesi şeklinde gönderilir. (Örnek: test(obj,[arg1,arg2,arg3]))
*/

//SOME
/* some() checks if any array elements pass a test (provided as a function).

some() executes the function once for each array element:

If it returns true, some() returns true and stops.

If it returns false, some() returns false and stops.

some() does not execute the function for empty array elements.

some() does not change the original array. */

const payout = [4000, 4500];  //This array is for the workers paychecks.

function checkValue(x) {
    return x < document.getElementById("toCheck").value;    
}

function myFunction() {
    document.getElementById("checkValue").innerHTML = payout.some(checkValue);
}

//REDUCE
/* The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array. */

//== VS ===
let num5 = 5;
document.getElementById("doubleequal").innerHTML = (num5 == 5);
//== is for equal value
//=== is for equal value and equal type
document.getElementById("tribleequal").innerHTML = (num5 === 5);
document.getElementById("tribleequalfalse").innerHTML = (num5 === "5");

//TRY AND CATH
//The try statement lets you test a block of code for errors.

//The catch statement lets you handle the error.

//The throw statement lets you create custom errors.

//The finally statement lets you execute code, after try and catch, regardless of the result.
//https://www.w3schools.com/js/js_errors.asp

//Ve try catch arasında bir kodlama olmamalı denedim. Catch işlemi yapılmıyor.
try {
    adddlert("Try to cath me! :D");
  }
catch(err) {
    document.getElementById("catch").innerHTML = err.message;
  }

  //PROMISE  https://www.w3schools.com/js/js_promise.asp



//CLASSES https://www.w3schools.com/js/js_classes.asp
/* A JavaScript class is not an object.
It is a template for JavaScript objects.
The constructor method is called automatically when a new object is created.
If you do not define a constructor method, JavaScript will add an empty constructor method.
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}  */

class Phone{
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

const myPhone = new Phone("Samsung", 10);
document.getElementById("myPhone").innerHTML = myPhone.name + " " + myPhone.model;