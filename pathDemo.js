import path from 'path'
import url from 'url'

const filepath = 'look/zubair/ahmad/text.txt';

// basename()
const Path = path.basename(filepath);
console.log(Path)

//dirname()
console.log(path.dirname(filepath));

//extname()
console.log(path.extname(filepath))

//parse()
console.log(path.parse(filepath))

const __filename = url.fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);
console.log(__filename, __direname);

//join()
const PathJoin = path.join(__direname, 'khan', 'afridi.file')
console.log(PathJoin)

//recover
const PathResolve = path.resolve(__direname, 'khan', 'afridi.file')
console.log(PathResolve)