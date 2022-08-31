console.log('Js is ok')

let listaSpesa = ['Pane', 'Pomodori', 'Insalata', 'Prosciutto']

let lista = document.getElementById('spesa')

let i = 0



while (i < listaSpesa.length) {
    console.log(listaSpesa[i])
    
    lista.innerHTML= (listaSpesa)
    
   
    i++ 
    
}