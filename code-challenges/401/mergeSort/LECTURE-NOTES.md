# Lecture Notes: Merge Sort

Merge sort is a divide and conquer algorithm that divides the input array into two halves and merges them back into one array. It is one of the most respected algorithms. with a worst-case time complexity of O(n log n).

## Learning Objectives

* The How
* The Algorithm
* The Pseudo Code
* The Real Code
* The Tests
* Time Complexity

## Lecture Flow

* So the Big HOW. How does this work? 

  - Merge sort, also known as mergesort, first divides the array into equal halves and then combines them in a sorted manner. With a larger array, this is an iterative process meaning that the division of equal halves is repeated until the atomic values are achieved.

  - Let's use an unsorted array for an example. 
  
      - (Whiteboard: unsorted array of 8 elements - [14, 31, 26, 3, 11, 34, 19, 99])
  
  - Merge sort sees there are 6 items and divides them into two halves.

      - (Whiteboard: [14, 31, 26, 3] [11, 34, 19, 99])

  - Divide these two arrays into halves.
  
      - (Whiteboard: 
      [14, 31] [26, 3] [11, 34] [19, 99])
  
  - Do you see the iterative process now? Can you guess what we are going to do next? Briefly pause to let students ponder and respond. Then, divide these 4 arrays into halves.

    - (Whiteboard: [14] [31] [26] [3] [11] [34] [19] [99])

  - Now, reverse the process by combining them in the exact way they were broken down.

    - (Whiteboard: [14] and [31] are sorted, [3] comes before [26], so put [3] first, [11] and [34] are sorted, [19] and [99] are sorted.)
  
  - Iterate through the combining phase again and merge them in sorted order so that the end result looks like:

    - (Whiteboard: [3, 11, 14, 19, 26, 31, 34, 99])

## Diagram

[Merge Sort Visual](./assets/mergeSortVisual.jpg)

## Algorithm
  * #### Step 1
    If it is only one element, it is already sorted. Return.
  * #### Step 2
    Divide the list recursively into two halves until it cannot be divided any more.
  * #### Step 3
    Merge the smaller lists into a new list in sorted order.

## Pseudocode

```  
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE b <-- arr[0...mid]
      DECLARE c <-- arr[mid...n]
      // break down the left side
      Mergesort(b)
      // break down the right side
      Mergesort(c)
      // merge the left and the right side together
      Merge(b, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.length
       add remaining items in array c to array a
    else
       add remaining items in array b to array a
       
    return a
```
## Readings and References

#### Watch
* [Merge Sort in 3 Minutes](https://www.youtube.com/watch?v=4VqmGXwpLqc)

#### Read
* [Merge Sort Tutorial](https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm) 

* [Merge Sort](https://www.geeksforgeeks.org/merge-sort/)
#### Bookmark
* [Merge Sort Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)



