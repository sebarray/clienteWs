
const ws= new WebSocket('wss://ws--go.herokuapp.com/ws')
ws.onopen=()=>{
    console.log("conecctado")
}
ws.onerror=(e)=>{
    console.log("el error es...", e)
}
ws.onmessage=(e)=>{
    console.log(e.data);
    h=document.createElement('div')
    h.innerHTML=` <p class="text-white"> ${e.data}</p> `
    document.getElementById('b').appendChild(h)
}
 enviar.addEventListener('click',(e)=>{
     e.preventDefault();
    t= document.getElementById('text').value
    ws.send(JSON.stringify(t))
  
})