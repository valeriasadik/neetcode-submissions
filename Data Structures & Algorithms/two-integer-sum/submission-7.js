class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const saveIndex = new Map();  
    let complement;
    for(let i = 0;  nums.length > i; i++ ){
      complement = target - nums[i];
      if(!saveIndex.has(complement)){
        saveIndex.set(nums[i], i);
      } else{
        return [saveIndex.get(complement), i]
      }

  }
}
}