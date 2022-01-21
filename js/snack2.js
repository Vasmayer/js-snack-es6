/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e 
falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
 */


/*****************  FUNCTIONS ********************/

const rdnNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;

/* creo un'array di oggetti 'club' contenente le squadre di calcio */
const clubs = [
    {name:'Juventus',points:0,foulsSuffered:0},
    {name:'Milan',points:0,foulsSuffered:0},
    {name:'Inter',points:0,foulsSuffered:0},
    {name:'Roma',points:0,foulsSuffered:0},
    {name:'Lazio',points:0,foulsSuffered:0},
    {name:'Brescia',points:0,foulsSuffered:0},
    {name:'Fiorentina',points:0,foulsSuffered:0},
    {name:'Napoli',points:0,foulsSuffered:0},
    {name:'Atalanta',points:0,foulsSuffered:0},
    {name:'Samptoria',points:0,foulsSuffered:0},
    {name:'Torino',points:0,foulsSuffered:0},
    {name:'Bologna',points:0,foulsSuffered:0}
];

const newClubs = [];

/* recupero gli elementi che mi servono */

const tableBody = document.getElementById('table-body');
/* stampo in console l'array */
console.table(clubs);

const min = 0;
const max = 100;

/* creo un ciclo per leggere l'array di oggetti */
for(let i = 0;i < clubs.length;i++)
{
    const currentClub = clubs[i];
    const points = rdnNumber(min,max);
    const foulsSuffered = rdnNumber(min,max);
    /* setto i valori */
    currentClub.points = points
    currentClub.foulsSuffered = foulsSuffered;

    /* destrutturo */
    const {name} = currentClub;

    /* creo un'oggetto vuoto */
    const newClub = {};
   
    /* carico l'oggetto con i valori */
    newClub['name'] = name;
    newClub['foulsSuffered'] = foulsSuffered;

    /* pusho l'oggetto nell'array */
    newClubs.push(newClub);

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdfoulsSuffered = document.createElement('td');
    tdName.append(`${newClub.name}`);
    tdfoulsSuffered.append(`${newClub.foulsSuffered}`);
    tr.append(tdName);
    tr.append(tdfoulsSuffered);

    tableBody.appendChild(tr);


    
}

/* stampo la tabella con i dati caricati */
console.table(clubs);
console.table(newClubs);

