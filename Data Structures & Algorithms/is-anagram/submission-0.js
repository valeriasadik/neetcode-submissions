class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const addLetter = new Map();
        for ( const letter of s.split('')){
            if(addLetter.get(letter)){
                addLetter.set(letter, addLetter.get(letter) + 1);
            } else{
                addLetter.set(letter, 1);
            }
        }

        for (const letter2 of t.split('')){
                if(addLetter.get(letter2)){
                addLetter.set(letter2, addLetter.get(letter2) - 1);
            } else{
               return false;
            }
        }
            return true;
    }
}
