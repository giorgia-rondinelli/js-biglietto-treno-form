



// input 
const name= document.querySelector('.name')
let km= document.querySelector ('.km')
let eta= document.querySelector ('.age ')



// btn 
const btn1= document.querySelector('.btn-1')
const btnReset= document.querySelector('.btn-reset')

const prezzoKm = 0.21
let costoBiglietto= km * prezzoKm
let scontoKmMinorenni= prezzoKm*20/100
let scontoKmOver=prezzoKm*40/100
let biglittoScontatoMinori=(costoBiglietto-(scontoKmMinorenni*km))
let fixedBigliettoMinori=biglittoScontatoMinori.toFixed(2)
let bigliettoScontatoOver=(costoBiglietto-(scontoKmOver*km))
let fixedBigliettoOver=bigliettoScontatoOver.toFixed(2)

let messaggio=''


btn1.addEventListener('click', function(){
  
  if (eta= 'Minorenne'){
  messaggio= (fixedBigliettoMinori)
  console.log(fixedBigliettoMinori)
}

else if ( eta= 'over 65'){
  messaggio= (fixedBigliettoOver)}

else{
  messaggio=(costoBiglietto)
}
})



document.getElementById('totale').innerHTML+=messaggio