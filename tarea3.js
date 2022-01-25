//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


let segundosTotal = 0
let minutosTotal = 0
let horasTotal = 0

document.querySelector('#calcular').onclick = function(){
    segundosTotal += Number(document.querySelector('#segundos-video1').value) +
    Number(document.querySelector('#segundos-video2').value) +
    Number(document.querySelector('#segundos-video3').value) +
    Number(document.querySelector('#segundos-video4').value) +
    Number(document.querySelector('#segundos-video5').value)
    minutosTotal += Number(document.querySelector('#minutos-video1').value) +
    Number(document.querySelector('#minutos-video2').value) +
    Number(document.querySelector('#minutos-video3').value) +
    Number(document.querySelector('#minutos-video4').value) +
    Number(document.querySelector('#minutos-video5').value)
    horasTotal += Number(document.querySelector('#horas-video1').value) +
    Number(document.querySelector('#horas-video2').value) +
    Number(document.querySelector('#horas-video3').value) +
    Number(document.querySelector('#horas-video4').value) +
    Number(document.querySelector('#horas-video5').value)

    const resultadoSeg = segundosTotal % 60
    const resultadoMin = Math.floor(segundosTotal / 60) + (minutosTotal % 60)
    const resultadoHora = horasTotal + Math.floor(minutosTotal / 60)

    document.querySelector('#resultado').innerText = `${ resultadoHora}:${resultadoMin}:${resultadoSeg}`

    return false
}

//id="calcular-tiempo"
