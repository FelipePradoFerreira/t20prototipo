// scripts/filters/combat-powers.js

const combatPowers = [
    {
        id: 'ataque-poderoso',
        nome: 'Ataque Poderoso',
        descricao: 'Você pode gastar 2 PM para aumentar o dano de um ataque corpo a corpo em +4.',
        tags: ['Combate', 'Dano', 'Corpo a Corpo'],
        tipo: 'Combate',
        requisito: 'Força 13'
    },
    {
        id: 'disparo-rapido',
        nome: 'Disparo Rápido',
        descricao: 'Você pode fazer um ataque adicional com uma arma de disparo, mas sofre -2 em todos os ataques neste turno.',
        tags: ['Combate', 'Distância', 'Disparo'],
        tipo: 'Combate',
        requisito: 'Destreza 13'
    },
    {
        id: 'investida',
        nome: 'Investida',
        descricao: 'Ao se mover em linha reta, você ganha +2 no dano do seu próximo ataque corpo a corpo.',
        tags: ['Combate', 'Movimento', 'Corpo a Corpo'],
        tipo: 'Combate',
        requisito: 'Força 15'
    }
];