You have two strings, s and t. The string t contains only unique elements. Find and return the minimum consecutive substring of s that contains all of the elements from t.
It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.
Example
For s = "adobecodebanc" and t = "abc", the output should be
solution(s, t) = "banc".
Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] string s
A string consisting only of lowercase English letters.
Guaranteed constraints:
0 ≤ s.length ≤ 100.


[input] string t
A string consisting only of unique lowercase English letters.
Guaranteed constraints:
0 ≤ t.length ≤ min(26, s.length).


[output] string


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


