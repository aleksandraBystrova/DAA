# Remove Duplicates from Sorted List

## 1. Problem

I need to remove duplicate values from a sorted linked list. Each value should appear only once.

Example: `1 -> 1 -> 2 -> 3 -> 3` becomes `1 -> 2 -> 3`.

## 2. Approach

I compare each node with the next node. If their values are equal, I skip the next node. Otherwise, I move to the next node.

**Tracing example:**

Input: `1 -> 1 -> 2 -> 3 -> 3`

1. I compare `1` and `1`. They are equal, so I remove the second `1`.
2. I compare `1` and `2`. They are different, so I move forward.
3. I compare `2` and `3`. They are different, so I move forward.
4. I compare `3` and `3`. They are equal, so I remove the last node.

Output: `1 -> 2 -> 3`

One challenge was remembering not to move the pointer after removing a duplicate. Otherwise, consecutive duplicates could remain.

## 3. Time Complexity

**Time Complexity: O(n)**

I visit each node at most a constant number of times, where `n` is the number of nodes.

**Space Complexity: O(1)**

I only use one pointer and modify the existing list without creating another list.

## 4. Reflection / Improvement

The solution is already optimal in time complexity because every node may need to be checked. I could use a similar approach with a slightly different pointer structure, but it would not improve the complexity.
