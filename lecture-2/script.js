const { isUtf8 } = require('buffer');
let fs = require('fs/promises');
const { dirname } = require('path');

let path = __dirname + '/data.txt';

fs.appendFile(path,"GuDhaniya",'utf8')
.then(() => console.log('File appended'))
.catch((err) => console.error(err));


// fs.readFile(path, 'utf8')  
//     .then((data) => {  
//         console.log(data);
//     })
//     .catch((err) => {  
//         console.log(err);
//     });



// fs.readFile(path, (data,err)=>{
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log("chirak diya");
//     }
// })