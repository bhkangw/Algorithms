// October 18

function PopFront(arr){ //pop the first value of the array out of the array
	var temp = arr[0];
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i+1]
	}
	pop.arr();
	return temp
	return arr
}

function PushFront(arr,val){ //push the last value of the array to the front
	var temp = arr[arr.length-1];
	for(var i = arr.length-1; i < 0; i--){
		arr[i] = arr[i-1];
	}
	arr[arr.length-1] = temp;
	return arr
}

function RemoveAt(){ //remove a value from specified position

}


// October 19

function Reverse(arr){ //reverse the array
	for(var i = 0; i < arr.length/2; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr.length-1-i = temp;
	}
	return	arr
}

function RemoveDupes(arr){ //remove duplicates from array
	// (less efficient)
	var newarr = []
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== arr[i+1]){
			newarr.push(arr[i])
		}
	}
	return newarr;
}

function RemoveDupes(arr){ //remove duplicates from array
	// (more efficient)
}

// October 23

function Remove(str){ //remove all spaces from string
	var newstr;
	for(var i = 0; i < str.length; i++){
		if(str[i] !== " "){
			newstr = str[i];
		}
	}
	return newstr;
}

function Acronym(str){ //create acronym from string - new string with only first letter of each word
	var newstr = str[0];
	for(var i = 0; i < str.length; i++){
		if(str[i] === " "){
			newstr = newstr + str[i+1];
		}
	}
	return newstr;
}

// October 24

function PrintKeys(obj){ //print all the keys of an object
	for(k in obj){
		console.log(k);
	}
}

function PrintVals(obj){ //print all the values of an object
	for(k in obj){
		console.log(obj[k]);
	}
}

function Zip(arr1,arr2){ // v1 combine two arrays into a single object - arrays are both the same length
	for(var i = 0; i < arr1.length; i++){
		Zip(k) = arr1[i];
	}
	for(var i = 0; i < arr2.length; i++){
		Zip(obj(k)) = arr2[i];
	}
	return Zip;
}

function Zip(arr1,arr2){ // v2 more efficient
	var obj = {}
	for(var i = 0; i < arr1.length; i++){
		obj(arr1[i]) = arr2[i];
	}


function UnZip(obj){ // v1 given an object with two arrays, print both arrays separately
	for(k in obj){
		arr1() = k;
	}
	for(k in obj){
		arr2() = obj(k);
	}
	console.log(arr1);
	console.log(arr2);
}

function UnZip(obj){ // v2 given an object with two arrays, print both arrays separately - USING PUSH
	for(k in obj){
		arr1.push(k);
	}
	for(k in obj){
		arr2.push(obj[k]);
	}
	console.log(arr1);
	console.log(arr2);
}


// October 25

function IsPalindrome(str){ // check if a string is a palindrome ie. racecar, mom, noon
	var palindrome;
	for(var i = 0 ; i < str.length/2; i++){
		if(str[i] = str[str.length-1-i]){
			palindrome = true;
		}
		else{palindrome = false
			break;
		}
	}
	console.log(palindrome);
	return palindrome;
}

function IsPangram(str){ // check if a string is a pangram (contains all letters of the alphabet)
	var pangram
	str = str.toLowerCase();
	for(var i = 97; i < 123; i++){
		for(var j = 0; i < str.length; i++){
			if(i === str[j]){
				pangram = true;
			}
			else{pangram = false;
				break;
			}
		}
	}
	console.log(pangram);
	return pangram;
}

// October 26

function CoinChange(num){ // give change with least amount of coins ie. given change of 81 cents, return 3 quarters, 1 nickel & 1 penny.
	var obj = {}
	obj["quarters"] = Math.floor(num%25);
	num -= Math.floor(num%25)*25;
	obj["dimes"] = Math.floor(num%10);
	num -= Math.floor(num%10)*10;
	obj["nickels"] = Math.floor(num%5);
	num -= Math.floor(num%5)*5;
	obj["pennies"] = num;
	return obj;
}

function NumToOne(num){ // return the smallest integer ie. 4712 -> 14 -> 5 (??)

}

// October 27

function DoubleTrouble(arr){ // return an array with duplicated values together ie. [4,10,7] -> [4,4,10,10,7,7]
	arr = arr*2
	for(var i = arr.length/2-1; i > 0; i--){
		arr[i*2] = arr[i];
		arr[i*2+1] = arr[i];
	}
	return arr
}

function DoubleTrouble(arr){ // different way to return an array with duplicated values together ie. [4,10,7] -> [4,4,10,10,7,7]. Haven't tested
	for(var i = 0; i < arr.length; i++){
		arr.push(i);
	}
	for(var i = arr.length/2; i < arr.length; i+=2){
		var temp = arr[i];
		arr[i] = arr[i - arr.length/2 - 1];
		arr[arr.length/2 - 1] = temp;
	}
}


// October 30

function ReverseString(str){ // reverse a string ie. "Hello" -> "olleH"
	newstr = ""
	for(var i = str.length-1; i >= 0; i--){
		newstr = newstr + str[i];
	}
	return newstr
}

function NumToRomanNumeral(num){ // write the roman numeral equivalent of a number ie. 349 -> CCCXLIX
	roman = [1000,500,100,50,10,5,1]
	str = ""
	for(var i = 0; i < arr.length; i++){
		if(num > arr[i])
			str = str + math.Floor(num % arr[i])

	}
}

// October 31

function BracesValid(str){ // check if brackets are correct. Hap(ppy[H])all[owee]{n}! = correct; Hap(p[)y] = incorrect
	var stack = [];
	for(var i = 0; i < str.length; i++){
		if(str[i] = "["){
			stack.push("[");
		}
		else if(str[i] = "("){
			stack.push("(");
		}
		else if(str[i] = "{"){
			stack.push("{");
		}
		else if(str[i] = "]"){
			if(stack[stack.length-1] === "["){
				stack.pop("[");
			}
			else{
				break;
			}
		}
		else if(str[i] = ")"){
			if(stack[stack.length-1] === "("){
				stack.pop("(");
			}
			else{
				break;
			}
		}
		else if(str[i] = "}"){
			if(stack[stack.length-1] === "{"){
				stack.pop("{");
			}
			else{
				break;
			}
		}
	}
	if(stack === []){
		return true;
	}
	else{
		return false;
	}
}

// November 1

function LongestPalindrome(str){ // identify the longest palindrome. If there are multiple of same length, return the latest.
	var max_pal = ""				// ex. "Aha noon racecar" = racecar || "AABBCCDD" = DD
	for(var i = 0; i < str.length; i++){
		for(var j = i; i < str.length; j++){
			var str_cur = str.slice(i,j);
			if(IsPalindrome(str_cur)){
				if(max_pal.length <= str_cur.length){
					max_pal = str_cur;
				}
			}
		}
	}
	return max_pal
}


// November 2

function IsSuperVocalic(str){ // return if the word has each vowel (and ONLY one of each?)
	var vow = [a,e,i,o,u];
	for(var i = vow[vow.length-1]; i >=0; i++){
		for(var j = 0; j < str.length; j++){
			if(vow[i] == str[j]){
				vow.pop()
			}
			else{
				break
			}
		}
	}
	if vow = []{
		return true
	}
	else{
		return false
	}
}

function IsSuperVocalic(str){ // above still returns true if it has multiple vowels. Below does not:
	var vow = {
		"a": 0,
		"e": 0,
		"i": 0,
		"o": 0,
		"u": 0;
	};
	for(var k in vow){
		for(var j = 0; j < str.length; j++){
			if(k == str[j]){
				p(k) = 1
			}
		}
	}
	if(vow = {
		"a": 1,
		"e": 1,
		"i": 1,
		"o": 1,
		"u": 1;
	}){
		return true
	}
	else{
		return false
	}
}

function CommonSuffix(array){ // checks if the all strings in the array share a common suffix ie. Baby Lazy Play Hazy = 'zy' = false. Fit Cat = 't' = true.

}














