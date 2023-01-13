function login1(e){
    e.preventDefault();
    console.log("insidee login!!!")
    let email=document.getElementById("email").value;
    let password=document.getElementById("pwd").value;
    let objLogin={email,password}
    console.log(objLogin)
}