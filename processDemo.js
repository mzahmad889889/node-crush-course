//args
console.log(process.argv)
console.log(process.argv[3])

//process.env
console.log(process.env.OS)

//pid
console.log(process.pid)

//cwd()
console.log(process.cwd())

//title
console.log(process.title)

//memoyusage
console.log(process.memoryUsage());

//update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`Hello to the ${code}`)
})

//exit()
process.exit(0)

console.log('zubair')