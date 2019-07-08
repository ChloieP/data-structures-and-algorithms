# Repeated Word
Find the first repeated word in a book.

## Challenge
1. Write a function that accepts a lengthy string parameter.

2. Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

3. Testing: Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.


## Approach & Efficiency
* The worst case scenario for repeatedWord starts as O(log n) but presents an O(1) solution.

* I created a Linked List class along with two functions: ```hash``` and ```repeatedWord```. ```Hash``` converts a word into ASCII code and follows the common hash table algorithm when ASCII code is used. ```repeatedWord``` splits the lengthy string into an array of words by splitting the string at each space. Then the word is forced into lower case and parsed for letters. The ```hash``` function then hashes the word. Using ```LinkedList```, the indexes are inspected for a match. If it is a match, then the word is returned since a collision is produced, other wase the word is added to the linked list. If no matches are found in the string, null is returned (edge case coverage).

## Solution

[Repeated Word UML](./assets/repeated_word.JPG)
