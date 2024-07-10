To make debug output more understandable, you often separate sets of logs by a single line of the same character. Since you use this method very often, you'd like to write a function that would handle printing the separator.
Implement a function that, given a character ch and the number of times it should be repeated n, returns a string of n characters ch.
Example
For ch = '*' and n = 20, the output should be
solution(ch, n) = "********************".
Input/Output


[execution time limit] 4 seconds (py)


[memory limit] 1 GB


[input] char ch
The character that should be repeated.


[input] integer n
The number of times the given character should be repeated.
Guaranteed constraints:
1 ≤ n ≤ 100.


[output] string
A string consisting of n characters ch.


[Python 2] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print "This prints to the console when you Run Tests"
    return "Hello, " + name


