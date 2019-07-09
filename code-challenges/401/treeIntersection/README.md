# Tree Intersection
Find common values in 2 binary trees.

## Challenge
1. Write a function called ```tree_intersection``` that takes two binary tree parameters.

2. Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
* The worst case scenario for treeIntersection runs in O(n log n) but best case is an O(n) solution.

<!-- * I pulled in the hash table lab from last week. I then used ```repeatedWord``` to splits the lengthy string into an array of words by splitting the string at each space. Then the word is forced into lower case and parsed for letters. The indexes are inspected for a match. If it is a match, then the word is returned since a collision is produced, other wise the word is added to the array. If no matches are found in the string, null is returned (edge case coverage). -->

## Solution

[Tree Intersection UML](./assets/tree_intersection.JPG)