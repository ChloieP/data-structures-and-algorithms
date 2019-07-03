# Quick Sort
This challenge is to develop an understanding of Quick Sort.

## Challenge
Complete a working, tested implementation of Quick Sort, based on the pseudo code provided

Research and prepare a lecture on the Quick Sort Algorithm suitable for delivery to 301 level student. Your lecture notes should be the only material an instructor should need to conduct a high quality lecture on the subject.

## Approach & Efficiency
I studied quick sort via videos and blog posts. I created the Lecture Notes following the Code Fellows format and whiteboarded the solution code from the pseudo code and then wrote passing tests. Google was my friend.

## Pseudo Code
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
## Requirements
Ensure the complete solution follows the standard requirements.

1. Write unit tests
2. Follow the template for a well-formatted README
3. Submit the assignment following these instructions

### Implementation

* Convert the pseudo-code into working code in your language.

* Present a complete set of working tests
### Lecture Notes
Use the template provided.

* 1 short video resource
* 2 quality readings/references
* An organized, ordered lecture outline
* Working pseudo code
* Description of the algorithm
* Supportive Images

## Solution

[Quick Sort](./assets/quickSortVisual.jpg)