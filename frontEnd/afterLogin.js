// name1=localStorage.getItem("name1");
// console.log(name1)
const div = document.getElementById("chatMessage");
// div.innerHTML += `<h1>${name1}</h1><br>`;

//after
function showMessageInScreen(chat,name){
    div.innerHTML+=`<h4>${name}:>${chat}</h4>`
}

document.getElementById("send").addEventListener("click", () => {
    token=localStorage.getItem("token");

    console.log(token)
    let chatMessageInput = document.getElementById("chatMessageInput").value;
    console.log(chatMessageInput)
    let obj = {
        chatMessageInput
    }
    axios.post("http://localhost:3000/user/sendMessage",obj,{
        headers: {
            "Authorization": token
        }
    }).then(result => {
        let name1 = localStorage.getItem("name1");
        console.log(name1)
        showMessageInScreen(chatMessageInput, name1)

    }).catch(err => {
        console.log(err)
    })
})