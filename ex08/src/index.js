let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

const unionSet = new Set([...one].concat(...two));
const intersectionSet = new Set([...one].filter((x) => [...two].includes(x)));
const differenceSet = new Set([...one].filter((x) => ![...two].includes(x)));

console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

module.exports = { unionSet, intersectionSet, differenceSet };
