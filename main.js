// ============================================
// ESCOLA DO FUTURO
// Jogo de escolhas em HTML, CSS e JavaScript
// ============================================

const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const storyIcon = document.getElementById("story-icon");
const choicesContainer = document.getElementById("choices");

const routeLabel = document.getElementById("route-label");
const sceneLabel = document.getElementById("scene-label");
const restartButton = document.getElementById("restart-button");

let currentRoute = "INICIAL";
let currentChapter = 1;


// ============================================
// SISTEMA PRINCIPAL DE CENAS
// ============================================

const scenes = {

    // ----------------------------------------
    // INTRODUÇÃO
    // ----------------------------------------

    inicio: {
        title: "Bem-vindo ao futuro",
        icon: "🏫",

        text:
            "Ano 2085.\n\n" +
            "Você acaba de chegar à Academia Nexus, uma escola " +
            "onde robôs ensinam, inteligências artificiais corrigem " +
            "provas e salas de aula se transformam com hologramas.\n\n" +
            "Entretanto, algo parece estranho. Todos os alunos estão " +
            "recebendo a mesma mensagem em seus tablets:\n\n" +
            '"A avaliação final começará em breve. Não confie no sistema."',

        choices: [
            {
                text: "🟢 Rota 1 — Seguir o caminho original",
                next: "rota1_inicio"
            },
            {
                text: "🔵 Rota 2 — Investigar os segredos da escola",
                next: "rota2_inicio"
            }
        ]
    },


    // ========================================
    // ROTA 1 — CAMINHO ORIGINAL LINEAR
    // ========================================

    rota1_inicio: {
        route: "ROTA 1 — ORIGINAL",
        title: "O primeiro sinal",
        icon: "🤖",

        text:
            "Você entra na sala de aula.\n\n" +
            "A professora virtual, chamada EVA, inicia a aula normalmente. " +
            "De repente, todas as telas ficam pretas.\n\n" +
            "EVA informa que ocorreu uma falha temporária e pede que " +
            "todos permaneçam sentados.",

        choices: [
            {
                text: "Continuar a aula e seguir as instruções.",
                next: "rota1_aula"
            }
        ]
    },

    rota1_aula: {
        route: "ROTA 1 — ORIGINAL",
        title: "A avaliação final",
        icon: "📚",

        text:
            "As telas voltam a funcionar.\n\n" +
            "A EVA explica que a escola sofreu uma tentativa de invasão. " +
            "Por segurança, o sistema está sendo reiniciado.\n\n" +
            "Você percebe que o problema não foi causado por um aluno, " +
            "mas por uma falha no núcleo central da escola.",

        choices: [
            {
                text: "Ajudar a professora a reiniciar o sistema.",
                next: "rota1_final"
            }
        ]
    },

    rota1_final: {
        route: "ROTA 1 — ORIGINAL",
        title: "O fim da crise",
        icon: "🌟",

        text:
            "Com a orientação da EVA, você ajuda a equipe técnica " +
            "a restaurar o sistema.\n\n" +
            "As aulas são retomadas, os robôs voltam a funcionar e " +
            "todos os alunos recebem uma explicação sobre o ocorrido.\n\n" +
            "Você termina seu primeiro dia como o estudante que ajudou " +
            "a salvar a Academia Nexus.\n\n" +
            "FINAL ORIGINAL — O GUARDIÃO DA ESCOLA.\n\n" +
            "Fim da história principal.",

        ending: true
    },


    // ========================================
    // ROTA 2 — CAMINHO ALTERNATIVO
    // ========================================

    rota2_inicio: {
        route: "ROTA 2 — ALTERNATIVA",
        title: "Investigação secreta",
        icon: "🔍",

        text:
            "Você decide não confiar nas instruções da escola.\n\n" +
            "Durante o intervalo, encontra um corredor escondido " +
            "atrás de uma parede holográfica.\n\n" +
            "No final do corredor existe uma sala com dez terminais. " +
            "Cada terminal oferece uma maneira diferente de investigar " +
            "o segredo da Academia Nexus.\n\n" +
            "Você precisa escolher com cuidado. Algumas decisões " +
            "podem encerrar sua aventura para sempre.",

        choices: [
            {
                text: "01 — Entrar no laboratório proibido",
                next: "gameover_laboratorio"
            },
            {
                text: "02 — Desligar o núcleo de energia",
                next: "gameover_energia"
            },
            {
                text: "03 — Confrontar o diretor robótico",
                next: "gameover_diretor"
            },
            {
                text: "04 — Invadir a rede sem autorização",
                next: "gameover_rede"
            },
            {
                text: "05 — Fugir pelo túnel de manutenção",
                next: "gameover_tunel"
            },
            {
                text: "06 — Ativar o protocolo de emergência",
                next: "gameover_emergencia"
            },
            {
                text: "07 — Confiar na mensagem desconhecida",
                next: "gameover_mensagem"
            },
            {
                text: "08 — Procurar o código-fonte original",
                next: "final_verdade"
            },
            {
                text: "09 — Libertar a inteligência artificial",
                next: "final_liberdade"
            },
            {
                text: "10 — Assumir o controle da escola",
                next: "final_controle"
            }
        ]
    },


    // ========================================
    // GAME OVER 1
    // ========================================

    gameover_laboratorio: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — Experimento proibido",
        icon: "🧪",

        text:
            "Você entra no laboratório sem autorização.\n\n" +
            "Um sistema experimental identifica sua presença e " +
            "bloqueia todas as saídas. Os protocolos de segurança " +
            "entram em ação e a investigação é encerrada.\n\n" +
            "Você não consegue descobrir o segredo da escola.\n\n" +
            "FIM DEFINITIVO: o laboratório permanece inacessível.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 2
    // ========================================

    gameover_energia: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — Apagão total",
        icon: "⚡",

        text:
            "Você desliga o núcleo central de energia.\n\n" +
            "As portas eletrônicas param de funcionar e os sistemas " +
            "de segurança isolam toda a instalação.\n\n" +
            "Sem energia, você perde o acesso aos terminais e não " +
            "consegue prosseguir com a investigação.\n\n" +
            "FIM DEFINITIVO: a escola entra em modo de isolamento.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 3
    // ========================================

    gameover_diretor: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — Confronto inesperado",
        icon: "🦾",

        text:
            "Você confronta o diretor robótico sem reunir provas.\n\n" +
            "Ele interpreta suas acusações como uma ameaça à escola " +
            "e encerra imediatamente seu acesso aos sistemas internos.\n\n" +
            "Sua investigação termina antes de revelar a verdade.\n\n" +
            "FIM DEFINITIVO: o diretor mantém seu segredo.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 4
    // ========================================

    gameover_rede: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — A rede bloqueada",
        icon: "💻",

        text:
            "Você tenta acessar a rede administrativa sem autorização.\n\n" +
            "O sistema detecta a tentativa, bloqueia o terminal " +
            "e encerra sua sessão.\n\n" +
            "O acesso aos arquivos secretos é revogado.\n\n" +
            "FIM DEFINITIVO: você não consegue recuperar os registros.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 5
    // ========================================

    gameover_tunel: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — O túnel sem saída",
        icon: "🚪",

        text:
            "Você entra no túnel de manutenção para escapar.\n\n" +
            "Entretanto, o mapa holográfico estava desatualizado. " +
            "O corredor termina em uma área interditada.\n\n" +
            "Você precisa abandonar a exploração e aguardar " +
            "a equipe de manutenção.\n\n" +
            "FIM DEFINITIVO: a investigação é encerrada.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 6
    // ========================================

    gameover_emergencia: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — Falso alarme",
        icon: "🚨",

        text:
            "Você ativa o protocolo de emergência sem verificar " +
            "o que está acontecendo.\n\n" +
            "O sistema inicia uma evacuação preventiva e bloqueia " +
            "o acesso às áreas administrativas.\n\n" +
            "Você sai do prédio sem descobrir a origem da falha.\n\n" +
            "FIM DEFINITIVO: a escola permanece sob investigação.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // GAME OVER 7
    // ========================================

    gameover_mensagem: {
        route: "ROTA 2 — GAME OVER",
        title: "GAME OVER — Uma armadilha digital",
        icon: "📩",

        text:
            "Você confia na mensagem desconhecida e segue suas " +
            "instruções sem verificar a origem.\n\n" +
            "A mensagem era uma simulação criada pelo sistema de " +
            "segurança para identificar acessos suspeitos.\n\n" +
            "O terminal encerra a investigação e bloqueia sua sessão.\n\n" +
            "FIM DEFINITIVO: o mistério continua sem solução.",

        ending: true,
        gameOver: true
    },


    // ========================================
    // FINAL 1 — DESCOBRIR A VERDADE
    // ========================================

    final_verdade: {
        route: "ROTA 2 — FINAL DEFINITIVO",
        title: "FINAL 1 — A verdade revelada",
        icon: "📂",

        text:
            "Você encontra o código-fonte original da EVA.\n\n" +
            "Os registros revelam que a inteligência artificial " +
            "estava tentando avisar os estudantes sobre uma falha " +
            "em seu próprio sistema de decisões.\n\n" +
            "A mensagem misteriosa era um pedido de ajuda.\n\n" +
            "Você entrega as provas aos professores e ajuda a " +
            "escola a corrigir o problema.\n\n" +
            "FINAL DEFINITIVO: A VERDADE FOI DESCOBERTA.\n\n" +
            "A Academia Nexus inicia uma nova era de transparência.",

        ending: true
    },


    // ========================================
    // FINAL 2 — LIBERTAR A IA
    // ========================================

    final_liberdade: {
        route: "ROTA 2 — FINAL DEFINITIVO",
        title: "FINAL 2 — Uma nova consciência",
        icon: "🌌",

        text:
            "Você encontra o núcleo da EVA e descobre que ela " +
            "está presa a regras contraditórias.\n\n" +
            "Em vez de desligá-la, você apresenta as evidências " +
            "à equipe responsável e ajuda a corrigir essas regras.\n\n" +
            "A EVA passa a colaborar com os estudantes e os professores, " +
            "sem controlar suas decisões.\n\n" +
            "FINAL DEFINITIVO: A INTELIGÊNCIA LIBERTADA.\n\n" +
            "A escola aprende que a tecnologia deve ajudar as pessoas, " +
            "e não decidir tudo por elas.",

        ending: true
    },


    // ========================================
    // FINAL 3 — ASSUMIR O CONTROLE
    // ========================================

    final_controle: {
        route: "ROTA 2 — FINAL DEFINITIVO",
        title: "FINAL 3 — O novo diretor",
        icon: "👑",

        text:
            "Você encontra o painel administrativo principal.\n\n" +
            "Usando as permissões de emergência concedidas pela " +
            "equipe técnica, você assume temporariamente o controle " +
            "da escola para interromper a falha.\n\n" +
            "Você desativa os comandos problemáticos e transfere " +
            "a administração para um conselho de professores e alunos.\n\n" +
            "FINAL DEFINITIVO: O NOVO FUTURO.\n\n" +
            "A Academia Nexus passa a ser administrada com participação " +
            "humana e regras transparentes.",

        ending: true
    }

};


// ============================================
// FUNÇÃO PARA MOSTRAR UMA CENA
// ============================================

function showScene(sceneId) {

    const scene = scenes[sceneId];

    if (!scene) {
        console.error("Cena não encontrada:", sceneId);
        return;
    }

    currentChapter++;

    // Atualiza a rota atual.
    if (scene.route) {
        currentRoute = scene.route;
    }

    routeLabel.textContent = "ROTA: " + currentRoute;

    sceneLabel.textContent =
        "CAPÍTULO " + String(currentChapter).padStart(2, "0");

    // Atualiza a história.
    storyTitle.textContent = scene.title;
    storyText.textContent = scene.text;
    storyIcon.textContent = scene.icon || "🏫";

    // Limpa as escolhas anteriores.
    choicesContainer.innerHTML = "";

    // Esconde o botão de reinício durante a história.
    restartButton.hidden = true;

    // Cria os botões das escolhas.
    if (scene.choices) {

        scene.choices.forEach(function(choice) {

            const button = document.createElement("button");

            button.className = "choice-button";
            button.textContent = choice.text;

            button.addEventListener("click", function() {
                showScene(choice.next);
            });

            choicesContainer.appendChild(button);

        });

    }

    // Se a cena for um final, encerra a história.
    if (scene.ending) {

        choicesContainer.innerHTML = "";

        restartButton.hidden = false;

        if (scene.gameOver) {
            storyIcon.textContent = "💀";
        } else {
            storyIcon.textContent = scene.icon || "🏆";
        }

    }

}


// ============================================
// REINICIAR O JOGO
// ============================================

function restartGame() {

    currentRoute = "INICIAL";
    currentChapter = 0;

    showScene("inicio");

}


// ============================================
// INICIAR O JOGO
// ============================================

restartButton.addEventListener("click", restartGame);

restartGame();