const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('77 Intake Schedule and Fees (C2 2026 Exam) v010426C.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log("Extracted successfully.");
}).catch(e => {
    console.error(e);
});
