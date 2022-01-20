/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:0nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
 */

/* FUNCTIONS */

const rdnNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;

/* creo un'array di oggetti 'club' contenente le squadre di calcio */
const club = [
    {name:'Juventus',points:0,foulssuffered:3},
    {name:'Milan',points:0,foulssuffered:0},
    {name:'Inter',points:0,foulssuffered:0},
    {name:'Roma',points:0,foulssuffered:0},
    {name:'Lazio',points:0,foulssuffered:0},
    {name:'Brescia',points:0,foulssuffered:0},
    {name:'Fiorentina',points:0,foulssuffered:0},
    {name:'Napoli',points:0,foulssuffered:0},
    {name:'Atalanta',points:0,foulssuffered:0},
    {name:'Samptoria',points:0,foulssuffered:0},
    {name:'Torino',points:0,foulssuffered:0},
    {name:'Bologna',points:0,foulssuffered:0}
];

/* stampo in console l'array */
console.table(club);