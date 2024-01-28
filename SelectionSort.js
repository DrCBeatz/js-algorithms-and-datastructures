function SelectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min_index]) {
                min_index = j;
            }
        }
        if (min_index !== i) {
            [nums[i], nums[min_index]] = [nums[min_index], nums[i]];
        }
    }
    return nums;
}

console.log(SelectionSort([5, 4, 3, 2, 1]))