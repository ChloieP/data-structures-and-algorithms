# Merge Sort
This challenge is to develop an understanding of Merge Sort.

## Challenge
Complete a working, tested implementation of Merge Sort based on the provided pseudo code. 

Research and prepare a lecture on the Merge Sort Algorithm suitable for delivery to 301 level student. Your lecture notes should be the only material an instructor should need to conduct a high quality lecture on the subject.

## Approach & Efficiency
I studied merge sort via videos and blog posts. I created the Lecture Notes following the Code Fellows format and whiteboarded the solution code from the pseudo code and then wrote passing tests. Google was my friend.

## Pseudo Code
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

[Merge Sort](./assets/mergeSortVisual.jpg)