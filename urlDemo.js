import url, { URLSearchParams } from 'url'

const urlPath = 'https://www.google.com/search?q=hello+world';

const urlObj = new URL(urlPath);

console.log(urlObj);

//format()
console.log(url.format(urlObj))

//import.meta.url
console.log(import.meta.url)

const Url = url.fileURLToPath(import.meta.url)
console.log(Url)

console.log(urlObj.search)

const param = new URLSearchParams(urlObj.search)
console.log(param.get('q'))
param.append('limit', '5')
param.delete('limit')
console.log(param)