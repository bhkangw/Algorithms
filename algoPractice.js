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
		(arr.length-1-i) = temp;
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
	if(vow = []){
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
		"u": 0,
	}
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
		"u": 1,
	}){
		return true
	}
	else{
		return false
	}
}

function CommonSuffix(array){ // checks if the all strings in the array share a common suffix ie. Baby Lazy Play Hazy = 'zy' = false. Fit Cat = 't' = true.

}

// November 3 

// Introducing linked list!

function SLNode(v){ // function to create a new node class
	this.val = v
	this.next = null;
}

function SLList(){ // function to create a new list class
	this.head = null;
	this.AddToFront = function(num){ // function to [Add a New Node to the Front] <-- Today's algorithm question
		var newNode = SLNode(num)
		if(this.head == null){ // if statement not necessary at all. only helpful for own visualization of logic.
			this.head = newNode;
			return this;
		}
		newNode.next = this.head; // this statement is key: always sets the new node to whatever the head was pointing to
		this.head = newNode; // and then sets the head to point to the new node
		return this
	}
}

// November 6

function SLList(val){
	this.head = null;
	this.contains = function(v){ // first function: find if the link list CONTAINS value v
		var runner = this.head;
		if(this.head == null){
			return false;
		}
		while(runner.next){ // aka while(runner.next !== null)
			if(runner.val == v){
				return true;
			}
			runner = runner.next;
		}
		return false;
	}
	this.max = function(){ // second function: find the MAX value in a link list
		var runner = this.head;
		var max = runner.val;
		if(this.head == null){
			return null;
		}
		while(runner.next){
			if(max < runner.next.val){
				max = runner.next.val;
			}
			runner = runner.next
		}
		return max;
	}
	this.size = function(){ // third function: return the SIZE of the link list
		var runner = this.head;
		var size = 0;
		if(this.head == null){
			return size
		}
		while(runner.next){
			count++
		}
		return count;
	}
	this.size = function(){ // third function: alternate method, checking if runner == null instead of runner.next
		var runner = this.head;
		var size = 0;
		while(runner !== null){
			count++
			runner = runner.next;
		}
		return count;
	}
}

// November 7

function SLNode(v){ // need to create the function for when we call on it in the AddToBack function
	this.val = v;
	this.next = null;
}

function SLList(){ // creating the new list class
	this.head = null;
	this.AddToBack = function(v){ // add a node to the back of the list
		var runner = this.head;
		while(runner.next ! == null){
			runner = runner.next
		}
		runner.next = new SLNode(v); // creating a new node by making an instance of the class
	}

	this.RemoveBack = function(){ // remove a node from the back of the list
		var runner = this.head;
		while(runner){
			runner = runner.next // don't forget this! in order to iterate through the list
			if(runner.next.next == null){ // checking two nodes ahead
				runner.next = null;
			}
			if(this.head.next == null){ // corner case when there is only one node
				this.head = null;
			}
		}
	}

	this.RemoveFront = function(){ // remove the first node from the list
		this.head = this.head.next;
	}
}

// Novemeber 8

function MaxToBack(){ // find the node with the max value and move that node to the back of the list
	var runner = this.head;
	var max = this.head;
	var beforemax;
	while (runner.next! = null){
		if(runner.next.val > max.val){
			beforemax = runner; // must grab BOTH the node of the max as well as the node before (for the pointer)
			max = runner.next; // sets the variable max as the node with the max value
		}
		runner = runner.next;
	}
	if(runner.next == null){
		runner.next = max;
		beforemax.next = max.next; // must set this pointer before setting max.net to null
		max.next = null;
	}
	if(this.head = max){ // edge case in case the max value is the first node
		this.head = this.head.next;
	}
}

function InsertBefore(val, before){ // create a node with value val and insert it before the specified node

}

// November 9

function SLNode(v){ // function to create a node for InsertAfter
	this.val = v;
	this.next = null;
}

function InsertAfter(val, after){ // create a node with value val and insert it AFTER the specified node
	var runner = this.head;
	var newnode = SLNode(after)
	var found;
	while(runner.next != null){
		if(runner.val == after){
			found = runner
		}
		runner = runner.next
	}
	newnode.next = temp.next
	temp.next = newnode
}

function RemoveVal(val){ // remove any instance of a node with the value of val from the list
	var runner = this.head
	if(this.head.val == val){
		this.head = this.head.next
	}
	while(runner.next.next != null){
		if(runner.next.val == val){
			runner.next = runner.next.next
		}
	runner = runner.next
	}
}

// November 13 

// Introducing Queues!

function SLNode(v){ // function to create a node for Enqueue
	this.val = v;
	this.next = null;
}

function SLQueue(){ // create a new node and add it to the back of the queue (AddToBack)
	this.head = null
	this.Enqueue = function(v){
		var newnode = SLNode(v);
		if(this.head == null){
			this.head = newnode;
		}
		else{
			var runner = this.head;
			while(runner.next){
				runner = runner.next;
			}
			runner.next = newnode;
		}
	}
	this.Dequeue = function(){ // remove the first node of the list and return its value (PopFront)
		var node = this.head;
		if(this.head == null){

		}
		else{
			this.head = this.head.next;
			return node;
		}
	}
}

// November 14

// Introducing Stacks!

function arrstack(){ // add and remove value from an array stack
	function push(val){
		arr[arr.length] = val
	}
	function pop(){
		temp = arr[arr.length-1]
		arr.length = arr.length-1 // you can just set the array to a new length to 'trim' out the rest!
		return temp
	}
}

function SLNode(v){ // function to create a node for below function
	this.val = v;
	this.next = null;
}

function linkedliststack(){ // add and remove from a linked list stack
	function push(val){
		var newnode = SLNode(val);
		newnode.next = this.head;
		this.head = newnode;
	}
	function pop(){
		temp = this.head;
		this.head = this.head.next
		return temp
	}
}

function size(){ // return the size of an array stack
	var size = arr.length
	return size
}
function size(){ //  return the size of a linked list stack
	var runner = this.head
	var count = 0
	while(runner != null){
		count += 1
		runner = runner.next
	}
	return count
}

// November 15

function CQueue(c){ // Introducing circular queue
	this.data = []
	this.capacity = c
	var front = 0
	var back = i

	this.Enqueue = function(v){ // add a value to the queue - if possible return true, if not return false
		if(this.data.length === this.capacity){
			return false
		}
		for(var i = 0; i < c; i++){
			if(!data[i]){
			data[i] = v
			return true
			}
		}
	}

	this.Dequeue = function(){ // remove and return the value at the front of the line, have the front line position move appropriately
		val = this.data[front]
		this.data[front]=null
		if(this.data[front+1] == c){
			if(this.data[0]){
				this.front=this.front[0]
			}
		}
		if(this.data[front+1]){
			this.front=this.front+1
		}
		return val
	}
}

// November 17

function QueueFromStacks(){ // add and remove from a queue that uses stacks exclusively
	this.stack1 = new Stack()
	this.stack2 = new Stack()
	this.enqueue = function(v){
		this.stack1.add(v)
	}
	this.dequeue = function(){
		size = this.stack1.size()
		for(var i = 0; i < size; i++){
			this.stack2.add(this.stack1.remove())
		}
		return this.stack2.remove()
	}
}

function Stack(){ // only written for use by above function 
	this.data = []
	this.add = function(v){
		this.data[this.data.length] = v
	}
	this.remove = function(v){
		var last = this.data[this.data.length-1]
		this.data.length = this.data.length-1
		return last
	}
	this.size = function(){
		return this.data.length
	}
}


// November 27

function SLList(){
	this.head = null;
	this.reverse = function(){ // reverse a linked list

	}
	this.IsPalindrome = function(){ // check if a list is palindrome

	}
}


// November 28

function SLList(){
	this.head = null;
	this.KthFromLast = function(){ // find the value of the Kth node from the last
		// have two runners, and once the first one gets to be Kth distance from the beginning, start the second runner.
		// once the first runner hits the end, the second runner will be the Kth from last.

	}  
}

// November 29

function SumOfList(s1, s2){ // given two lists, create a third list representing the sum of the two list values
	// ie [3]-[5]-[8]-[4] and [2]-[1]-[1] = [3]-[7]-[9]-[5]

}

function SumOfListReverse(s1, s2){ // same as above but in reverse
	// ie [3]-[5]-[8]-[4] and [2]-[1]-[1] = [5]-[6]-[9]-[4]

}

// November 30

// return if list is in an infinite loop; true or false
	// have a runner moving 1 node/iteration and a jumper moving 2 nodes/iteration
	// if the nodes ever meet, then the list is in a loop
// if loop, return which node the loop starts
	// once the runner the jumper meet, reset the runner to the beginning and have them continue through the rest of the list AT THE SAME PACE
	// they will meet back at the point where the loop first occurs

// December 1

// Introducing Doubly-Linked Lists
// A DLList has nodes with both .next and .prev

function DLNode(v){ // doubly linked node class
	this.val = v;
	this.next = null;
	this.prev = null;
}

function DLList(){
	this.head = null;
	this.tail = null;
	this.Reverse = function(){ // reverse a doubly linked list
		var runner = this.tail
		var temp;
		while(runner!=null){
			temp = runner.next;
			runner.next = runner.prev;
			runner.prev = temp;
			runner = runner.next;
		}
		temp = this.head;
		this.head = this.tail;
		this.tail = temp;
	}
	this.AddToFront = function(v){ // add to front of a doubly linked list
		var newnode = DLNode(v);
		newnode.next = this.head;
		this.head.prev = newnode;
		this.head = newnode;
	}
	this.AddToBack = function(v){ // add to back of a doubly linked list
		var newnode = DLNode(v);
		newnode.prev = this.tail;
		this.tail.next = newnode;
		this.tail = newnode;
	}
	this.AddAt = function(index, v){ // add at a specific position in a doubly linked list
		var newnode = DLNode(v);

	}
	this.AddAtCenter = function(v){ // add to center of a doubly linked list

	}
}

// December 4
// Introducing Recursion

function rSigma(n){ 
	if(n == 1){
		return 1;
	}
	return n+rSigma(n-1);
}

function rFactorial(n){
	if(n == 1){
		return 1;
	}
	return n*rFactorial(n-1);
}

// December 5 

function rFibonacci(n){
	if(n == 2){
		return 1;
	}
	if(n == 1){
		return 0;
	}
	return rFibonacci(n-1) + rFibonacci(n-2)
}

// December 6
// Introducing Memoization

function rBinarySearch(arr, val, start = 0, end = arr.length-1){
	var num = arr[arr.length-1].Math.floor
	if(num == val){
		return true;
	}
	if(num > val){
		rBinarySearch(arr, val, start, end = num);
	}
	if(num < val){
		rBinarySearch(arr, val, start = num, end);
	}
	if(start == end) {
		return false;
	}
}

// December 7

function floodfill(arr, startpoint, ogcolor, color){ 
// given a multidimensional array, change the initial value (ogcolor) of the startpoint and any adjacent like-values to color
	var x = startpoint[0]
	var y = startpoint[1]
	var ogcolor = arr[startpoint]
	if( arr[x+1,y] != ogcolor && arr[x-1,y] != ogcolor &&
		arr[x,y+1] != ogcolor && arr[x,y-1] != ogcolor){
	arr[startpoint] = color;
	return
	}
	arr[startpoint] = color;
	
}

// December 8

function rLLLength(node, count = 0){ // print the length of a linked list with recursion, assuming node = head
	if(node){
		count++
		rLLLength(node.next);
	}
}

function rPrintAllVals(node){ // print the values of a linked list with recursion
	if(node){
		console.log(node.val);
		rPrintAllVals(node.next);
	}
}

function rPrintAllValsReverse(node){ // print the values of a linked list with recursion
	if(node){
		rPrintAllValsReverse(node.next);
		console.log(node.val);
	}
}

// December 11

// back to strings

function GetSubStr(str, start, end){ // creating my own GetSubStr function for use in functions below
	var s = "";
	for(var i = start; i < end; i++){
		s += str[i];
	}
	return s;
}

function StringToWordArray(str){ // convert a string "This is a string" to an array of words ["This", "is", "a", "string"]
	var s = 0;
	var arr = [];
	for(var i = 0; i < str.length; i++){
		if(str[i] == " "){
			arr.push(GetSubStr(str,s,i));
			s = i
		}
	}
	arr.push(GetSubStr(str,s,str.length-1));
	return arr;
}

function ReverseWordOrder(str){ // reverse the word order of a string "This is a string" -> "string a is This"
	var s = str.length-1;
	var rStr = "";
	for(var i = str.length-1; i >= 0; i--){
		if(str[i] = " "){
			rStr += GetSubStr(str,s,i);
			s = i;
		}
	}
	rStr += GetSubStr(str,s,0);
	return rStr;
}

function LongestWord(str){ // return the longest word of a string ie. "This is a string" returns "string"
	var longestWord = "";
	var s = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] = " "){
			var testStr = GetSubStr(str,s,i);
			s = i;
			if(longestword.length <= testStr.length){
				longestWord = testStr;
			}
		}
	}
	lastWord = GetSubStr(str,s,str.length-1);
	if(longestWord <= lastWord){
		longestWord = lastWord
	}
	return longestWord;
}

// December 12

function GetSubStr(str, start, end){ // creating my own GetSubStr function for use in functions below
	var s = "";
	for(var i = start; i < end; i++){
		s += str[i];
	}
	return s;
}

function RotateString(str, num){ // ("Big Baller", 3) -> "lerBig Bal"
	if(num > str.length){
		num = num % str.length;
	}
	var newstr = ""
	newstr += GetSubStr(str, str.length-num, str.length-1) // specify the index? or the value? ie. str[str.length-num]
	newstr += GetSubStr(str, 0, str.length-num-1)
	return newstr;
}

function Censor(str, words){ // ("Today is not Tuesday",["day", "not"]) -> "Toxxx is xxx Tuesxxx"
	var newstr = "";
	for(var word in words){
		var wordsize = word.length;
		for(var i = 0; i < str.length; i++){
			if(GetSubStr(str, i, wordsize).toLowerCase() == word.toLowerCase()){
				GetSubStr(str, i, wordsize) = "xxx"
				newstr += GetSubStr(str, i, wordsize);
				i += wordsize;
			}
			else{
				newstr += str[i];
			}
		}
	}
}

// December 13

// Reintroducing recursion with strings

function BinaryStringExansion(str, results = []){ // ie "H?LL?" -> ["H1ll1", "H0ll0", "H0ll1", "H1ll0"]
	if(!str.contains("?")){
		return results;
	}
	var str0 = "";
	var str1 = "";

	// while(str[i] != "?"){

	// }



	for(var i = 0; i < str.length; i++){ // loop through str to find ?s
		if(str[i] == "?"){ // if ? is found
			str0 += 0; // replace with 0 to str0
			str1 += 1; // replace with 1 to str1
		}
		str0 += str[i]; // if value is not a ? add the value to both strings
		str1 += str[i];
	}
	BinaryStringExansion(str0, results) // pass in updated strings
	BinaryStringExansion(str1, results)
}

// December 14

function GetSubStr(str, start, end){ // creating my own GetSubStr function for use in function below
	var s = "";
	for(var i = start; i < end; i++){
		s += str[i];
	}
	return s;
}

function InOrderSubsets(str, sub = "", results = []){
	if(str.length == 0){
		results.push(sub)
	}
	InOrderSubsets(GetSubStr(str, 1, str.length-1), sub += str[0], results)
	InOrderSubsets(GetSubStr(str, 1, str.length-1), sub, results)
	return results;
}

// console.log(InOrderSubsets("ned")) how to test! run the file by typing node {file name} into terminal

// December 18

// Introducing Binary Search Trees

function BSTNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
	this.add = function(val){ // adds a value to the tree where appropriate

	}
	this.contains = function(val){ // returns boolean if value is present in the BST

	}
	this.min = function(){ // returns the min value of the BST
		
	}
	this.max = function(){ // returns the max value of the BST

	}
}


