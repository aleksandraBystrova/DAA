LeetCode 912 — Sort an Array

1\. Problem

I need to sort an array of integers in ascending order without using built-in sorting functions. The solution must have O(n log n) time complexity and use as little extra memory as possible.



2\. Approach

I use Heap Sort. First, I build a max heap, where the largest element is at the root. Then, I swap the root with the last element of the unsorted part. I reduce the heap size and restore the heap property. I repeat these steps until the array is sorted. Finally, I return the array.



3\. Time Complexity

Time Complexity: O(n log n)



Building the heap takes O(n) time. Then, I perform n - 1 extraction steps. Each step takes O(log n) time to restore the heap. Therefore, the total time complexity is O(n log n).



4\. Space Complexity

Space Complexity: O(1)



I sort the array in place and use only a few extra variables. My heapify function is iterative, so it does not use recursive calls or an additional array. Therefore, the auxiliary space complexity is O(1).



5\. Reflection / Improvement

Heap Sort already has O(n log n) time complexity and O(1) auxiliary space complexity. There is no need to improve the asymptotic time complexity because comparison-based sorting algorithms cannot guarantee better than O(n log n) in the general case. I could use Merge Sort, but it usually requires O(n) extra memory for arrays.

