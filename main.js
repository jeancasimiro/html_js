function checar() {
    var valorA = window.document.querySelector('input#campoA')
    var valorB = window.document.querySelector('input#campoB')
    var result = window.document.querySelector('div#result')
    var conA = Number(valorA.value)
    var conB = Number(valorB.value)
    if (conB > conA){
        result.innerHTML = `<p> <strong>Sim!</strong>O valor do campo B (${conB}) é<strong>maior</strong>que o valor do campo A (${conA})!</p>`
        result.style.color="white"
        result.style.backgroundColor="green"
    } else {
        result.innerHTML = `<p> <strong>Não!</strong>O valor do campo B (${conB}) é<strong>menor</strong>que o valor do campo A (${conA})!</p>`
        result.style.color="white"
        result.style.backgroundColor="red"
    } if (conB == conA){
        result.innerHTML = `<p> <strong>Não!</strong>O valor do campo B (${conB}) é<strong>igual</strong>ao valor do campo A (${conA})!</p>`
        result.style.color="white"
        result.style.backgroundColor="blue"
    }
}