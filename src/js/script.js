// Código que pega o nome do usuário e troca a cor 

let nome = document.getElementById('text-area')
nome.addEventListener('mouseenter', entrar)
nome.addEventListener('mouseout' , sair)

function entrar () {
    nome.style.color = 'pink'
}

function sair () {
    nome.style.color = 'black'
}

// Parte do código que pega o quadrado e arrasta pro carrinho 

let arrastar = document.getElementById('square')
arrastar.addEventListener('mousedown', pressionar)
arrastar.addEventListener('mousemove', mover)
arrastar.addEventListener('mouseup', soltar)

function pressionar () {
}

function mover () {
}

function soltar () {
}

// Adiciona "animação" de colorir ao clicar 2 vezes no elemento

let animar = document.getElementById('square')

animar.addEventListener('dblclick', duploclick)

function duploclick () {
    animar.style.background = 'purple'
}

