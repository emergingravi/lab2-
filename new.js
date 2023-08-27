function onsubmit(event){
    //this is to prevent thet page from being refresh after submit
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var license=document.
    
    document.getElementById("formData").innerHTML="Name : "+ name +" <br>Email :" + email +"<br> Gender : " + gender;
}
window.onload=function(){
    // window.alert("hello .js");
     document.getElementById("contactForm").addEventListener('submit',onsubmit);
}