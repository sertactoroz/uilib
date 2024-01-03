const fs = require("fs")
// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// const { readFile } = require('node:fs/promises');
// const { resolve } = require('node:path');
// async function logFile() {
//     try {
//         const filePath = resolve('message.txt');
//         const contents = await readFile(filePath, { encoding: 'utf8' });
//         console.log(contents);
//     } catch (err) {
//         console.error(err.message);
//     }
// }
// logFile();