class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCount = new Map()
        if(s.length !== t.length) return false

        for(const letter of s){
            charCount.set(letter, (charCount.get(letter) ?? 0) +1)
        }
        for(const letter of t){
            if(charCount.get(letter)){
                charCount.set(letter, charCount.get(letter)-1)
            } else{
                return false;
            }
        }
        return true;
    }
}
