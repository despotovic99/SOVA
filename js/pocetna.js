window.onload=ucitajGodineRada();

const brzina=1000;

document.querySelectorAll('.brojac1').forEach(brojac=>{

    const brojacBr=+brojac.getAttribute('brojDo');

    const dopuniBroj = setInterval(() => {
        
        const brojka =+ brojac.innerText;
        const povecajZa = brojacBr/6;
        
        brojka<brojacBr ? brojac.innerHTML=Math.ceil(brojka+povecajZa) : clearInterval(dopuniBroj);

    }, 300);
});


   document.querySelectorAll('.brojac').forEach(brojac=>{

    const brojacBr=+brojac.getAttribute('brojDo');

    const dopuniBroj = setInterval(() => {
        
        const brojka =+ brojac.innerText;
        const povecajZa = brojacBr/brzina;
        
        brojka<brojacBr ? brojac.innerHTML=Math.ceil(brojka+povecajZa) : clearInterval(dopuniBroj);

    }, 1);

   });


function ucitajGodineRada(){
    const godOsnivanja =document.getElementById('godinaOsnivanja').innerText;
    console.log(godOsnivanja);
    let datum=new Date();
    
    let trenutnaGod = datum.getFullYear();
console.log(trenutnaGod);

document.getElementById('godineRada').innerHTML=trenutnaGod-godOsnivanja;
   }