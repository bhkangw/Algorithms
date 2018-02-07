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

Math.sign(num) // grabs the sign of the number, holds either a -1 or 1

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