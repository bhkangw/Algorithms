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
