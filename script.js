
const chat=document.getElementById("chat");
const input=document.getElementById("prompt");
const send=document.getElementById("send");

const API_URL="COLOQUE_AQUI_SEU_WORKER";

function addMessage(author,text){

chat.innerHTML+=`<p><strong>${author}:</strong> ${text}</p>`;

chat.scrollTop=chat.scrollHeight;

}

send.onclick=async()=>{

const msg=input.value.trim();

if(!msg)return;

addMessage("Você",msg);

input.value="";

addMessage("JARVIS","Pensando...");

const resposta=await fetch(API_URL,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:msg

})

});

const dados=await resposta.json();

chat.lastChild.remove();

addMessage("JARVIS",dados.reply);

};
