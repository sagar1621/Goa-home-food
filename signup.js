
let mainform=document.getElementById('mainform');


document.addEventListener('DOMContentLoaded', function () {
    mainform.addEventListener('submit', (e)=>{
        e.preventDefault();
        validate();
      })
});
  

const isEmail=(emailval)=>{
  let atSymbol=emailval.indexOf("@");
  if(atSymbol < 1) return false;
  let dot=emailval.lastIndexOf('.');
  if(dot <= atSymbol + 2) return false;
  if(dot === emailval.length-1) return false;
  return true;
}

const  =('')=>{};

const validate=()=>{
    let email=document.getElementById('emailaddress');
    let cemail=document.getElementById('confirmemail');
    let pincode=document.getElementById('pincode');
    let  contact=document.getElementById('contactno');
   let emailval=email.value.trim();
   let cemailval=cemail.value.trim();
   let pincodeval=pincode.value.trim();
   let contactval=contact.value.trim();

  if(emailval===""){
    setErrorMsg(email, '*email cannot be blank');
  }else if(!isEmail(emailval)){
    setErrorMsg(email, '*Not a valid email');
  }else{
    setSuccessMsg(email);
  }

  if(contactval===""){
    setErrorMsg(contact, '*number cannot be blank');
  }else if(contactval.length != 10){
    setErrorMsg(contact, '*not a valid Phone Number');
  }else{
    setSuccessMsg(contact);
  }
  if(pincodeval===""){
    setErrorMsg(pincode, '*pincode cannot be blank');
  }else if(pincodeval.length != 6){
    setErrorMsg(pincode, '*not a valid pincode');
  }else{
    setSuccessMsg(pincode);
  }


  if(cemailval===""){
    setErrorMsg(cemail, '*please retype email');
  }else if(cemailval != emailval){
    setErrorMsg(cemail, '*emails do not match');
  }else{
    setSuccessMsg(cemail);
  }

  function setErrorMsg(input, errormsgs){
    const formControl= input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsgs;
  }

  function setSuccessMsg(input){
    const formControl= input.parentElement;
    formControl.className="form-control success";
  }

}
