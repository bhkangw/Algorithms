// During the interview, we’ll ask you to write code. We love to ask questions related to linked lists, arrays, pointers, and such.

// Reverse a doubly linked list

// Reverse words in a sentence

// Find the closest common ancestors to 2 nodes in a n-ary tree

// Delete a given node from a sorted singly-linked list

// Given a stack and a no of element, find the max element in O(1) time  

// Design a data structure with constant time insert, delete and generate random element

// Arrange array numbers such that when they are sorted, their concatenation in the order forms the biggest number

//  Linked list manipulation, string parsing and graph traversals

// Iterate through a two dimensional array

// Create an algorithm to reverse a string in-place  

// Find the middle element of a linked list

// Can you describe me how polymorphism works?

// Given 4 coins of values 1, 5, 10, and 20, find all the combinations of coins that can add up to K

// Given a linked list, put all the odd elements in lexicographical order list in front of the even elements in lexicographical order in place

// Design chess using OOP

// https://www.glassdoor.com/Interview/InConsulting-Interview-Questions-E1309800.htm

// Write a function to find the longest common prefix string amongst an array of strings.
	// use tries?

// Given a number n, find two integers in array whose product = n 
// E.g val = 20, arr = [3,6,2,4,9,10], return [2,10]
function findMultiplesToVal(arr, val) {
	let dict = {};
	for (let i of arr) { // iterating through where i is the value *FOR OF*
		if (dict[val / i] !== undefined) { // check to see if the multiplier of i to get to val already exists in dict
			return [i, dict[val / i]] // if so return the pair
		}
		dict[i] = i; // if not, add the integer into the dict
	}
}

// Given an array representing a number, add one and return the array
// E.g. [1,2,3,4] -> [1,2,3,5]
// E.g. [9,9,9] -> [1,0,0,0]
function addone(arr) {
	let carry = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		let total = arr[i] + carry;
		if (total === 10) {
			carry = 1;
			arr[i] = 0;
		}
		else {
			carry = 0;
			arr[i]++
			return arr;
		}
	}
	if (carry = 1) {
		// option 1: create a new arr
		// return newarr = [1].concat(arr); 
		// option 2: increase length of arr
		arr.push(0);
		arr[0] = 1;
		return arr;
	}
}

// IC #1: Return the max profit of a trading stock from the previous day's prices
// Tips: using a greedy approach, finding the best answer as you go
function getMaxProfit(stockPrices) {
	if (stockPrices.length < 2) {
		throw new error("Getting a profit needs at least 2 prices");
	}
	let minPrice = stockPrices[0];
	let maxProfit = stockPrices[1] - stockPrices[0];
	for (let i = 1; i < stockPrices.length; i++) {
		let currentPrice = stockPrices[i];
		let potentialProfit = currentPrice - minPrice
		maxProfit = Math.max(maxProfit, potentialProfit)
		minPrice = Math.min(minPrice, currentPrice)
	}
	return maxProfit;
}

// IC #2: Find the products of all the integers except the integer at each index
// E.g. [2,3,4] -> [12,8,6]
// Tips: another greedy approach. except we solve it in 2 passes instead of 1
// Start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.
function getProductsOfAllIntsExceptAtIndex(arr) {
	let productsExcept = [];
	let productSoFar = 1;
	for (let i = 0; i < arr.length; i++) {
		productsExcept[i] = productSoFar;
		productSoFar *= arr[i];
	}
	productSoFar = 1;
	for (let j = arr.length - 1; j >= 0; j--) {
		productsExcept[j] *= productSoFar
		productSoFar *= arr[j];
	}
	return productsExcept;
}

// IC #3: Given an array of integers, find the highest product you can get from three of the integers.
// E.g [1,10,-5,1,-100] -> 5000
// Tips: another greedy approach. similar to stock question but this one needs four things to calculate highestProductOf3 at each step
function threeMaxProduct(arr) {
	let highestProductOf3 = arr[0] * arr[1] * arr[2];
	let highestProductOf2 = arr[0] * arr[1];
	let lowestProductOf2 = arr[0] * arr[1];
	let highest = Math.max(arr[0], arr[1]);
	let lowest = Math.min(arr[0], arr[1]);
	for (let i = 2; i < arr.length; i++) {
		let current = arr[i];
		// order matters! so you don't end up multiplying the current number by itself to get a new highestProductOf3.
		highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current);
		highestProductOf2 = Math.max(highestProductOf2, highest * current, lowest * current);
		lowestProductOf2 = Math.min(lowestProductOf2, highest * current, lowest * current);
		highest = Math.max(highest, current);
		lowest = Math.min(lowest, current);
	}
	return highestProductOf3;
}