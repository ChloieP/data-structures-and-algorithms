# Insertion Sort
This challenge is to develop an understanding of Insertion Sort.

## Challenge
Complete a working, tested implementation of Insertion Sort based on the provided pseudo code. 

## Approach & Efficiency
I studied insertion sort via videos and blog posts. I created the Lecture Notes following the Code Fellows format and whiteboarded the solution code from the pseudo code and then wrote passing tests. Google was my friend.

## Pseudo Code
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
## Solution

[Insertion Sort](./assets/insertionSort.jpg)