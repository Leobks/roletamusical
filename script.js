document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = "Obrigado por clicar";
    this.style.backgroundColor = '#0080b3'; 
});

var musicas = [
  { url: "https://www.youtube.com/watch?v=1G4isv_Fylg", apelido: "Coldplay - Paradise" },
  { url: "https://www.youtube.com/watch?v=OZGtRvYF-A4", apelido: "Michael Jackson - Billie Jean" },
  { url: "https://www.youtube.com/watch?v=Qxw5xNqATko", apelido: "Eminem - Till i Collapse" },
  { url: "https://www.youtube.com/watch?v=3n3itDDgmQQ", apelido: "Dragon Ball GT - Abertura" },
  { url: "https://www.youtube.com/watch?v=3L5D8by1AtI", apelido: "Pablo Viitar - K.O" },
  { url: "https://www.youtube.com/watch?v=xFrGuyw1V8s", apelido: "Abba - Dancing Queen" }
  ];
  
  function redirecionarMusica() {
    var indiceAleatorio = Math.floor(Math.random() * musicas.length);
    var musicaAleatoria = musicas[indiceAleatorio].url;
    localStorage.setItem("musicaSelecionada", musicaAleatoria); // Salva a música selecionada no armazenamento local
    window.open(musicaAleatoria, '_blank'); // Abre a música em uma nova aba
  }
  
  function getApelidoMusica(url) {
    for (var i = 0; i < musicas.length; i++) {
      if (musicas[i].url === url) {
        return musicas[i].apelido;
      }
    }
    return "Música Desconhecida"; // Retorna isso se o URL da música não for encontrado
  }
  
  function avaliarMusica() {
    var estrelasSelecionadas = document.getElementById("estrelas").value;
    var musicaSelecionada = localStorage.getItem("musicaSelecionada");
    var apelidoMusica = getApelidoMusica(musicaSelecionada);
    document.getElementById("mensagemAgradecimento").style.display = "block";
    document.getElementById("musicaAvaliada").style.display = "block";
    document.getElementById("nomeMusica").innerText = apelidoMusica;
    // Aqui você pode enviar os dados de avaliação para o servidor ou fazer qualquer outra ação com eles
    console.log("Você avaliou a música", apelidoMusica, "com", estrelasSelecionadas, "estrelas.");
  }
  
  document.getElementById("meuBotao").addEventListener("click", redirecionarMusica);
  document.getElementById("btnAvaliar").addEventListener("click", avaliarMusica);