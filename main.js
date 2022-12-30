const robos = ["img/Robotron 2000 - Preto/robotron.png","img/Robotron 2000 - Amarelo/robotron.png","img/Robotron 2000 - Azul/robotron.png","img/Robotron 2000 - Branco/robotron.png","img/Robotron 2000 - Rosa/robotron.png","img/Robotron 2000 - Vermelho/robotron.png"]
const back = document.querySelector('#btBack')
const front = document.querySelector('#btAhead')
const controles = document.querySelectorAll('[data-controle]')
const estatistica =document.querySelectorAll('[data-estatisticas]')
const atributos = document.querySelectorAll('[data-peca]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

let robo = document.querySelector('.robo')
let selecionado = 0

back.onclick = () => {
    trocaRobo(0)
}

front.onclick = () => {
    trocaRobo(1)
}

controles.forEach((element)=>{
    element.addEventListener('click', (evento)=>{
        constroi(evento.target.dataset.controle,evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.controle,evento.target.dataset.peca,evento.target.parentNode)

    })

})


function trocaRobo(botao){
    if (botao==0){
        if(selecionado > 0 && selecionado <=5){
        selecionado --
        robo.src = robos[selecionado]}
        else {
            selecionado = 5
            robo.src = robos[selecionado]
        }
    }

    if (botao==1){
        if(selecionado >= 0 && selecionado <5){
        selecionado ++
        robo.src = robos[selecionado]
        }
        else {
            selecionado = 0
            robo.src = robos[selecionado]
        }}}

function constroi(acao,controle){
    let peca = controle.querySelector('[data-contador]')
    
    let teste = parseInt(peca.value)

    if (acao === "+"){
        peca.value = parseInt(peca.value) + 1
    }

    if(acao === "-"){
        if(teste <= 1){
            peca.value = "00"
        }
        else{
            peca.value = parseInt(peca.value) - 1 
        }
    }

    
}

function atualizaEstatistica(acao,peca,controle){
    let valor = controle.querySelector('[data-contador]')
    
    let teste = parseInt(valor.value)

    estatistica.forEach((elemento)=>{
        if (acao === "+"){
            elemento.textContent = parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatisticas]
            }

        if(acao === "-"){
            if(teste ===0){

            }
            else{
                elemento.textContent = parseInt(elemento.textContent)-pecas[peca][elemento.dataset.estatisticas] 
            }
        }
    })
     
}



