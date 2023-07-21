const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const port=5500;
const Http=require('https');

//use middleware


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.get("/",function(request,response)
{
    response.sendFile(__dirname + "/index.html");
})


app.listen(process.env.PORT || port,function()
{
    console.log("Server is running successfully");
})
