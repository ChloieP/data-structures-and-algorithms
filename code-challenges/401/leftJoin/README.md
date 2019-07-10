# Left Join
Implement a simplified Left Join for 2 Hashmaps.

## Challenge
1. Write a function that LEFT JOINs two hashmaps into a single data structure.

2. The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

3. The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

4. Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

5. LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of ```NULL``` should be appended to the result row.

6. The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

7. Avoid utilizing any of the library methods available to your language.


## Approach & Efficiency
<!-- * The worst case scenario for repeatedWord starts as O(log n) but presents an O(1) solution.

* I pulled in the hash table lab from last week. I then used ```repeatedWord``` to splits the lengthy string into an array of words by splitting the string at each space. Then the word is forced into lower case and parsed for letters. The indexes are inspected for a match. If it is a match, then the word is returned since a collision is produced, other wise the word is added to the array. If no matches are found in the string, null is returned (edge case coverage). -->

## Solution

[Repeated Word UML](./assets/repeated_word.JPG)
