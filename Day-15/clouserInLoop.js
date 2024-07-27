function createFunArray() {
    const funcArray = []

    function generateInnerFunction(index) {
        return function () {
            console.log(index);

        };
    }

    for (let i = 0; i <= 5; i++) {
        funcArray[i] = generateInnerFunction(i)
    }

    return funcArray
}

const funcArray = createFunArray()
funcArray[0]()
funcArray[1]()
// funcArray[2]()
funcArray[3]()
uncArray[4]()