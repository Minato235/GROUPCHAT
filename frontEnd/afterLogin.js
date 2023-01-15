name1=localStorage.getItem("name1");
console.log(name1)
const div=document.getElementById("group");
div.innerHTML+=`<h1>${name1}</h1><br>`;