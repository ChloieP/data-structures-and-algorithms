# Fizz Buzz Tree
Traverse througha tree and change the values of the nodes dependent on the current node's value.

## Challenge
* Write a function called FizzBuzzTree which takes a tree as an argument.

* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:

  - If the value is divisible by 3, replace the value with “Fizz”

  - If the value is divisible by 5, replace the value with “Buzz”

  - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

* Return the tree with its new values.

## Approach & Efficiency
I started with reading the challenge carefully, and then went to the whiteboard to think through the problem fully. I passed in the root node of the tree and if it was not null, I wrote the code to check if the value was divisible by 3 (Fizz), 5 (Buzz), or both (FizzBuzz). I then recursively call FizzBuzzTree again with the current node and if there is a left child use that, otherwise if right use right. Finally, I returned the tree.

## Solution

![alt text](assets/FizzBuzzTree.JPG)