// Named Export:

// A module can have multiple named exports.
// Imported using the exact name.
// Syntax: export { value1, value2 };

function nameExportAdd(a, b) {
    return a + b
}

function nameExportSub(a, b) {
    return a - b
}

function nameExportDiv(a, b) {
    return a / b
}

function nameExportMult(a, b) {
    return a * b
}

export {
    nameExportAdd,
    nameExportDiv,
    nameExportMult,
    nameExportSub
}