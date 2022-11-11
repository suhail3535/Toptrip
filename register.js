



let form=document.querySelector("form");
 
let Bag=JSON.parse(localStorage.getItem("masai"))||[]
form.addEventListener("submit",function(event){
    event.preventDefault();
    
let obj={
    email:form.Email.value,
    mobile:form.mobile.value,
    pass:form.pass.value
    }
    Bag.push(obj)
    if (obj.email == "" || obj.mobile == "" || obj.pass == "") {
       alert(" please fill the details")
    } else {
        
        localStorage.setItem("masai", JSON.stringify(Bag))
        alert("Welcome you are successfully Register, Please click on signIn")

   }
   

   

})



