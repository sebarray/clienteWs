var nombre = prompt("cual es tu nombre")
const ws= new WebSocket('wss://ws--go.herokuapp.com/ws')
let text = document.getElementById('text');
ws.onopen=()=>{
    console.log("conecctado")
}
ws.onerror=(e)=>{
    console.log("el error es...", e)
}
ws.onmessage=(e)=>{
    console.log(e.data);
    h=document.createElement('div')
    h.innerHTML=` <p class="text-white text-center fs-1">${nombre}: ${e.data}</p> `
    document.getElementById('b').append(h)
  
}


 enviar.addEventListener('click',(e)=>{
     e.preventDefault();
    t= document.getElementById('text').value
    ws.send(JSON.stringify(t))
  
})

text.addEventListener("keypress", (e)=>{
   if(e.code==="Enter"){
    t= document.getElementById('text').value
    ws.send(JSON.stringify(t)) 
   }
}, true)