/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";

const insert=async()=>{
    try{
    let username = add_customer.shadowRoot.getElementById("username").value;
    let passward = add_customer.shadowRoot.getElementById("password").value;
    let mobile =add_customer.shadowRoot.getElementById("mobile").value;
    let email = add_customer.shadowRoot.getElementById("email").value;
    

    console.log(username);
    console.log(passward);
    console.log(mobile);
    console.log(email);

 
    let respObj = await apiman.rest(APP_CONSTANTS.ADD_CUS, "POST", {username,passward,mobile,email}, false, false);
    console.log(respObj);

    if(!respObj.result) {
        
        alert("Please Enter valid data");
    }
    else{
      
        console.log(" Data Submitted");
        alert("Data inserted");
        
   router.reload();
        
    }
    
    //router.reload();
}catch(err){
    console.log(err);
}
}

const allCus=()=>{
    router.loadPage(APP_CONSTANTS.LIST_HTML);
}

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("add-customer", `${APP_CONSTANTS.APP_PATH}/components/add-customer/add-customer.html`, add_customer);
}


const trueWebComponentMode =true;	// making this false renders the component without using Shadow DOM

export const add_customer = { trueWebComponentMode, register, insert ,allCus}

