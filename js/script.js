const km = prompt ( 'inserisci i km da percorrere ')
const eta= prompt ('inserisci la tua eta')
const prezzoKm = 0.21
let costoBiglietto= km * prezzoKm
let scontoKmMinorenni= prezzoKm*20/100
let scontoKmOver=prezzoKm*40/100
let biglittoScontatoMinori=(costoBiglietto-(scontoKmMinorenni*km))
let fixedBigliettoMinori=biglittoScontatoMinori.toFixed(2)
let bigliettoScontatoOver=(costoBiglietto-(scontoKmOver*km))
let fixedBigliettoOver=bigliettoScontatoOver.toFixed(2)

let messaggio=''


if (eta<18){
 
  messaggio= (fixedBigliettoMinori)
}

else if ( eta>64){
  messaggio= (fixedBigliettoOver)}

else{
  messaggio=(costoBiglietto)
}

document.getElementById('totale').innerHTML+=messaggio