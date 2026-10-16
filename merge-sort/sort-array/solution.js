var sortArray = function(nums) {
    const n = nums.length;

    function heapify(size, root) {
        while (true) {
            let largest = root;
            const left = 2 * root + 1;
            const right = 2 * root + 2;

            if (left < size && nums[left] > nums[largest]) {
                largest = left;
            }

            if (right < size && nums[right] > nums[largest]) {
                largest = right;
            }

            if (largest === root) {
                break;
            }

            [nums[root], nums[largest]] = [nums[largest], nums[root]];
            root = largest;
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapify(i, 0);
    }

    return nums;
};