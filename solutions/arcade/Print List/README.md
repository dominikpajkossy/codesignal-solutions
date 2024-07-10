You were supposed to prepare a presentation about lists in Python, but totally forgot about it. Now that you don't have enough time for it, you decide to show some usage examples instead and say with the poker face that this is how you understood the assignment.
Now you need to implement a function that will display a list in the console. Implement a function that, given a list lst, will return it as a string as follows: "This is your list: lst".
Example
For lst = [1, 2, 3, 4, 5], the output should be
solution(lst) = "This is your list: [1, 2, 3, 4, 5]".
Input/Output


[execution time limit] 4 seconds (py)


[memory limit] 1 GB


[input] array.integer lst
A list containing integer values.
Guaranteed constraints:
0 ≤ lst.length ≤ 50,
-100 ≤ lst[i] ≤ 100.


[output] string
A string containing information about lst.


[Python 2] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print "This prints to the console when you Run Tests"
    return "Hello, " + name


