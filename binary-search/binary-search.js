'use strict';

// Complete this algo //
// arr = [1,2,3,4,5]; target: 6

const binarySearch = (array, target) => {
	if (array.length === 1) {
		return target === array[0];
	}

	let midIdx = Math.floor(array.length/2);
	let midpoint = array[midIdx];
	const test1 = [1,3,4,5,10,15,20,22,23,98,1000];
	console.log('length:',test1.length);

	console.log(midpoint);

	if (target === midpoint) {
		return true;
	} else if (target < midpoint) {
		let newArr = array.slice(0, midIdx);
		binarySearch(newArr, target);
	} else {
		let newArr = array.slice(midIdx); //[3,4,5] [4,5] [5]
		console.log('newArr', newArr);

		binarySearch(newArr, target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

// arr = [1,2,3,4,5];
// // midIdx = arr.length/2;
// console.log(arr[2.5]);
// // console.log(arr[2]);
