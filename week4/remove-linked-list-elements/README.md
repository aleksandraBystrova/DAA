# Remove Linked List Elements

## 1. Problem

I need to remove all nodes whose values are equal to a given value and return the updated linked list.

Example: `1 -> 2 -> 6 -> 3 -> 6`, with `val = 6`, becomes `1 -> 2 -> 3`.

## 2. Approach

I create a dummy node before the head. Then I check the next node of the current pointer. If its value matches the target, I skip it. Otherwise, I move forward.

**Tracing example:**

Input: `1 -> 2 -> 6 -> 3 -> 6`, `val = 6`

1. I check `1`. It is not equal to `6`, so I move forward.
2. I check `2`. It is not equal to `6`, so I move forward.
3. I check `6`. It matches the target, so I skip this node.
4. I check `3`. It does not match, so I move forward.
5. I check the last `6` and remove it.

Output: `1 -> 2 -> 3`

One challenge was handling cases where the head itself must be removed. The dummy node makes this easier because I can remove the original head in the same way as any other node.

## 3. Time Complexity

**Time Complexity: O(n)**

I check each node at most once, where `n` is the number of nodes.

**Space Complexity: O(1)**

I create only one dummy node and use one pointer. I do not create a new list.

## 4. Reflection / Improvement

The solution is already optimal in time complexity because I must inspect every node to find all occurrences of the target value. The dummy node also simplifies handling edge cases without increasing the asymptotic complexity.
