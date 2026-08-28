// scripts/filters/origens-data.js

const origensData = [
    {
        id: 'acolito',
        nome: 'Acólito',
        descricao: 'Você passou seus anos formativos em um templo, dedicando-se a uma divindade ou causa sagrada. A disciplina e a fé são seus pilares.',
        itens: 'Símbolo sagrado, vestes de acólito, livro de orações, 10 T$',
        beneficios: {
            pericias: 'Conhecimento (Religião), Diplomacia',
            poderes: 'Fé Inabalável (Você pode gastar 1 PM para rolar novamente um teste de Vontade)'
        },
        poderUnico: {
            nome: 'Intervenção Divina',
            descricao: 'Uma vez por dia, você pode pedir auxílio à sua divindade. O mestre pode conceder um benefício apropriado à situação.'
        }
    },
    {
        id: 'artesa',
        nome: 'Artesão',
        descricao: 'Você aprendeu um ofício desde cedo, seja como ferreiro, carpinteiro, alfaiate ou outro. Suas mãos habilidosas criam objetos de valor.',
        itens: 'Ferramentas de ofício, matéria-prima (10 T$), 15 T$',
        beneficios: {
            pericias: 'Ofício (qualquer um), Conhecimento (Engenharia)',
            poderes: 'Oficina Móvel (Você pode gastar 1 PM para improvisar uma ferramenta simples com materiais disponíveis)'
        },
        poderUnico: {
            nome: 'Criação Superior',
            descricao: 'Uma vez por semana, você pode criar um item de qualidade excepcional, que concede +1 em testes relacionados ao seu uso.'
        }
    },
    {
        id: 'assassino',
        nome: 'Assassino',
        descricao: 'Você foi treinado nas artes da morte silenciosa. Seja por um guilda de assassinos ou por um mentor particular, você sabe como eliminar alvos com eficiência.',
        itens: 'Adaga, kit de disfarce, 20 T$',
        beneficios: {
            pericias: 'Furtividade, Ladinagem',
            poderes: 'Ataque Furtivo (Você causa +1d6 de dano ao atacar um inimigo desprevenido)'
        },
        poderUnico: {
            nome: 'Sombra Letal',
            descricao: 'Uma vez por dia, você pode realizar um ataque furtivo que causa +3d6 de dano em vez de +1d6.'
        }
    },
    {
        id: 'cavaleiro',
        nome: 'Cavaleiro',
        descricao: 'Treinado na arte da guerra e da cavalaria, você serviu a um senhor ou a uma ordem. Honra e lealdade são seus princípios.',
        itens: 'Cavalo de montaria, armadura leve, 25 T$',
        beneficios: {
            pericias: 'Cavalgar, Diplomacia',
            poderes: 'Postura Defensiva (Você recebe +1 na Defesa quando está montado)'
        },
        poderUnico: {
            nome: 'Carga Imparável',
            descricao: 'Uma vez por combate, você pode realizar uma carga montada que causa +2d6 de dano e derruba o alvo.'
        }
    },
    {
        id: 'eremita',
        nome: 'Eremita',
        descricao: 'Você viveu isolado em um local remoto, em comunhão com a natureza ou em busca de iluminação espiritual. A solidão o tornou sábio e autossuficiente.',
        itens: 'Equipamento de acampamento, ervas medicinais, 10 T$',
        beneficios: {
            pericias: 'Sobrevivência, Percepção',
            poderes: 'Sentidos Aguçados (Você recebe +2 em testes de Percepção e Sobrevivência)'
        },
        poderUnico: {
            nome: 'Visão Interior',
            descricao: 'Uma vez por dia, você pode meditar por 10 minutos para receber uma visão ou premonição sobre um evento futuro.'
        }
    },
    {
        id: 'mercenario',
        nome: 'Mercenário',
        descricao: 'Você vendeu sua espada para quem pagasse melhor. A vida de mercenário o ensinou a sobreviver em qualquer situação e a confiar apenas em si mesmo.',
        itens: 'Arma marcial, uniforme de soldado, 30 T$',
        beneficios: {
            pericias: 'Atletismo, Intimidação',
            poderes: 'Instinto de Sobrevivência (Você recebe +1 em testes de Iniciativa)'
        },
        poderUnico: {
            nome: 'Veterano de Guerra',
            descricao: 'Uma vez por combate, você pode ignorar os efeitos de um ataque que o deixaria com 0 PV ou menos, ficando com 1 PV.'
        }
    },
    {
        id: 'nobre',
        nome: 'Nobre',
        descricao: 'Nascido em berço de ouro, você cresceu entre a elite da sociedade. Sua linhagem lhe concede privilégios e responsabilidades.',
        itens: 'Roupas finas, jóia de família (100 T$), 50 T$',
        beneficios: {
            pericias: 'Diplomacia, Conhecimento (Nobreza)',
            poderes: 'Presença Imponente (Você recebe +2 em testes de Diplomacia e Intimidação)'
        },
        poderUnico: {
            nome: 'Chamado à Honra',
            descricao: 'Uma vez por dia, você pode invocar sua linhagem para receber um favor de um nobre ou autoridade local.'
        }
    },
    {
        id: 'pastor',
        nome: 'Pastor',
        descricao: 'Você cuidou de rebanhos e viveu em contato com a natureza. A simplicidade da vida pastoril lhe ensinou paciência e observação.',
        itens: 'Cajado, manto de pastor, 10 T$',
        beneficios: {
            pericias: 'Adestramento, Sobrevivência',
            poderes: 'Fala com Animais (Você pode se comunicar com animais domesticados por 1 minuto gastando 1 PM)'
        },
        poderUnico: {
            nome: 'Chamado da Natureza',
            descricao: 'Uma vez por dia, você pode convocar um animal de porte médio para auxiliá-lo por 1 hora.'
        }
    },
    {
        id: 'soldado',
        nome: 'Soldado',
        descricao: 'Você serviu em um exército ou milícia, conhecendo a disciplina e o horror da guerra. A camaradagem e o treinamento são sua base.',
        itens: 'Armadura leve, arma marcial, uniforme, 15 T$',
        beneficios: {
            pericias: 'Atletismo, Intimidação',
            poderes: 'Formação Militar (Você recebe +1 em testes de Iniciativa e Percepção)'
        },
        poderUnico: {
            nome: 'Estratégia de Batalha',
            descricao: 'Uma vez por combate, você pode conceder +2 em um teste de ataque ou defesa a um aliado em alcance curto.'
        }
    }
];