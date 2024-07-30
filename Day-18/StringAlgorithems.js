function countOccaranceOfChr(str) {
    const objCount = new Map()
    for (let i = 0; i <= str.length - 1; i++) {
        // objCount.set(str[i], count = 1)
        // for (let j = 0; j <= str.length; j++) {
        //     if (str[i] === str[j]) {
        //         objCount.set(str[i], count++)

        //     }
        // }



        const char = str[i];
        if (objCount.has(char)) {
            objCount.set(char, objCount.get(char) + 1);
        } else {
            objCount.set(char, 1);
        }
    }
    return objCount
}

const str = "asnakb;bnkl.anbcvnhlbb;asdabv"

console.log(countOccaranceOfChr(str));