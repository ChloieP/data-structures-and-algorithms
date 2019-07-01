# Lecture Notes: Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than advanced algorithms such as quickSort, heapSort, or mergeSort.

## Learning Objectives

* The How
* The Algorithm
* The Pseudo Code
* The Real Code
* The Tests
* Time Complexity

## Lecture Flow

* This is an in-place sort array. This means that ```return``` will not be used. 
  - The array is searched sequentially and unsort items are moved and inserted into the sorted sub-list.

* So the Big HOW. How does this work? 
  - Let's use an unsorted array for an example. 
  
      - (Whiteboard: unsorted array of 5 elements - 14, 31, 26, 11, 34)
  
  - Insertion sort compares the first two elements

      - (Whiteboard: demonstrate)

  - The first two elements (index 0 and index 1) are already in ascending order
  
      - (Whiteboard: indicate 14 is in a sub-list by using a different color or mark in the box)
  
  - Insertion sort now compares the next number - 26 (index 1 and index 2).

    - (Whiteboard: swap 31 and 26; explain the insertion sort checks all elements of the sorted sub-list and since 27 is greater than 14, the list remains sorted after swapping; indicate index 2 is in a sub-list by using a different color or mark in the box)

  - Insertion sort again compares the next number - 11 (index 2 and index 3).

    - (Whiteboard: swapping would make the list unsorted, so they are swapped again however still they are unsorted, so swap again; remind students the insertion sort checks all elements of the sub-list; after the third iteration the numbers are sorted
  
  - Continue in this manner until the array is insertion sorted.

## Diagram

[Insertion Sort Visual](./assets/insertionSortVisual.jpg)

## Algorithm
  * #### Step 1
    If it is the first element, it is already sorted. Return 1.
  * #### Step 2
    Pick the next element.
  * #### Step 3
    Compare with all the elements in the sorted sub-list.
  * #### Step 4
    Shift all the elements in the sorted sub-list that is greater than the value to be sorted.
  * #### Step 5
    Insert the value.
  * #### Step 6
    Repeat until the list is fully sorted.  

## Pseudocode

```  
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
## Readings and References

#### Watch
[Insertion Sort in 2 Minutes](https://www.youtube.com/watch?v=JU767SDMDvA)

[Insertion Sort with Cups](https://www.youtube.com/watch?v=K4CuPzdiAIo)

#### Read
* [Insertion Sort Tutorial](https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm) 

* [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
#### Bookmark
* [Khan Academy Insertion Sort](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)



