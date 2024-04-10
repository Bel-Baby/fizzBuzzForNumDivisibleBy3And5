/* 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/


const int = document.getElementById("int");
const check = document.getElementById("check");
const result = document.getElementById("result");

const checkDivisibility = (inputVal) => {
    let arr = [];
    inputVal = int.value;
    for(let i = 1; i <= inputVal; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            arr.push("Fizz");
        }
        else if (i % 5 === 0) {
            arr.push("Buzz");
        }
        else {
            arr.push(i);
        }
    }
    result.textContent = arr;
    console.log(arr);
}

check.addEventListener("click", checkDivisibility);