First Bad Version

## 1. Problem
During developing, some bug occured in some project version, so every version 
after this invalid will be also bad.

## 2. Approach
In this problem i decided to use binary search and start right from the middle of 
list.
so the concept is: 
1. or the bad version is right on the mid
2. or it is a bit more towards left side
if none of it, we shrink search scope of left `left = mid + 1`

so the cylce will continue while we do not find first bad version from left side  or (therefore) we do not go to the end of the right side


## 3. Time Complexity
lets see if we can find steps formula by tracing method
1. mid = n/2
2. mid = n/4
3. mid = n/8
i can see regularity: n/2^k
k = log(2)n
it is logarithmic !


time complexity = O(logn)

## 4. Space Complexity
created variables:
- left
- right
- mid
so it's 3
and constantly - 1

space complexity = s(1)


## 5. Reflection / Enviroment

- can there be more efficient approach?
i think there is no more efficient method

- what would you need to change?
nothing

- what complexity could the improved solution achieve
more fast search. as i know logarithmic algorithm is not very fast.
