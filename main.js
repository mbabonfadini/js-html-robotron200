const robos = ["img/Robotron 2000 - Preto/robotron.png","img/Robotron 2000 - Amarelo/robotron.png","img/Robotron 2000 - Azul/robotron.png","img/Robotron 2000 - Branco/robotron.png","img/Robotron 2000 - Rosa/robotron.png","img/Robotron 2000 - Vermelho/robotron.png"]


selecionado = 0

function trocaRobo(botao){
    let robo = document.querySelector('.robo')

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

const back = document.querySelector('#btBack')
const front = document.querySelector('#btAhead')

back.onclick = function (data) {
     data =  0 
     trocaRobo(data)
}

front.onclick = function (data) {
    data = 1
    trocaRobo(data)}