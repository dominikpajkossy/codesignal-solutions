One of your friends has an awful writing style: he almost never starts a message with a capital letter, but adds uppercase letters in random places throughout the message. It makes chatting with him very difficult for you, so you decided to write a plugin that will change each message received from your friend into a more readable form.
Implement a function that will change the very first symbol of the given message to uppercase, and make all the other letters lowercase.
Example
For message = "you'll NEVER believe what that 'FrIeNd' of mine did!!1",
the output should be
solution(message) = "You'll never believe what that 'friend' of mine did!!1".
Input/Output


[execution time limit] 4 seconds (py)


[memory limit] 1 GB


[input] string message
A string consisting of English letters, whitespace characters, digits and punctuation marks.
Guaranteed constraints:
1 ≤ message.length ≤ 65.


[output] string
Fixed message with its first letter capitalized, and all other letters converted to lowercase.


[Python 2] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print "This prints to the console when you Run Tests"
    return "Hello, " + name


