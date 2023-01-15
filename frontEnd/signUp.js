async function takeUserDeatils(event){
 try{
    event.preventDefault();
    // console.log("inside-takeUserDeatils")
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("number").value;
    let password=document.getElementById("pwd").value;
    let obj={name,email,phone,password};

    const responce=await axios.post("http://localhost:3000/user/signUp",obj);
    // console.log(responce.status);

    
    if(responce.status==201){
        alert("SignUp Suceess")
        window.location.href = "login.html"

    }else if(responce.status==207){
        alert("User exits Please Login")
        window.location.href = "login.html"

    }else{
        alert("Failed to SignUp")
    }
 }catch(err){
    document.body.innerHTML +='<h1>Not worked from catch</h1>'
 }
}
