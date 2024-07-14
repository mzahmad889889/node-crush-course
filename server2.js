import {createServer} from 'http'
const PORT = process.env.PORT

const users = [
    {id:1, name:'zubair', Designation: 'BSSE'},
    {id:2, name:'Ahmad', Designation: 'BSSE'},
    {id:3, name:'khan', Designation: 'BSSE'}
]

// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.url}, ${req.url}`)
    next();
}

//json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next();
}

//Get users Handler
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end()
}

//Get UsersById Handler
const getUsersByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user)=>user.id===parseInt(id))
    if(user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not Found'}));
    }
    res.end();
}

//NotFound Middleware
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not Found'}));
    res.end()
}

// Post middle for POST /api/users
const createPostHandler = (req, res) => {
    let body = '';
    req.on('data', (chunk) =>{
    body+=chunk.toString();
    })
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser))
        res.end();
    })

}

const server = createServer((req,res) =>{
    logger(req,res, () => {
        jsonMiddleware(req, res, () =>{
            if(req.url==='/api/users' && req.method==='GET'){
                getUsersHandler(req, res);
               }else if(req.url.match(/\/api\/users\/([0-9+])/) && req.method==='GET'){
                getUsersByIdHandler(req,res);
               } else if(req.url==='/api/users' && req.method==='POST'){
                 createPostHandler(req,res);
               }
               else{
                notFoundHandler(req,res)
            }
        })
    })
})

server.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`)
})