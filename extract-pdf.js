import fs from 'fs';
import pdfParseModule from 'pdf-parse';

let pdfParse = pdfParseModule.default || pdfParseModule;

async function extract() {
    try {
        let dataBuffer = fs.readFileSync('public/tarifario-2026.pdf');
        let data = await pdfParse(dataBuffer);
        fs.writeFileSync('public/tarifario-2026-text.txt', data.text);
        console.log("Text extracted to public/tarifario-2026-text.txt");
    } catch (e) {
        console.error("Error:", e);
    }
}
extract();
