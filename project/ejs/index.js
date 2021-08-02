// install the backend folder - npm init 
// install the backend folder - npm i express cors body-parser monogodb --save 

var express = require('express');
var cors = require('cors'); // response come from origin 
var bodyParser = require('body-parser'); // post request ke kaam aayega 
var MongoClient = require('mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectId;


var app = express();

app.use(cors());
var client = new MongoClient("mongodb+srv://serviceproject:serviceproject@cluster0.gww62.mongodb.net/services?retryWrites=true&w=majority",{useNewUrlParser:true , UseUnifiedTopology:true});
// username,password : serviceproject
// mongodb+srv://serviceproject:serviceproject@cluster0.gww62.mongodb.net/services?retryWrites=true&w=majority"
var connection;
// connection establish
client.connect((err,db)=>{
      if(!err)
      {
          connection = db;
          console.log("database connected Successfully");
      }
      else{
          console.log("database could not connect");
      }
})

app.get('/list-product',(req,res)=>{
    var studentCollection =connection.db('services').collection('AddDetails');   
    studentCollection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.get('/delete-product',(req,res)=>{
    var studentCollection =connection.db('services').collection('AddDetails');   
    studentCollection.remove({_id:ObjectId(req.query.id)},(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"product deleted succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/create-product',bodyParser.json(),(req,res)=>{
    var studentCollection =connection.db('services').collection('AddDetials');   
    studentCollection.insert(req.body,(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"Product Created succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

// app.post('/update-product',bodyParser.json(),(req,res)=>{
//     var studentCollection =connection.db('serivces').collection('AddDetails');     
//                                                                     //    req send to createstudent  
//     studentCollection.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.name ,age:req.body.age ,marks:req.body.marks, email:req.body.email , city:req.body.city  }},(err,result)=>{
//         if(!err)
//         {
//             res.send({status:"ok",data:"Product update succesfully"});
//         }
//         else{
//             res.send({status:"failed",data:err});
//         }
//     })
// });

app.get('/list-users',(req,res)=>{
    var studentCollection =connection.db('services').collection('users');   
    studentCollection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});
app.get('/users-by-id',(req,res)=>{
    var studentCollection =connection.db('services').collection('users');   
    studentCollection.find(_id.ObjectId(req.query.id)).toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.get('/delete-users',(req,res)=>{
    var studentCollection =connection.db('services').collection('users');   
    studentCollection.remove({_id:ObjectId(req.query.id)},(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"user deleted succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/create-users',bodyParser.json(),(req,res)=>{
    var studentCollection =connection.db('services').collection('users');   
    studentCollection.insert(req.body,(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"user Created succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/update-users',bodyParser.json(),(req,res)=>{
    var studentCollection =connection.db('services').collection('users');     
                                                                    //    req send to createstudent  
    studentCollection.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.name ,phone:req.body.phone ,address:req.body.address, email:req.body.email , password:req.body.password  }},(err,result)=>{
        if(!err)
        {
            res.send({status:"ok",data:"users update succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/login-users',bodyParser.json(),(req,res)=>{
    var userlogin=connection.db('services').collection('users');  
    console.log(req.body);
    userlogin.findOne({email:req.body.email, password:req.body.password},function(err,result){
        if(!err){
            console.log("153");
            console.log(result);
            res.send(result)
        }
        else
        {
          res.send({err})
        }       
    })
})

// app.get("/login-users",(req,res)=>{
//     res.render("login");
// })

// app.post("/login", async (req,res)=>{
//     var studentCollection =connection.db('services').collection('users');   
//     try {
//         const email = res.body.Email;
//         const password = res.body.Password;

//         console.log(`${email} and password is ${password}`);
//     } catch (error) {
//         res.status(400).send("invalid Email and password")
//     }
// })


app.listen(3001, ()=>{
    console.log("Server is started on port 3001");
})

