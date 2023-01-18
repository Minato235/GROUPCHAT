// name1=localStorage.getItem("name1");
// console.log(name1)
const div = document.getElementById("chatMessage");
// div.innerHTML += `<h1>${name1}</h1><br>`;

//after
function showMessageInScreen(chat,name){
    div.innerHTML+=`<h4>${name}: ${chat}</h4>`
}

document.getElementById("send").addEventListener("click", () => {
    token=localStorage.getItem("token");

    console.log(token)
    let obj = {
        chatMessageInput
    }
    axios.post("http://localhost:3000/user/sendMessage",obj,{
        headers: {
            "Authorization": token
        }
    }).then(result => {
     
        console.log("********"+result)

    }).catch(err => {
        console.log(err)
    })
})
window.addEventListener("DOMContentLoaded",()=>{
    console.log("inside DOMContentLoaded")
    axios.get("http://localhost:3000/user/getAllMessages").then(responce=>{
        let msg=responce.data.result;
        msg.forEach(element=>{
            console.log(element)
           showMessageInScreen(element.messageText,element.name)
        })


})
})