



// input 

const name= document.querySelector('.name')
let km= document.querySelector ('.km');
let eta=document.querySelector ('.age ')

// btn 
const btn1= document.querySelector('.btn-1')
const btnReset= document.querySelector('.btn-reset')




let messaggio=''


btn1.addEventListener('click', function(){
  let eta=document.querySelector ('.age ')
  
  const prezzoKm = 0.21
  let costoBiglietto= km.value * prezzoKm
  console.log(eta.value)
  console.log('cliccato')


  if ( eta.value <= 17 ){
  console.log (km.value)
  let scontoKmMinorenni= prezzoKm*20/100
  let biglittoScontatoMinori=(costoBiglietto-(scontoKmMinorenni*km.value))
  let fixedBigliettoMinori=biglittoScontatoMinori.toFixed(2)
  console.log(fixedBigliettoMinori)
  }

  else if ( eta.value>= 65 ){
  console.log (km.value)
  
  let scontoKmOver=prezzoKm*40/100
  
  let bigliettoScontatoOver=(costoBiglietto-(scontoKmOver*km.value))
  let fixedBigliettoOver=bigliettoScontatoOver.toFixed(2)
  console.log(fixedBigliettoOver)}
  else{
   console.log(costoBiglietto)
  
  }
})

btnReset.addEventListener('click',function(){
  name.value= '';
  km.value='';
  eta.value='';
})
