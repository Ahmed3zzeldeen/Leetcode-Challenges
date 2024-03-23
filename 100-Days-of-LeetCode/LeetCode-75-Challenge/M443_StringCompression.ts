function compress(chars: string[]): number {
    let i = 0;
    let j = 0;
    while (i < chars.length) {
        let count = 0;
        let currentChar = chars[i];
        while (i < chars.length && chars[i] === currentChar) {
            i++;
            count++;
        }
        chars[j] = currentChar;
        j++;
        if (count > 1) {
            for (let c of count.toString().split('')) {
                chars[j] = c;
                j++;
            }
        }
    }
    return j;
};

compress(["a","a","b","a","c","c","c"]) // ["a","2","b","a","c","3"]
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]) // ["a","b","1","2"]