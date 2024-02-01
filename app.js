let lista_fake = []

function adicionar(){ 
    
    lista_fake.pop()
    lista_fake.push(document.getElementById('txt1').value) 
    document.getElementById('txt1').value=''
    listarElementos()
}


function listarElementos(){
    for (x of lista_fake){
        createElements()

    }
}

function createElements(){
    let new_button = document.createElement('button')
    let new_value = document.createElement('span')
    document.getElementById('itens').appendChild(new_button).textContent='x'
    document.getElementById('itens').appendChild(new_value) 
    new_value.innerHTML = `${x}<br>`
    new_button.onclick = function(){
        new_button.remove()
        new_value.remove()  
        
    }
}



