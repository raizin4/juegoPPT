function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function eleccion(jugada){
    let eleccion =""

    if(jugada == 1 ){
        eleccion = "Eligió 🥌"
    } else if (jugada == 2 ){
        eleccion = "Eligió 📃"
    } else if(jugada == 3){
        eleccion = "Eligió ✂"
    }
    else{
        eleccion="ELIGIO INCORRECTAMENTE"
    }

    return eleccion
}

function jugar(player,computer){

    switch(player - computer){ 
        case 0 :
            alert("EMPATE SIGUE JUGANDO")
            break
        case 1 :
            puntosJugador++
            alert(" GANASTE !! 😀 "+"\n PUNTOS JUGADOR : "+puntosJugador+"\n PUNTOS PC : "+puntosPc)
            break
        case -2:
            puntosJugador++
            alert(" GANASTE !! 😀 "+"\n PUNTOS JUGADOR : "+puntosJugador+"\n PUNTOS PC : "+puntosPc)
            break
        default :
            puntosPc++
            alert(" PERDISTE 😥😏 "+"\n PUNTOS JUGADOR : "+puntosJugador+"\n PUNTOS PC : "+puntosPc)
            break
    }

}

function resultadoFinal(){
    if(puntosJugador === 3){
        ganador=true
        alert("GANASTE EL JUEGO")
    }else if (puntosPc===3){
        ganador=true
        alert("PERDISTE EL JUEGO")
    }
}




    let ganador = false
    let puntosJugador = 0
    let puntosPc = 0

    while(ganador === false){

    let jugador = Number(prompt("Elija un número : \n 1. Piedra \n 2. Papel \n 3. Tijera "))
    let pc = aleatorio(1,3)

    alert(" Usted : "+eleccion(jugador)+"\n La PC : "+eleccion(pc))
    jugar(jugador,pc)
    resultadoFinal()
    }