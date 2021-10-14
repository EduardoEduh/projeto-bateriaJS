//Elemento que representa o corpo do site:
document.body.addEventListener('keyup', (recebeEvento)=>{
    //Quando apertar a tecla, vai rodar a função abaixo:
    playSound(recebeEvento.code.toLowerCase());

})

//Evento da função de digitar:
document.querySelector(".composer button").addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

//Função que vai receber o som que quer para tocar:
//A variável sound está representando a tecla que vai ser apertada.
function playSound(sound){
    //Primeira coisa, identificar a tag audio que está o som
    let audioElement = document.querySelector(`#s_${sound}`);
    
    //Abaixo, selecionando a tecla que estou apertando:
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    //Verificar se achou algum audio. Se achou, então executa
    if(audioElement) {
        //Para que os 30 segundos zere e volte para o ponteiro zerado
        audioElement.currentTime = 0; 
        audioElement.play();
    }

    //Verificar se achou o keyElement, ou seja, a tecla que foi apertada:
    if(keyElement) {

        //Adicionando uma nova classe para pintar a borda do elemento
        keyElement.classList.add('active');

        //Fazendo o elemento parar após 30 segundos com a função abaixo:
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }

}

//Função da composição:
function playComposition(songArray) {
    let wait = 0;

    //Criando loop personalizado com tempo
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait +=250;
    }
}