LeetCode 148 — Sort List

1\. Problem

I need to sort a singly linked list in ascending order. The solution should run in O(n log n) time and use O(1) extra memory.



2\. Approach

I use iterative Merge Sort. First, I count the number of nodes in the list. Then, I split the list into small parts and merge them in sorted order. After each pass, I double the size of the parts. I compare node values and change the links between existing nodes instead of creating a new array. I repeat this process until the entire list is sorted.



3\. Time Complexity

Time Complexity: O(n log n)



Each pass processes all n nodes. The size of the parts doubles after every pass, so there are O(log n) passes. Therefore, the total time complexity is O(n log n).



4\. Space Complexity

Space Complexity: O(1)



I use only a constant number of pointers and variables. I do not create an additional array or use recursion. The algorithm changes the links between existing nodes, so the auxiliary space complexity is O(1).



5\. Reflection / Improvement

Iterative Merge Sort already achieves O(n log n) time complexity and O(1) auxiliary space. Recursive Merge Sort is simpler to implement, but it requires O(log n) stack space. The iterative approach avoids this extra stack memory while keeping the same time complexity.

