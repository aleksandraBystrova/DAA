# Binary search

## 1. Problem
There is a list of numbers, in which we are searching our tagret number.

## 2. Approach
I decided to go trought the whole list from its start. When I find target (by 
comparing given target and list's item), i return the index of it. In other case, 
i return -1

## 3. Time Complexity
There is only one cycle (for), and its complexity is n+1. other lines i can skip 
because they are constants.

time complexity = O(n)

## 4. Space Complexity
here i create only 1 variable - i. so the space it takes - 1.
S(1)

## 5. Reflection / Enviroment

- can there be more efficient approach?
sure. i think i can go from both start and end size moving to the center to find 
target more quickly

- what would you need to change?
nothing. i am fully pleased  with my solution

- what complexity could the improved solution achieve
find target more efficiently.

