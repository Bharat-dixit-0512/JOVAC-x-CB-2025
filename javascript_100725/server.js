// var figlet = require("figlet");
// const fs =require("fs");


// figlet("Bharat", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//Write File
// fs.writeFileSync("text.txt","Hello World",(err,data)=>{
//     if(err){
//         console.log("Error occured");

//     }
//     console.log(data);
// })

// read file

// fs.readFile("text.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data);
// })


//append file

// fs.appendFile("text.txt","\nMy Hello World",(err)=>{
//     if(err){
//         console.log("Error occured");
//     }
//     console.log("File updated successfully");
// })


//rename file
// fs.rename("text.txt","my.txt",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log("yes file ka name change ho gya");
    
// })

// delete file
// fs.unlink("my.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file deleted successfully");
    
// })



// create folder
// fs.mkdir("newFolder",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("folder created");
    
// })

// fs.readdir("newFolder",(err,file)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("folder read :", file);
    
// })


// fs.rmdir("newFolder",{ recursive : true },(err)=>{
//     if(err){
//         console.log("folder path not found :",err);
//     }else{
//         console.log("folder deleted successfully"); 
//     }
// })
