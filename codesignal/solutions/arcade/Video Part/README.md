You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.
Example
For part = "02:20:00" and total = "07:00:00", the output should be
solution(part, total) = [1, 3].
You have watched 1 / 3 of the whole video.
Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] string part
A string of the following format "hh:mm:ss" representing the time you have been watching the video.


[input] string total
A string of the following format "hh:mm:ss" representing the total video duration.


[output] array.integer
An array of the following format [a, b] (where a / b is a reduced fraction).


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


