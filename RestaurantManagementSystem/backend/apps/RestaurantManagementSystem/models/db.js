const mongoose = require("../3p/node_modules/mongoose");

mongoose.connect(
  "mongodb://localhost:27017/CustomerDB",
  { useUnifiedTopology: true ,useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

const Customer=require('./customer.model');
module.exports =Customer;
Customer.find((err,docs)=>{
    if(!err) {
        console.log(docs);
        
    }
    else 
        console.log("error");
})

const cus=new Customer();
cus.username="Prashant Choubey";
cus.password="helloworld";
cus.mobile="8130269652";
cus.email="prashantchoubey174@gmail.com";
cus.save((err,doc)=>{
    if(!err){
      console.log(doc);
      
     
    }
    else{
        console.log("error during adding record"+err.message);
      
    }
});