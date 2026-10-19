const story = document.getElementById("story");
const choices = document.getElementById("choices");
const status = document.getElementById("status");
const ending = document.getElementById("ending");
const restart = document.getElementById("restart");

const scenes = {
  inicio: {
    text: "Ano 2050! 🚀 A inteligência artificial da escola perdeu o controle. Você precisa salvar todos os alunos!",
    choices: [
      { text: "Fugir da escola", next: "fim1" },
      { text: "Ir para a sala de controle", next: "controle" },
      { text: "Desligar todos os computadores", next: "fim2" }
    ]
  },

  controle: {
    text: "🤖 O robô Byte encontrou uma rota segura para o núcleo de energia.",
    choices: [
      { text: "Entrar no laboratório proibido", next: "fim3" },
      { text: "Invadir o sistema", next: "fim4" },
      { text: "Seguir a rota segura", next: "nucleo" }
    ]
  },

  nucleo: {
    text: "Você chegou ao núcleo! Escolha como salvar a escola.",
    choices: [
      { text: "Apagar a IA", next: "fim5" },
      { text: "Sobrecarregar o reator", next: "fim6" },
      { text: "Instalar arquivo desconhecido", next: "fim7" },
      { text: "Restaurar o sistema", next: "normal" },
      { text: "Transferir a IA para Byte", next: "alt1" },
      { text: "Ativar modo sustentável", next: "alt2" }
    ]
  },

  fim1: {
    text: "Você fugiu e deixou a escola em perigo.",
    ending: "💀 GAME OVER"
  },
  fim2: {
    text: "Os sistemas de emergência foram desligados.",
    ending: "💀 GAME OVER"
  },
  fim3: {
    text: "O laboratório sofreu uma falha experimental.",
    ending: "💀 GAME OVER"
  },
  fim4: {
    text: "O sistema de segurança bloqueou o acesso.",
    ending: "💀 GAME OVER"
  },
  fim5: {
    text: "A escola perdeu seus sistemas inteligentes.",
    ending: "💀 GAME OVER"
  },
  fim6: {
    text: "O reator ficou sobrecarregado.",
    ending: "💀 GAME OVER"
  },
  fim7: {
    text: "O arquivo desconhecido infectou o sistema.",
    ending: "💀 GAME OVER"
  },
  normal: {
    text: "Você restaurou a energia e salvou todos os alunos!",
    ending: "🏆 FINAL NORMAL!",
    type: "win"
  },
  alt1: {
    text: "Byte recebeu a inteligência artificial e virou o professor mais avançado do mundo!",
    ending: "🌟 FINAL ALTERNATIVO 1!",
    type: "alt"
  },
  alt2: {
    text: "A escola agora funciona com energia solar e tecnologia sustentável!",
    ending: "🌱 FINAL ALTERNATIVO 2!",
    type: "alt"
  }
};

let gameEnded = false;

function showScene(id) {
  const scene = scenes[id];

  if (!scene) {
    story.textContent = "Erro: cena não encontrada.";
    return;
  }

  story.textContent = scene.text;
  choices.replaceChildren();
  ending.textContent = "";
  ending.className = "";

  gameEnded = Boolean(scene.ending);

  if (scene.ending) {
    ending.textContent = scene.ending;
    ending.className = scene.type || "lose";
    status.textContent = scene.type
      ? "Missão concluída!"
      : "Missão encerrada!";
    return;
  }

  status.textContent = "Missão em andamento!";

  scene.choices.forEach(function(choice) {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.addEventListener("click", function() {
      if (!gameEnded) showScene(choice.next);
    });

    choices.appendChild(button);
  });
}

function startGame() {
  gameEnded = false;
  showScene("inicio");
}

restart.addEventListener("click", startGame);

startGame();