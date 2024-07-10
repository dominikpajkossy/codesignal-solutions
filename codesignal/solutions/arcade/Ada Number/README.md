Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.

Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.
Your task is to determine whether the given string is a valid integer representation.
Note: this is how integer numbers are represented in the programming language Ada.
Example

For line = "123_456_789", the output should be
solution(line) = true;
For line = "16#123abc#", the output should be
solution(line) = true;
For line = "10#123abc#", the output should be
solution(line) = false;
For line = "10#10#123ABC#", the output should be
solution(line) = false;
For line = "10#0#", the output should be
solution(line) = true;
For line = "10##", the output should be
solution(line) = false.

Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] string line
A non-empty string.
Guaranteed constraints:
2 ≤ line.length ≤ 30.


[output] boolean
true if line is a valid integer representation, false otherwise.


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


