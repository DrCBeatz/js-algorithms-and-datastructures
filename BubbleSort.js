function BubbleSort(nums) {

    const length = nums.length - 1
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            if (nums[j + 1] < nums[j]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

console.log(BubbleSort([5, 4, 3, 2, 1]))