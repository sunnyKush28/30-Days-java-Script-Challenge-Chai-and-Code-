import exportDefault from "./DefaultExport.js";
import { nameExportAdd, nameExportDiv, nameExportMult, nameExportSub } from "./NameExports.js";
import modules from './ImportingEntireModule.js'


console.group('Oprations')
console.log(`ADD: ${nameExportAdd(10, 8)}`);
console.log(`DIV: ${nameExportDiv(10, 8)}`);
console.log(`SUB: ${nameExportSub(10, 8)}`);
console.log(`MULTI: ${nameExportMult(10, 8)}`);
console.groupEnd()

exportDefault()

//activity-03

console.group('Oprations Form entire module')
console.log(`${modules.string}`);
console.log(`${modules.number}`);

console.log(`ADD: ${modules.nameExportAdd(10, 8)}`);
console.log(`DIV: ${modules.nameExportDiv(10, 8)}`);
console.log(`SUB: ${modules.nameExportSub(10, 8)}`);
console.log(`MULTI: ${modules.nameExportMult(10, 8)}`);
console.groupEnd()