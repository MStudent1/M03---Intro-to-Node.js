const fs = require('fs');

//Read Stream
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});
//Write Stream
const writeStream = fs.createWriteStream('./docs/blog3.txt', {encoding: 'utf-8'});

// readStream.on('data', (chunk) => {
//     console.log("---------  NEW CHUNK  ---------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
