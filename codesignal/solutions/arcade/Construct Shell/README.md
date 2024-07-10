A 2D list lst of size 2 * n - 1 is called a shell if it is filled with zeros and has the following configuration:

lst[0] contains one element;
lst[1] contains two elements;
...
lst[n - 2] contains n - 1 elements;
lst[n - 1] contains n elements;
lst[n] contains n - 1 elements;
...
lst[2 * n - 3] contains two elements;
lst[2 * n - 2] contains one element.

Given an integer n, return a shell list.
Example
For n = 3, the output should be
solution(n) = [[0],
               [0, 0],
               [0, 0, 0],
               [0, 0],
               [0]]

Input/Output


[execution time limit] 4 seconds (py)


[memory limit] 1 GB


[input] integer n
An integer defining the size of the shell.
Guaranteed constraints:
1 ≤ n ≤ 30.


[output] array.array.integer
A shell.


[Python 2] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print "This prints to the console when you Run Tests"
    return "Hello, " + name


