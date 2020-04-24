const fs = require('fs');
const path = process.argv[2];
const util = require('util');

const getFileContents = async (path) => {
   try {
       let exists, stats, buffer;
       
       const promisifyFsExists = util.promisify(fs.exists);
       const exists = await promisifyFsExists(path);
       
       if (!exists) {
           throw Error("File does not exist");;
       }
       console.log('exists');
       try {
           const promisifyFsStat = util.promisify(fs.stat);
           stats = await promisifyFsStat(path);
           console.log(stats);
       } catch (err) {
           throw Error('Error trying to get stats');
       }
       
       if (stats && stats.size <= 0) {
           throw Error('File exists but there is no content');
       }
       try {
           const promisifyFsReadFile = util.promisify(fs.stat)
           buffer = await promisifyFsReadFile(path);
           console.info('File was found and the contents were loaded');
       }
       catch (err) {
           throw Error('Error trying to get stats');
       }
   } catch (err) {
       console.error(`There was an error getting contents for ${path}`, err);
   }
}

getFileContents(path);
