
// var mark;
// var grade;
// grade = "Not Yet Graded";

// mark = prompt( "Please input the mark(%)" );
// mark = parseInt( mark, 10 ); 

// if(mark => 100 && mark <0 )

// console.log("Invalid mark");

// if( mark >= 70 && mark<=100)
// {
// grade = "First Class";
// }
// else if( mark > 60 && mark<=69)
// {
// grade = "Upper Second";
// }
// else if( mark > 50 && mark<=59 )
{
//grade = "Lower Second";
// }
// else if( mark > 40 && mark<=59)
// {
// grade = "Third Class";
// }

// else if( mark > 0 && mark <=49)

// {
    
//grade = "Chodanir powa tui Fail";
// }

// else
// {
// console.log( "Invalid mark, outside range 0-100" );
// }
// {

// console.log( "Mark: " + mark + "% - Grade: " + grade );

// }
// {

// console.log("invalid score.please enter a number between 0 and 100");

}
// digital speling 

// 0-zero,.....1 one,....2 two,....3 three, 4four,....5 five,...6 six,.....7 seven,....8 eight,...9 nine, 10-not a valid digit,
 
//var digit=prompt("Enter any digit :");

//if(digit == 0)
    //console.log("Zero");
//else if(digit == 1)
    //console.log("one");
//else if(digit == 2)
    //console.log("two");
//else if(digit == 3)
    //console.log("three");
//else if(digit == 4)
    //console.log("four");
//else if(digit == 5)
   // console.log("five");
//else if(digit == 6)
   // console.log("six");
//else if(digit == 7)
    //console.log("seven");
//else if(digit == 8)
    //console.log("eight");
//else if(digit == 9)
    //console.log("nine");
//else
//console.log("Not a digit")


    //var sum =0;

//for(var x = 1; x <= 100; x = x + 1 ){

    //sum = sum + x;
//}

//document.write(sum);

// tak:6 while loop useing system ???


//var i =1;
//var sum =0;
//while (i <= 10){

//sum = sum + i;
//i = i + 1;


//}
//document.write(sum);
//document.write("<h1> end</h1>");


// task: 6 write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100 

//  var i =1;
 //var sum = 0;

 //while (i <=1000)
 //{
   //if (i % 3 == 0 && i % 5 == 0){
    //document.write(" " + i);
    //sum = sum + i;
   //}
    //i =i + 1;
 //}
 //document.write(" sum = " + sum);
 //document.write("<h1> end </h1>");

// do while loop er bebohar using with do while loop 

//var i =1; // inialize 
//do{
    //document.write(" " + i); //this one body
    //i = i+1; // this one update part 
//}while(i <=40); // this is condatiton 

// this ios ternary condition 

//var number = Number(prompt("Enter a number"));

//var result= number >0 ? "positive" : number <0 ? "Negative" : "zero";
  //console.log(result) 
  
  
  //creating a function

//function sqaure(num) {

    
    //var result = num * num;
    //document.write("Result = " + result + "<br>");


    
    
//}
//calling a function

//sqaure(6);
//sqaure(5);
//sqaure(7);
//sqaure(9);


//Addition function

//function addition(x,y) {

    
    //var result = x + y;
    //document.write("sum = " + result + "<br>");
//}

    
//sub function
//function subtraction(x,y) {

    
    //var result = x - y;
    //document.write("sub = " + result + "<br>");
//}

//addition ( 10,20);
//subtraction(50,30);

/*const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}
function deleteLast(){
    
    const display =document.getElementById("display");

    display.value=display.value.slice(0, -1);
}

function clearDisplay(){

    display.value = "";

}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(ERROR)
    {
        display.value = "ERROR";
    }
   

}
/*function highestRunScorer(playersInfo) {
    let Scorer = playersInfo[0][0];
    let tScore = playersInfo[0][1];
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
  
    for (var x = 1; x < playersInfo.length; x++) {
      if (highestScore < playersInfo[x][1]) {
        highestScore = playersInfo[x][1];
        highestScorer = playersInfo[x][0];
      }
    }
  
    return highestScorer;
  }
  
  var playersInfo = [
    ["Noman", 95],
    ["Rashid", 25],
    ["sayem", 125],
    ["hamja lullo", 45],
    ["lu", 105],
  ];
  let x = highestRunScorer(playersInfo);
  console.log(x);
  
  var name = highestRunScorer(playersInfo);
  
  console.log(name);*/



  // student detilas 
  // how to create an object 
  // how to print the value of an object   

  /*var name = "md ayanul islam ayan";
   var age = 24;
   var cgpa = 3.26;
   var lang = ["bangali","hindi","English"];

   console.log(age);

   var student1={

    name : "md aynul islam ayan",

    age : 24,
    cgpa : 3.26,
    lang : ["bangali","hindi","English"]


   }

   console.log(student1.name);

   var student2={

    name : "Rashid ahmed",

    age : 17,
    cgpa : 3.81,
    lang : ["bangali","hindi","English"]


   }
   console.log (student2.lang);

   var student3={

    name : "s.m syem bin morsed",

    age : 26,
    cgpa : 2.86,
    lang : ["bangali","hindi","English"]


   }
   console.log(student3.cgpa);

   var student4={

    name : "Abu hamja ",

    age : 22,
    cgpa : 3.49,
    lang : ["bangali","hindi","English"]


   }
   console.log(student4.name);

   var student5={

    name : "md.Nisht",

    age : 23,
    cgpa : 3.29,
    lang : ["bangali","hindi","English"]


   }
   console.log(student5.age);

   var student6={

    name : "nowshin jahan busra",

    age : 19,
    cgpa : 3.55,
    lang : ["bangali","hindi","English"]


   }
   console.log(student6.name);*/

   



   // Adding a constructor

   /*function student(name,age,cgpa,lang){

    this.name = name;
    this.age = age;
    this.cgpa =cgpa;
    this.lang = lang;


   }

   var student1 = new student( "md.Noman",24,3.26,["bangali","hindi","English"]);
   var student2 = new student("md.Rashid",22,3.81,["bangali","hindi","English"]);
   var student3 = new student("md.Alif",23,3.49,["bangali","hindi","English"]);
   var student4 = new student("md.syem",26,2.86,["bangali","hindi","English"]);

   /*console.log(student1.name);
   console.log(student1.age);
   console.log(student1.cgpa);
   console.log(student1.lang);

   console.log(student2.name);
   console.log(student2.age);
   console.log(student2.cgpa);
   console.log(student2.lang);

   console.log(student3.name);
   console.log(student3.age);
   console.log(student3.cgpa);
   console.log(student3.lang);

   console.log(student4.name);
   console.log(student4.age);
   console.log(student4.cgpa);
   console.log(student4.lang);*/


   // Adding function inside a construct

  /* function student(name,age,cgpa,lang){

    this.name = name;
    this.age = age;
    this.cgpa =cgpa;
    this.lang = lang;

    this.display = function (){

            console.log(this.name);
            console.log(this.age);
            console.log(this.cgpa);
            console.log(this.lang);

    }

   }
   var student1 = new student( "md.Noman",24,3.26,["bangali","hindi","English"]);
   var student2 = new student("md.Rashid",22,3.81,["bangali","hindi","English"]);
   var student3 = new student("md.Alif",23,3.49,["bangali","hindi","English"]);
   var student4 = new student("md.syem",26,2.86,["bangali","hindi","English"]);

   student1.display();
   student2.display();
   student3.display();
   student4.display();*/

   