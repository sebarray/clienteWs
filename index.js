
const ws= new WebSocket('ws://ws--go.herokuapp.com/ws')
ws.onopen=()=>{
    console.log("conecctado")
}
ws.onerror=(e)=>{
    console.log("el error es...", e)
}
ws.onmessage=(e)=>{
    console.log(e.data);
    h=document.createElement('div')
    h.innerHTML=` <h3> ${e.data}</h3> `
    document.getElementById('b').appendChild(h)
}
 enviar.addEventListener('click',(e)=>{
     e.preventDefault();
    t= document.getElementById('text').value
    ws.send(JSON.stringify(t))
  
})