function validate()
{
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("password").value;
    if(email=="pavankumarchennamsetti970@gmail.com" && pwd=="Pavan@970")
    {
          window.open();
    }
    else{
        alert("email or password is incorrect:(");
        return false;
    }
}