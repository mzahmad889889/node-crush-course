import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url)
const __direname = path.dirname(__filename);
const server = http.createServer(async(req,res)=>{
    // res.setHeader('Content-Type','text/html')
    // res.statusCode=404;
    // res.write('<h1>Hello world</h1>')
    try {
        if(req.method==='GET'){
            let filepath;
            if(req.url==='/'){
                filepath = path.join(__direname, 'public', 'index.html')
            }else if(req.url==='/about'){
                filepath = path.join(__direname, 'public', 'about.html')
            }else{
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end();
        } else{
            throw new Error("Method Not Allowed")
        }
    } catch (error) {
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end('Internal Server Error')
    }

})

server.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})