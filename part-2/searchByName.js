// 40: searchByName.js script prints the client id and rep_name for all
// clients whose rep_name starts with the provided name argument.
const fs = require('fs');

const input = process.argv.slice(2).join(' ');
const filename = './clients.json';
const clients = JSON.parse(fs.readFileSync(filename));
let startedPrinting = false;

console.log(`Finding clients with name "${input}"...\n[{`);
clients.forEach((element) => {
  if (element.rep_name.toLowerCase().startsWith(input.toLowerCase())) {
    if (startedPrinting) console.log('},\n{');
    startedPrinting = true;
    console.log(`  "id": "${element.id}",\n  "rep_name": "${element.rep_name}"`);
  }
});
console.log('}]');
