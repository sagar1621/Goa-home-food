// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
let mybutton = document.getElementById("myBtn1");



window.onscroll = function() {myFunction()};



function myFunction() {
  // if (window.pageYOffset > sticky) {
  //   navbar.classList.add("sticky");
  // } else {
  //   navbar.classList.remove("sticky");
  // }


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}










function btnFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "Read more";
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "Read less";
moreText.style.display = "inline";
}
}







// function confirmEmail() {
//   var email = document.getElementById("email-address").value
//   var confemail = document.getElementById("confirm-email").value
//   if(email != confemail) {
//       alert('Email Not Matching!');
//   }
// }

// function number(e){
  //   if (e.value.length > e.maxLength){
    //     e.value = e.value.slice(0, e.maxLength);
    //   } 
    // }
    
    
    // onblur="confirmEmail()"
    // oninput="number(this)"

// const mainform=document.getElementById('mainform');
// const email=document.getElementById('email-address');
// const cmail=document.getElementById('confirm-email');
// const pincode=document.getElementById('pincode');
// const  contact=document.getElementById('contactno');

// window.onload=function(){
//   mainform.addEventListener('submit', (e)=>{
//     e.preventDefault();
    
//     validate();
//   })
  
// }
// const isEmail=(email)=>{
//   let atSymbol=email.indexof("@");
//   if(atSymbol<1) return false;
//   let dot=email.lastindexof('.');
//   if(dot <= atSymbol +2) return false;
//   if(dot === email.length-1) return false;
//   return true;
// }

// const validate=()=>{
//   const email=email.value.trim();
//   const cemail=cemail.value.trim();
//   const pincode=pincode.value.trim();
//   const contact=contact.value.trim();

//   if(email===""){
//     setErrorMsg(email, 'email cannot be blank');
//   }else if(!isEmail(email)){
//     setErrorMsg(email, 'Not a valid email');
//   }else{
//     setSuccessMsg(email);
//   }



//   function setErrorMsg(input, errormsgs){
//     const formControl= input.parentElement;
//     const small=formControl.small.querySelector('small');
//     formControl.className="form-control error";
//     small.innerText=errormsgs;
//   }
// }
