function MergeSort(nums) {
    if (nums.length > 1) {
        let mid = Math.floor(nums.length / 2);
        const L = nums.slice(0, mid);
        const R = nums.slice(mid);

        MergeSort(L);
        MergeSort(R);

        let i = 0, j = 0, k = 0;

        while (i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                nums[k] = L[i];
                i++;
            } else {
                nums[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < L.length) {
            nums[k] = L[i];
            i++;
            k++;
        }

        while (j < R.length) {
            nums[k] = R[j];
            j++;
            k++;
        }
    }
    return nums;
}

console.log(MergeSort([5, 4, 3, 2, 1]))