class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCount = new Map();
        if(s.length !== t.length) return false;

        for (const letter of s){
            charCount.set(letter, (charCount.get(letter) ?? 0) +1 )
        }

        for (const letter of t){
            const count = charCount.get(letter);
            if(!count) return false;
            charCount.set(letter, count -1);
        }

        return true;

}
}
