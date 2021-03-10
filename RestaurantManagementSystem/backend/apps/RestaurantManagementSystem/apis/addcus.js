const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);

const Customer = require('../../models/customer.model');
//const app=express();
//const bodyParser=require('../3p/node_modules/body-parser');
//app.use(bodyParser.json());
const mongoConnection=require('../models');

const Customer=require('../models/customer.model');
mongoConnection();


exports.doService =  (jsonReq) =>{
   if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

   return new Promise((resolve, reject) => {
    try {
         const cus=new Customer();
          cus.username=jsonReq.user
          emp.password=jsonReq.pass
          emp.mobile=jsonReq.mobilenumber
          emp.email=jsonReq.emails;
          
          emp.save((err,doc)=>{
              if(!err){
                console.log(doc);
                 return resolve(doc);
              }
              else{
                  console.log("error during adding records"+err.message);
                  return resolve(err);
              }
        
          });
        }
        catch(err){
            console.log(err);
            return false;
        }
});

}

const validateRequest = jsonReq => (jsonReq&&jsonReq.user&&jsonReq.pass&&jsonReq.mobilenumber&&jsonReq.emails);

//const validateUpdate=jsonReq=>(jsonReq&&jsonReq.id);