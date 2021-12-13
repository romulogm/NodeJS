//Modules
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
module.exports = Person;

const Person = require('person');

//Module Wrapper Function
function (exports, require, module, __filename, __dirname) {}



// Path Module

// base file name
path.basename(__filename);


// directory name

path.dirname(__filename)

//File extension
path.extname(__filename)

//Create path object - retorna um objeto com diversas infos sobre o path
path.parse(__filename) 

//Concatenate paths
path.join(__dirname, 'novapasta', 'hello.html')


//File System Module


// create folder
const fs = require('fs');
const path = require('path');
const { url } = require('inspector');

fs.mkdir(path.join(__dirname, '/teste'), {}, (err) => {
    if (err) throw err;
    console.log("Folder created...")
});

// create and write to file

fs.writeFile
fs.appendFile
fs.readFile
fs.rename


// OS Module - gives information about environment, OS

//Platform specific
os.platform()
//cpu arch
os.arch()
//cpu core info -> gives an object with information about all cores
os.cpus() 

//free memory info 
os.freemem()

//total memory
os.totalmem()

//home directory
os.homedir()

//uptime - amount of time ur system has been up
os.uptime()


// URL Module

const url = require('url');

const myurl = new URL('http://localhost:8080/index.html');

//serialized url - gives u the URL
myUrl.href;
myurl.toString();

//Host (root domain)
myUrl.host;
myUrl.hostname; // doesnt give the port number

//pathname 
myUrl.pathname;

//serialized query
myUrl.search; //

//params object
myUrl.searchParams; // returns object with values os URL parameters

//add param
myUrl.searchParams.append('abc', '123');

//loop through parameters
myUrl.searchParams.forEach((value, name) => )


//Events 

const EventEmitter = require('events');
 
//Create Class
class MyEmitter extends EventEmitter {  }

//Init Object
const myEmitter = new MyEmitter();

//Event Listener 
myEmitter.on('event', () => )

//Init Event
myEmitter.emit('event');

//HTTP module

const Http = require('http');

//create server Object

http.createServer((req, res) =>
    //write response
    res.write('Hello World');
    res.end()
}).listen(5000), () => console.log('hello world');



 



