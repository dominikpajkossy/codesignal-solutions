Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.
Example
For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
solution(nums) = ["-1->2", "6->7", "9"].
Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.integer nums
A sorted array of unique integers.
Guaranteed constraints:
0 ≤ nums.length ≤ 15,
-(231 - 1) ≤ nums[i] ≤ 231 - 1.


[output] array.string


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


