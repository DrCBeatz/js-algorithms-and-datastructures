function QuickSort(nums) {
    if (nums.length <= 1) {
        return nums;   
    }

    const pivot = nums[nums.length - 1];

    const [larger, equal, smaller] = [[], [], []];

    for (let n of nums) {
        if (n > pivot) {
            larger.push(n);
        } 
        else if (n < pivot) {
            smaller.push(n);
        }
        else {
            equal.push(n);
        }
    }
    return [...QuickSort(smaller), ...equal, ...QuickSort(larger)]
}

console.log(QuickSort([5,4,3,2,1]))