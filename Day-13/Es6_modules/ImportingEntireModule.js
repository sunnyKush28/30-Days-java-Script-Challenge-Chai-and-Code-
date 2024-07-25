const string = "Hello Sir"
const number = 123456789

function nameExportAdd(a, b) {
    return (a + b) + 2
}

function nameExportSub(a, b) {
    return (a - b) - 2
}

function nameExportDiv(a, b) {
    return (a / b) / 2
}

function nameExportMult(a, b) {
    return (a * b) * 2
}

export default {
    string,
    number,
    nameExportAdd,
    nameExportDiv,
    nameExportMult,
    nameExportSub
}