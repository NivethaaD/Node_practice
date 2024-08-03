const fs=require('fs');

const requestHandler=(req,res)=>{

    
const url=req.url;
const method=req.method;

if(url==='/')
{
     res.setHeader('Content-type','text/html');
     res.write('<html>');
     res.write('<head><title>Jvl code</title></head>');
     res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><input type="submit" value="send"/></form></body>')
 // res.write('<body><h1>hi</h1></body>');
     res.write('</html>');
    return  res.end();
}

//req redirect
if(url==='/message' && method=="POST")
{
     const body=[];
     req.on('data',(chunk)=>{
         //console.log("chunk:");
         //console.log(chunk);
         body.push(chunk);
     })
     req.on('end',()=>{
         const parsedBody=Buffer.concat(body).toString();
         console.log(parsedBody);
     })
     fs.writeFileSync('hello.txt',"Dummy");
     res.setHeader('Location','/');
     res.statusCode=302;
     return res.end();
}

res.setHeader('Content-type','text/html');
res.write('<html>');
res.write('<head><title>Jvl code</title></head>');
// res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><input type="submit" value="send"/></form></body>')
res.write('<body><h1>hi</h1></body>');
res.write('</html>');
res.end();
}

module.exports=requestHandler;