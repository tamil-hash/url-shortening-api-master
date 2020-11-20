const express = require('express');
const bodyParser = require('body-parser');
const https=require('https');
const ejs= require('ejs');
const app = express();

var SL_arr =[];
var OL_arr=[];
var button="<button type='button' class='copied' name='button'>Copy</button>";


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');



app.get("/",function(req,res){
  res.render('index',{originallinks:OL_arr,
                      shortenlinks:SL_arr
                    });
});

app.post("/",function(req,res){
  var link = req.body.link;
  var url="https://api.shrtco.de/v2/shorten?url="+link;
  https.get(url,function(response){
    response.on('data',function(data){
      var shortenlink = JSON.parse(data).result.short_link;
      var originallink = JSON.parse(data).result.original_link;
      SL_arr.push(shortenlink);
      OL_arr.push(originallink);
      res.redirect("/");
      });
  });
});

app.listen(process.env.PORT||3000);
