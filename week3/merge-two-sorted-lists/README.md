First, I create a dummy node to make it easier to build the merged list. Then I compare the values of both lists and add the smaller one to the result. I repeat this until one of the lists becomes empty. Finally, I attach the remaining elements and return the merged list.

Step 1: Compare 1 and 1. Choose 1 from list1. Result: [1]

Step 2: Compare 2 and 1. Choose 1 from list2. Result: [1, 1]

Step 3: Compare 2 and 3. Choose 2 from list1. Result: [1, 1, 2]

Step 4: Compare 4 and 3. Choose 3 from list2. Result: [1, 1, 2, 3]

Step 5: Compare 4 and 4. Choose 4 from list1. Result: [1, 1, 2, 3, 4]

Step 6: list1 is empty, so attach the remaining element 4 from list2. Result: [1, 1, 2, 3, 4, 4]

Final output: [1, 1, 2, 3, 4, 4]
