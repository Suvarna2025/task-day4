//1. Print odd numbers in an array
//anonymous  :  

var nos=[8,9,12,3];
function podd(numbers){
const odds=numbers.filter((num)=>num%2===1);
return odds;
}
console.log(podd(nos));
      
         

//IIFE :      

(function(numbers){
    const odds=numbers.filter((num)=>num%2===1);
    console.log(odds);
    }([12,3,4,5]))
    
      
             
//Arrow Function  
  oddNumbers = (numbers)=>{
    const odds=numbers.filter((num)=>num%2===1);
   return odds;
    }
console.log(oddNumbers([7,9,11,2,4]))
    
   //2.Convert all the strings to title caps in a string array
   
 //anonymous :  
 
 var a=["This IS JavaScript program"];
 function titlecase(str){
   var res= str.toString();
  var data = res.toLowerCase().split(" ");
                    for (var i = 0; i <data.length; i++) {
                      data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1); 
                    } 
                    return data.join(' ');
                  }
                  console.log(titlecase([a]));
//IIFE :
 function ticase(st){
           var rest=st.toString();
            var dtr = rest.toLowerCase().split(" ");
           for (var i = 0; i < st.length; i++) {
              dtr[i] = dtr[i].charAt(0).toUpperCase() + dtr[i].slice(1); 
                    } 
                 return dtr.join(' ');
                  }
                  console.log(ticase(["tHis Is JaVaScript"]));
 //Arrow Function :

 var b=["My nAme is suVARna"];
  tCase = (sri) => {
                   var rt= sri.toString();
                    var dt = rt.toLowerCase().split(" ");
                    for (var i = 0; i < sri.length; i++) {
                      dt[i] = dt[i].charAt(0).toUpperCase() + dt[i].slice(1); 
                    } 
                    return dt.join(' ');
                  }  
                  console.log(tcase([b]));
                          

//3.Sum of all numbers in an array 
//anonymous  : 


var sum = 0;
function add(abc){ 
                  for(var i = 0 ; i< abc.length ; i++){
                     sum = sum + abc[i];
                   }
                   return sum;
                   
                  }
                  console.log(add([11,22]));
                
            
//IIFE :   

var sum2=0;
function addi(arry){
                  for(var i = 0 ; i< arry.length ; i++){
                     sum2 = sum2 + arry[i];
                   }
                   return sum2;
             }
             console.log(addi([1,2,3,4]));
//Arrow:  

 var d=[33,4,5,66];
   su = (array)=>{
             var sum3 = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum3 = sum3 + array[i];
                   }
                   return sum3;
                   }
                   console.log(su([d]));

                   

//   4)Return all the prime numbers in an array
   // Anonymous Function:
               
   var a = [5, 9, 63, 29, 35, 6, 55, 23]
   var prime = [];
   
   function isPrime(item) {
       var identifier = item / 2;
         for (var j = 2; j <= identifier; j++) {
          if ((item % j) == 0) { // modulous
           return false;
          } 
        }
        return true;
   }
   for (var index = 0; index < a.length; index++) {
     if (isPrime(a[index])) {
         prime.push(a[index])
     }
   }
   
   console.log(prime);
                  
   //IIFE 
                   (  
                   function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])
    //Arrow Function :
    
    var a = [5, 9, 63, 29, 35, 6, 55, 23]
    var prime = [];
    
     isPrime=(item)=> {
        var identifier = item / 2;
          for (var j = 2; j <= identifier; j++) {
           if ((item % j) == 0) { // modulous
            return false;
           } 
         }
         return true;
    }
    for (var index = 0; index < a.length; index++) {
      if (isPrime(a[index])) {
          prime.push(a[index])
      }
    }
    
    console.log(prime);
                  
/*8//5)  Return all the palindromes in an array

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    
  //Anonymous Function : 
   function palin(one,two)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < two; i++)
        {
            let ans = isPalindrome(one[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    
    //IIFE : 


//Arrow : 
Palindrome = (arr, n) =>
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(Plaindrome(["dad",121,123]))
    */

//Q.Remove duplicates from an Array
//Anonymous Function :
var value=[12,13,13,14,15];
 function dul(dupli){
                        let dup = [...new Set(dupli)];
                        console.log(dup);
                      }console.log(dul([value]));

//IIFE :                
(function(dupli1){
  let dup1 = [...new Set(dupli1)];
        console.log(dup1);
       })([1,1,2,3,4])
                       

//Q.Rotate an array by K times
//Anonymous function 

var val=[1,2,3,4,5]
function rot(li , ri){
 for(var i=0;i<ri;i++){
  li.push(li[i])
 }
 for(var i=0;i<ri;i++){
  li.shift()
 }
  console.log(li)
    }
    console.log(rot([val],3));

                          
   //IIFE :   
   
   (function(ar, k){

    for(var i=0;i<k;i++){
      ar.push(li[i])
     }
     for(var i=0;i<k;i++){
      ar.shift()
     }
      console.log(ar)
  })([1,2,3,4] , 2)   
                      
                          