I use two pointers, slow and fast. The slow pointer moves one step at a time, and the fast pointer moves two steps. If they meet, it means there is a cycle in the linked list. If the fast pointer reaches the end, there is no cycle.
Tracing method:

Input: head = [3, 2, 0, -4], where the last node points back to the node with value 2.

Step 1: Slow is at 3, and fast is at 3.

Step 2: Slow moves to 2, and fast moves to 0.

Step 3: Slow moves to 0, and fast moves to 2.

Step 4: Slow moves to -4, and fast moves to -4. Both pointers meet, so the function returns true.

Final output: true

The main idea is that if a cycle exists, the fast pointer will eventually catch up with the slow pointer. If there is no cycle, the fast pointer will reach null.

Time complexity: O(n).

Space complexity: O(1)
