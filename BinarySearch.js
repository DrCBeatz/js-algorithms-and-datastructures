function BinarySearch(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target > nums[mid]) {
            l = mid + 1;
        } else if (target < nums[mid]) {
            r = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5], 4) == 3)
console.log(BinarySearch([1, 2, 3, 4, 5], 9) == -1)
