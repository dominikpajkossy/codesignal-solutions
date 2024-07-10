Consider a special family of Engineers and Doctors. This family has the following rules:

Everybody has two children.
The first child of an Engineer is an Engineer and the second child is a Doctor.
The first child of a Doctor is a Doctor and the second child is an Engineer.
All generations of Doctors and Engineers start with an Engineer.

We can represent the situation using this diagram:
                E
           /         \
          E           D
        /   \        /  \
       E     D      D    E
      / \   / \    / \   / \
     E   D D   E  D   E E   D

Given the level and position of a person in the ancestor tree above, find the profession of the person.
Note: in this tree first child is considered as left child, second - as right.
Example
For level = 3 and pos = 3, the output should be
solution(level, pos) = "Doctor".
Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] integer level
The level of a person in the ancestor tree, 1-based.
Guaranteed constraints:
1 ≤ level ≤ 30.


[input] integer pos
The position of a person in the given level of ancestor tree, 1-based, counting from left to right.
Guaranteed constraints:
1 ≤ pos ≤ 2(level - 1).


[output] string
Return Engineer or Doctor.


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


