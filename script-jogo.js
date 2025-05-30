const infoBtn = document.getElementById('infoBtn');
const rulesBtn = document.getElementById('rulesBtn');
const emblemsBtn = document.getElementById('emblemsBtn');
const classesBtn = document.getElementById('classesBtn');
const content = document.getElementById('content');
const backBtn = document.getElementById('backBtn');

// Função para exibir a mensagem inicial
function showInitialMessage() {
    content.innerHTML = `
        <div class="initial-message column-item">
            <h3>Bem-vindo, Herói!</h3>
            <p>Explore os segredos da Escola e prepare-se para a aventura!</p>
            <p>Selecione uma das opções acima para saber mais.</p>
        </div>
    `;
    content.classList.remove('hidden');
    setTimeout(() => content.classList.add('visible'), 10);
}

// Função para limpar o conteúdo e preparar para o novo
function clearContent() {
    content.classList.remove('visible');
    // Pequeno atraso para a transição de fade-out antes de mudar o conteúdo
    setTimeout(() => {
        content.classList.add('hidden');
        content.innerHTML = ''; // Limpa o conteúdo após o fade-out
    }, 500); // 500ms é a duração da transição CSS
}

// Função para exibir o novo conteúdo
function showContent(sections) {
    clearContent(); // Limpa o conteúdo atual (incluindo a mensagem inicial)

    // Pequeno atraso para que a animação de esconder termine antes de mostrar o novo
    setTimeout(() => {
        let htmlContent = '';
        for (const section of sections) {
            htmlContent += `<div class="column-item"><h3>${section.title}</h3>${section.text}</div>`;
        }
        content.innerHTML = htmlContent;
        content.classList.remove('hidden');
        setTimeout(() => content.classList.add('visible'), 10);
    }, 550); // Um pouco mais longo que a transição de fade-out
}

// Event Listeners para os botões
infoBtn.addEventListener('click', () => {
    const gameInfo = [
        {
            title: 'Sobre o Jogo',
            text: `
                <p><strong>Fase Inicial (níveis 1-4):</strong></p>
                <p>Os heróis estão só começando a desbravar esse mundão. Eles se embrenham em enigmas que os definem
como membros de uma turma específica,
 tomando decisões cruciais que vão esculpir
 suas personalidades únicas. Enquanto
 encaram perigos mais levinhos, esses heróis
 têm a missão de manter seu Colégio a salvo,
 o seu quartel-general dos mistérios e da
 ação. Que poder, hein!</p>
                <p><strong>Segunda Fase (níveis 5-10):</strong></p>
                <p>Os personagens estão livres, com maior segurança de seus novos poderes. Os magos desbloqueiam seu terceiro truque mágico,
 atingindo um novo patamar de poder
 místico. Neste estágio, as outras classes que
 dependem de força e agilidade dominam a
 arte de desferir mais de um golpe por
 rodada. Esses heróis tornam-se essenciais,
 encarando desafios que ameaçam cidades,
 amigos e família.</p>
                `
        },
        {
            title: 'Skills (Habilidades)',
            text: `
                <p>Ah, habilidade, essa coisa incrível que faz a gente se sentir meio super-herói, meio
 mago, sabe? É tipo aquele truque que você domina e que deixa todo mundo de boca
 aberta!
 Sabe quando você está enfrentando um desafio e de repente você simplesmente
 consegue fazer algo que nunca imaginou? Tipo quando você descobre que pode
 mover coisas com a mente, ou quando sua agilidade parece estar no nível de um
 ninja? Isso é habilidade!
 É como se você tivesse um superpoder especial só seu, que te ajuda a enfrentar
 qualquer coisa que a vida jogue no seu caminho. Por exemplo, imagine poder repelir
 goblins com uma força incrível ou lançar feitiços mágicos para derrotar trolls
 gigantes!
 É como se fosse um truque legal que você aprende e que te ajuda a se destacar no
 meio da multidão. É isso, habilidade é como ter um superpoder que te faz se sentir
 invencível e pronto para encarar qualquer aventura que apareça no seu caminho!</p>
            `
        },
        {
            title: 'Informações',
            text: `
                <p>A <strong>Tabela de Progressão de Personagem</strong> detalha o XP necessário do nível 1 ao 20. Cada classe possui bônus especiais a cada novo nível.</p>
            `
        }
    ];
    showContent(gameInfo);
});

rulesBtn.addEventListener('click', () => {
    const combatRules = [
        {
            title: 'Combate em Equipe',
            text: `
               <p> Bem-vindos ao emocionante mundo das batalhas em grupo! Aqui estão as regras para
 garantir que todos tenham uma experiência divertida e justa.</p>
 <p>Durante a atividade em grupo, vamos nos envolver em batalhas épicas a cada dez minutos. Ah, e adivinha quem começa atacando?
 Isso mesmo, os monstros! Preparem-se para a ação!</p>
 <p>Cada equipe vai rolar um dado de 20 lados, que vai determinar a sua Classe de Armadura
 ou CA, para os íntimos. Os monstros também vão rolar um dado para decidir o seu ataque. Se
 a CA da equipe for maior do que o ataque dos monstros, isso significa que é hora de usar
 uma habilidade por personagem. Vamos arrasar!</p>
 <p> Então, preparem-se para a batalha, pessoal! E lembrem-se, um membro da equipe será o
 responsável por acompanhar todas essas regras e garantir que tudo corra conforme o
 planejado. Agora, vamos nos divertir e mostrar quem manda aqui!
 </p>
    `},
    {
    title: 'Regras de Ataque',
    text: `
    <p> Mas, se a CA for menor ou igual que o ataque, a equipe terá que esperar até o próximo
 turno para usar suas habilidades. Ah, que chato!</p>
 <p>Agora, se a CA for maior que o ataque dos monstros, é hora de ir para o ataque! A equipe
 pode usar habilidades ofensivas, mas cuidado! Os dados rolados pela equipe devem
 ultrapassar ou ser igual a CA dos monstros.</p>
 <p>E se conseguirmos superar a defesa deles,
 causaremos danos ao monstro e ainda teremos o direito de eliminar uma alternativa falsa
 aleatória da atividade. É uma vitória dupla!</p>
     `}
    ];
    showContent(combatRules);
});

emblemsBtn.addEventListener('click', () => {
    const emblemsInfo = [
        {
            title: 'Emblemas de Campanha:',
            text: `
                <p>Esses são como os troféus de ouro para os verdadeiros
 heróis! Se você participou de todas as etapas da campanha - treinamento solo,
 batalha em equipe e enfrentamento contra o chefão - você merece um desses
 emblemas de glória!</p>
      `},
        {
            title: 'Emblema de Mestre do XP:',
            text: `
                <p>Este é para os
 mestres dos números, aqueles que
 dominam a arte do ranqueamento! Se você
 permaneceu no top 10 do ranking da sala
 durante todo o bimestre, prepare-se para
 receber seu emblema de honra!</p>
            `
        },
        {
            title: 'Emblema do Instrutor:',
            text: `
                <p>Ah, esse aqui é
 para os verdadeiros camaradas! Se você
 estava lá para dar aquela força para os
 amigos, ajudando com dicas e estratégias
 sem entregar o peixe, então você é digno
 deste emblema de camaradagem! Afinal, é
 dando dicas que se prepara os heróis para
 enfrentar monstros cada vez mais
 desafiadores no futuro!</p>
            `
        }
    ];
    showContent(emblemsInfo);
});

classesBtn.addEventListener('click', () => {
    const classesInfo = [
        {
            title: 'CLASSES DISPONÍVEIS (Coluna 1):',
            text: `
                <p>🛡️ <strong>Guerreiro – O Valente</strong></p>
                <p>Herói destemido e forte, ideal para quem quer estar na linha de frente. Usa espada ou martelo para atacar e escudo para proteger os colegas. Foco na força bruta e resistência. É o guardião da equipe, sempre pronto para a batalha.</p>
                <p>✨ <strong>Mago – O Encantador</strong></p>
                <p>Mestre das artes arcanas, controla elementos, cria ilusões e lê mentes. Capaz de teleportar, curar aliados e manipular o tempo. Traz um toque de magia e mistério para o grupo. Essencial para aventuras que exigem criatividade e poder místico.</p>
                <p>🗡️ <strong>Ladino – O Esperto</strong></p>
                <p>Especialista em furtividade e persuasão. Move-se nas sombras, abre fechaduras e persuade com facilidade. Capaz de usar disfarces, realizar hackeamentos e manter uma rede de contatos. Sempre com um truque na manga, pronto para surpreender os inimigos.</p>
            `
        },
        {
            title: 'CLASSES DISPONÍVEIS:',
            text: `
                <p>⚔️ <strong>Paladino – O Cavaleiro da Luz</strong></p>
                <p>Metade guerreiro, metade clérigo, totalmente protetor da justiça. Cura feridos, protege aliados e luta bravamente. Guiado por uma força divina, nunca foge de uma luta pelo bem. Corajoso e fiel, com frases épicas como “Pelo poder da luz sagrada!”.</p>
                <p>🎶 <strong>Bardo – O Músico Mais Poderoso</strong></p>
                <p>Usa sua música como arma, capaz de inspirar aliados e confundir inimigos. Faz os companheiros mais fortes e pode até fazer os inimigos dormirem. Carismático e divertido, sempre com uma rima pronta. O show nunca para quando o Bardo está no grupo!</p>
                <p>🏹 <strong>Arqueiro – Mestre das Flechas</strong></p>
                <p>Especialista em ataques à distância, rápido e silencioso. Nunca erra o alvo, resolvendo boa parte dos problemas antes do combate corpo a corpo. Sempre busca o melhor ponto de observação, como o topo das árvores. Fundamental para estratégias que exigem precisão.</p>
                <p>🎯 <strong>Resumo final:</strong></p>
                <p>Cada classe oferece uma experiência única, com diferentes estilos de jogo e habilidades. A escolha da classe define o papel do jogador nas aventuras, seja na linha de frente, na retaguarda ou como suporte criativo e estratégico.</p>
            `
        }
    ];
    showContent(classesInfo);
});

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Chama a função para exibir a mensagem inicial quando a página carrega
document.addEventListener('DOMContentLoaded', showInitialMessage);