// Javascript Built in Functions to learn and love

// STRING MANIPULATION & PALINDROMES

toLowerCase() // method to return the calling string value converted to lowercase.
// useful for: isPalindrome, string manipulation, 

replace() // method to return a new string with some or all matches of a pattern replaced by a replacement.
// takes two parameters: what you're removing & what you're replacing it with
// useful for: isPalindrome, string manipulation, 

split('') // method splits a String object into an array of strings by separating the string into sub strings.
// useful for: isPalindrome, string manipulation, 

reverse() // method reverses an array in place.The first array element becomes the last and the last becomes the first.
// useful for: isPalindrome, string manipulation, 

join('') // method joins all elements of an array into a string.
// useful for: isPalindrome, string manipulation, 

// example:
function palindrome(str) {
	var re = /[\W_]/g; // use the regex to remove unwanted characters from it
	var lowRegStr = str.toLowerCase().replace(re, '');
	var reverseStr = lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;
}

palindrome("A man, a plan, a canal. Panama");

// REVERSE INTEGER

toString() // turns an integer into a string

parseInt(num) // turns a string back into an integer

Math.sign(string) // grabs the sign of the number, holds either a -1 or 1

function reverseInt(x) {
	let sign = Math.sign(x)
	let num = x.toString().split("").reverse().join("");
	let reverse = parseInt(num) * sign
	if (reverse > 2147483648 || reverse < -2147483648) {
		return 0;
	}
	return reverse;
};

// IS INTEGER PALINDROME

var isPalindrome = function (x) {
	let s = x.toString().split("").reverse().join("");
	if (s == x) {
		return true;
	}
	return false;
};

// Javascript String Methods
// LONGEST COMMON PREFIX ? 

str.substr(start, length) // extracts the characters from a string, beginning at a specified start position, and through given length
// e.g. "hello".substr(0, 3) = "hel"

str.substring(start, end) // extracts the characters from a string, between two specified indices
// e.g. "hello".substr(2, 4) = "llo"

str.startsWith("Hello") // check if a string starts with "Hello", returns boolean

str.slice(start, end) // extract parts of a string. 
// end = optional. The position (up to, but NOT including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string
// e.g. "hello".slice(1,3) = "lo"

str.indexOf() // method returns the position of the first occurrence of a specified value in a string
// method returns -1 if value doesn't exist
// e.g. "hello world".indexOf("world") = 6

str.lastIndexOf() // method returns the position of the last occurrence of a specified value in a string
// method returns -1 if value doesn't exist
// e.g. "hello world world world".indexOf("world") = 18

str.includes() // method checks if a string includes given value, returns boolean
// e.g. "hello world".includes("planet") = false

str.endsWith() // method checks if a string ends with given value, returns boolean

str1.concat(str2, str3) // joins two or more strings

str.charCodeAt(index) // return the Unicode of the index of a string

str.toUpperCase() // converts to uppercase

// example:
function camelcase(s) {
	let count = 1;
	for (let i of s) {
		if (i === i.toUpperCase()) {
			count++
		}
	}
	return count;
}

// Javascript Array Methods

arr1.concat(arr2) // joins two or more arrays, and returns a copy of the joined arrays

arr.push.apply(arr1, arr2) // combines two arrays (merges the second arr into the first one)
// example:
function mergeArray(arr1, arr2){
	var arr1 = [1, 2, 3];
	var arr2 = [4, 5, 6];
	Array.prototype.push.apply(arr1, arr2);
	console.log(arr1); // is: [1, 2, 3, 4, 5, 6]
}

// STAIRCASE

str.repeat(count) // method constructs and returns a new string which contains the specified number of copies of the string
// E.g "abc".repeat(3) -> "abcabcabc"

// example: 
function staircase(n) {
	for (let i = 1; i <= n; i++) {
		console.log(" ".repeat(n - i) + "#".repeat(i));
	}
}
// n = 6 => would print
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Min-Max Sum
//
function miniMaxSum(arr) {
	let sortedArr = arr.sort()
	let min = sortedArr[0];
	let max = sortedArr[4];
	for (let i = 1; i < 4; i++) {
		min += sortedArr[i];
		max += sortedArr[i];
	}
	console.log(min + " " + max)
}

// HACKERRANK OUTPUT TIPS
process.stdout.write("" + result + "\n"); // usually means RETURN
join() // usually means ARRAY 
