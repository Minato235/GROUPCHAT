async function login1(e) {
    try {
        e.preventDefault();
        console.log("insidee login!!!")
        let email = document.getElementById("email").value;
        let password = document.getElementById("pwd").value;
        let objLogin = {
            email,
            password
        }
        const responce = await axios.post("http://localhost:3000/user/login", objLogin);
        console.log(responce)
        console.log("*****resonce**");
        console.log(responce.data)
        localStorage.setItem("name1",responce.data.name);
        localStorage.setItem("token",responce.data.token);

        
        console.log(responce.data.name)

        if (responce.status == 200) {
            alert("Login Success")
            window.location.href = "loginPage.html"

        } else if (responce.status === 207) {
            showExistingUsers(responce.data.message);
        } else {
            alert("Error From else in Login")
        }
    } catch (err) {
        console.log(err)
    }
}

function showExistingUsers(user) {
   console.log(user)
   console.log("user")

    const parentNode = document.getElementById('listOfUsers');
    const createNewUserHtml = `<li >${user}</li> `
                                        

    parentNode.innerHTML += createNewUserHtml;
}