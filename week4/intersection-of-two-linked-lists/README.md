# Intersection of Two Linked Lists

## 1. Problem

I need to find the node where two linked lists intersect. If they do not share any nodes, I return `None`.

The intersection means that both lists point to the same node in memory, not just nodes with equal values.

## 2. Approach

I use two nested loops. For each node in the first list, I check every node in the second list. If both pointers refer to the same object, I return that node.

**Tracing example:**

List A: `1 -> 2 -> 8 -> 9`

List B: `3 -> 8 -> 9`

Assume both lists share the actual nodes containing `8` and `9`.

1. I compare node `1` with every node in list B. There is no match.
2. I compare node `2` with every node in list B. There is no match.
3. I compare node `8` with node `3`. They are different.
4. I compare node `8` with the shared node `8`. They are the same object, so I return it.

A challenge was understanding that equal values do not necessarily mean an intersection. I must compare node references using `is`, not values using `==`.

## 3. Time Complexity

**Time Complexity: O(n × m)**

If list A contains `n` nodes and list B contains `m` nodes, I may compare every node in A with every node in B.

**Space Complexity: O(1)**

I only use two pointers and do not create additional data structures.

## 4. Reflection / Improvement

A more efficient approach uses two pointers that switch to the other list when they reach the end. This can achieve O(n + m) time and O(1) extra space. I would replace the nested loops with this two-pointer technique.
