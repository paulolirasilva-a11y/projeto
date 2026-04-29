let frases=["Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?.  Romanos 8:31",


"Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.  João 6:33",


"Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.   Salmos 91:7",]




function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}