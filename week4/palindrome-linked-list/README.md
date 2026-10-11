# Palindrome Linked List

## 1. Problem

I need to check whether a linked list reads the same forward and backward.

Example: `1 -> 2 -> 2 -> 1` is a palindrome, but `1 -> 2 -> 3` is not.

## 2. Approach

I copy all node values into a Python list. Then I compare this list with its reversed version. If they are equal, the linked list is a palindrome.

**Tracing example:**

Input: `1 -> 2 -> 2 -> 1`

1. I visit the first node and store `1`.
2. I visit the second node and store `2`.
3. I visit the third node and store another `2`.
4. I visit the last node and store `1`.
5. The resulting list is `[1, 2, 2, 1]`. Its reversed version is `[1, 2, 2, 1]`.
6. Both lists are equal, so I return `True`.

A challenge was realizing that a singly linked list cannot be traversed backward directly. Copying its values into a Python list makes the comparison simpler.

## 3. Time Complexity

**Time Complexity: O(n)**

I traverse the linked list once and compare the stored values with their reversed order. Both operations take linear time.

**Space Complexity: O(n)**

I store all `n` node values in an additional Python list. Reversing the list with slicing also creates a copy, but the total auxiliary space remains O(n).

## 4. Reflection / Improvement

A more memory-efficient approach is to find the middle of the linked list, reverse the second half, and compare both halves. This achieves O(n) time and O(1) auxiliary space if the list is reversed in place. The implementation is more complicated because I must manage pointers and handle odd-length lists correctly.
