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
* The big O for sapce and time in Left Join is O(n).

* I studied the code challenge and began to think about this in terms of an array. I was focused on synonym, antonym, and null. As I pondered this I began thinking of declaring the inital function and built the algorithm and the code through the idea of speaking to a 'rubber duck' about the challenge. As I spoke, I wrote and the algorithm was generated. From there I build my pseudocode and from that the code. 

## Solution

[Left Join UML](./assets/left_join.JPG)
