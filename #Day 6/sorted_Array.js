// Find the element that appears once in sorted array ✅
// Testcase 1 : 
let a=[1,1,3,3,3,0];
// Testcase 2:
let B=[1,2,2,2,2,2,2];

// JavaScript program to find the element that
// appears only once

// A Linear Search based function to find
// the element that appears only once

 function search(arr, n){
	let ans = -1;
	for (let i = 0; i < n; i += 2) {
		if (arr[i] != arr[i + 1]) {
			ans = arr[i];
			break;
		}
	}

	if (arr[n - 2] != arr[n - 1])
			ans = arr[n-1];

	// ans = -1 if no such element is present.
	console.log("The required element is " + ans );
}

//  Driver code
	let len = a.length;

	search(a, len);
