const mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    username: {
        type: String
    },
    passward: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    }
});

mongoose.model('Customer', customerSchema);
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
emp.save((err,doc)=>{
    if(!err){
      console.log(doc);
      
     
    }
    else{
        console.log("error during adding record"+err.message);
      
    }
});
