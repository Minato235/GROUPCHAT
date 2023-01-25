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
    name1=localStorage.getItem("name1");
    chatMessageInput=document.getElementById("chatMessageInput").value;
    let obj = {
        chatMessageInput,
        name1
    }
    console.log(obj)
    axios.post("http://localhost:3000/user/sendMessage",obj,{
        headers: {
            "Authorization": token
        }
    }).then(result => {
     
        console.log(result)
        window.location.reload()

    }).catch(err => {
        console.log(err)
    })
})
window.addEventListener("DOMContentLoaded",()=>{
    console.log("inside DOMContentLoaded")
    let lastMessage=localStorage.getItem("lastMessage");
    
    axios.get(`http://localhost:3000/user/getAllMessages?lastMessage=${lastMessage}`).then(responce=>{
        let msg=responce.data.result;
        msg.forEach(element=>{
            console.log(element)
           showMessageInScreen(element.messageText,element.name)
        })


})
})
// setInterval(()=>{
//     div.innerHTML="";
//     axios.get("http://localhost:3000/user/getAllMessages").then(responce=>{
//         let msg=responce.data.result;
//         msg.forEach(element=>{
//             console.log(element)
//            showMessageInScreen(element.messageText,element.name)
//         })


// })
// },2000)
