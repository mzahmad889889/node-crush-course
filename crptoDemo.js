import crypto, { createCipheriv, randomBytes } from 'crypto'

//createhash
// const Hash = crypto.createHash('Sha256');
// Hash.update('password123');
// console.log(Hash.digest('hex'))

// //randomBytes
// crpto.randomBytes(16, (err, buf) => {
//     if (err) throw err
//     console.log(buf.toString('hex'))
// })

//createcipheriv & creasetDecipheriv

const algorithm = 'aes-256-cbc';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypt = cipher.update("This is zubair", 'utf8', 'hex') 
encrypt += cipher.final('hex')
console.log(encrypt)

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypt = decipher.update(encrypt, 'hex', 'utf8') 
decrypt += decipher.final('utf8')
console.log(decrypt)