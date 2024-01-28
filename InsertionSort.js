function InsertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i];
        let j = i - 1;
        while (j >= 0 && key < nums[j]) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key;
    }
    return nums;
}

console.log(InsertionSort([5, 4, 3, 2, 1]))