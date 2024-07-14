// import fs from 'fs'
import fs from 'fs/promises'

// fs.readFile('./text.txt', 'utf8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });

// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data)

// readfile - promise/fs

// fs.readFile('./text.txt', 'utf8')
//  .then((data) => console.log(data))
//  .catch((error) => console.log(error))

// const readFile = async() => {
//     try{
//         const data = await fs.readFile('./text.txt', 'utf8');
//         console.log(data)
//     } catch(error){
//         console.log(error)

//     }
// }

// const writeFile = async() => {
//     try{
//         await fs.writeFile('./text.txt', 'This is M Z AHMAD')
//         console.log('text added')
//     }
//     catch(error){
//         console.log(error)
//     }
// }

const appendFile = async() => {
    try {
        await fs.appendFile('./text.txt', "\n I want to add this txt in new line");
        console.log('text appended')
    } catch (error) {
        console.log(error)
    }
    
}

appendFile();
// writeFile();
// readFile();

