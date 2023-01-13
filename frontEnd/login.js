async function login1(e){
    e.preventDefault();
    console.log("insidee login!!!")
    let email=document.getElementById("email").value;
    let password=document.getElementById("pwd").value;
    let objLogin={email,password}
    console.log(objLogin)
    const responce=await axios.post("http://localhost:3000/user/login",objLogin);
    if(responce.status==200){
        alert("Login Success")
        window.location.href = "loginPage.html"

    }else{
        alert("Login Not Success")

    }
}