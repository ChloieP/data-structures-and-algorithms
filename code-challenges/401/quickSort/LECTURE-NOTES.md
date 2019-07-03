# Lecture Notes: Quick Sort

Quick sort is a divide and conquer algorithm that picks an element as pivot and partitions the array around the pivot. The pivot may be chosen in one of these ways.
* Always pick first element as pivot.
* Always pick last element as pivot (implemented below)
* Pick a random element as pivot.
* Pick median as pivot.

## Learning Objectives

* The How
* The Algorithm
* The Pseudo Code
* The Real Code
* The Tests
* Time Complexity

## Lecture Flow

* So the Big HOW. How does this work? 

  - The key process in quickSort is ```partition()```. Target of partitions is, given an array and an element of the array as pivot, put x (the element) at its correct position in a sorted array and put all the smaller elements (smaller than x) before x, and put all the greater elements (greater than x) after x. All this should be done in linear time.

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

[Quick Sort Visual](./assets/quickSortVisual.jpg)

## Algorithm:
  ###  Quick Sort
  * #### Step 1
    Make the right most index value pivot.
  * #### Step 2
    Partition the array by using the pivot value.
  * #### Step 3
    Sort the left partition recursively.
  * #### Step 4
    Sort the right parition recursively.

  ###  Partition

  * #### Step 1
    Set a pivot value as a point of reference.
  * #### Step 2
    Create a variable to track the largest index of numbers lower than the defined pivot.
  * #### Step 3
    Place the value of the pivot location in the middle.
  * #### Step 4
    All numbers smaller than the pivot are on the left, larger on the right.
  * #### Step 5
    Return the pivot index point.
  
   ###  Swap
  
  * #### Step 1
    Create a temporary reference for the left item.
  * #### Step 2
    Move left item to the index that contains right item.
  * #### Step 3
    Move right item to the temporary reference.

## Pseudocode

```  
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
## Readings and References

#### Watch
* [Quick Sort: Coding Train](https://www.youtube.com/watch?v=eqo2LxRADhU)

#### Read
* [Quick Sort GitHub](https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort) 

* [Quick Sort](https://www.geeksforgeeks.org/quick-sort/)

#### Bookmark
* [Quick Sort Wikipedia](https://en.wikipedia.org/wiki/Quicksort)



