const fs = require("fs");

/** write in file synchronously if file does not exist then create file and write there */
// fs.writeFileSync("./text.js", "console.log('heloo')");


/** write in file asynchronously if file does not exist then create file and write there */
// fs.writeFile("./text.text", "hellow\n guys ", (err)=>{});


/** read file synchronously, it return file content  */
// const file = fs.readFileSync('./text.text', 'utf-8');
// console.log(file);


/** read file asynchronously, it does not return file content  */
// fs.readFile("./text.text", 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

/** append data in any existing file synchronously  */
// fs.appendFileSync('./text.text', `${Date.now()} today is ${Date.now().toLocaleString()}\n`);


/** append data in any existing file asynchronously  */
// fs.appendFile('./text.text', "hello\n", (err)=>{})


/** copy data from existing file to any existing file synchronously  */
// fs.copyFileSync("./text.text", "./text.js");
// fs.cpSync("./text.js", './text.text')



/** copy data from existing file to any existing file asynchronously  */
// fs.copyFile("./text.text", './text.js',(err)=>{})
// fs.cp('./text.js','./text.text', (err)=>{})


 /** make directory synchronously  */
 // fs.mkdirSync("./dir/a/");
 // fs.mkdirSync("./dir/m/",{recursive:true});
 

 /** make directory asynchronously  */
//  fs.mkdir('dir',(err)=>{})


/** check status of existing file  */
// console.log(fs.statSync('./text.text'))


/** Delete existing file only */
// fs.unlinkSync('./text.js');

/** rename file */
//fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });