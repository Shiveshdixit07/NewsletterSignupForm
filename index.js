


function setError(){
    error=document.querySelector('.errorHeading');
    error.style.display="inline";
    inputEmail= document.querySelector('.inputEmail');
    inputEmail.classList.add("errorInput");
}

function validateForm()
{
    
    var s=true;
    form=document.myform;
    email=form.email.value;
    var i=0;
    let flag=0,flag2=0;    
    if(email[email.length-4]=='.' && email[email.length-3]=='c' && email[email.length-2]=='o' && email[email.length-1]=='m'){
        flag2++;
    }
    while(i<email.length){
        if(email[i]=='@'){
            
            flag++;
        }
        i++;   
    }
    if(flag!=1 || flag2!=1){
        setError();
        s=false;
    }
    if(s==true){

        localStorage.setItem("emailId",email);
    }
    return s;
}