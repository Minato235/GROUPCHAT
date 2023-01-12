function takeUserDeatils(event){
 try{
    event.preventDefault();
    // console.log("inside-takeUserDeatils")
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("number").value;
    let password=document.getElementById("pwd").value;
    let obj={name,email,phone,password};
    console.log(obj)

    const responce=axios.post("http://localhost:3000/user/signUp",obj);
    if(responce==200){
        alert("SignUp Suceess")
    }else{
        alert("Failed to SignUp")
    }
 }catch(err){
    document.body.innerHTML +='<h1>Not worked from catch</h1>'
 }
}
