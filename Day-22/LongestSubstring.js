function longestStr(str) {
    let charMap = new Map()
    let left = 0;
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (charMap.has(str[i])) {
            left = Math.max(charMap.get(str[i]) + 1, left);
            console.log(charMap.get(str[i]));
            console.log(left);
        }
        console.log(charMap);
        charMap.set(str[i], i)
        maxLength = Math.max(maxLength, i - left + 1);
    }

    return maxLength
}

console.log(longestStr("dbjkbd"));