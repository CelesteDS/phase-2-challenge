// 40: searchByState.js script prints the client id, rep_name, company, city,
// and state that for all clients whose state matches the provided state argument.
const fs = require('fs');

const input = process.argv.slice(2).join(' ');
const filename = './clients.json';
const clients = JSON.parse(fs.readFileSync(filename));
let startedPrinting = false;

console.log(`Finding clients in state "${input}"...\n\n[{`);
clients.forEach((element) => {
  if (element.state.toLowerCase() === input.toLowerCase()) {
    if (startedPrinting) console.log('},\n{');
    startedPrinting = true;
    console.log(`  "id": "${element.id}",\n  "rep_name": "${element.rep_name}",\n  "company": "${element.company}",\n  "city": "${element.city}",\n  "state": "${element.state}"`);
  }
});
console.log('}]');
