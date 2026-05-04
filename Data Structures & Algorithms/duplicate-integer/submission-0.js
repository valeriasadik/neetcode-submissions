class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seeing = new Set();

        for (const num of nums){
            if(seeing.has(num)) return true;
            seeing.add(num);
        }
    return false;
    }
}
