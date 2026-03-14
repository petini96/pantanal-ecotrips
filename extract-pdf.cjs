const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/tarifario-2026.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('public/tarifario-2026-text.txt', data.text);
    console.log("Text extracted to public/tarifario-2026-text.txt");
}).catch(console.error);
