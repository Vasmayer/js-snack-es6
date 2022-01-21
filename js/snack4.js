/* 
SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da
 id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio) */

/* creo l'array degli studenti */
const students = [
    {id:10,name:'marco giuliani moroni',sumVotes:100},
    {id:20,name:'michele bianchi',sumVotes:110},
    {id:30,name:'giuseppe verdi',sumVotes:120},
    {id:40,name:'enrico gialli',sumVotes:130},
    {id:50,name:'alfredo rossi',sumVotes:140},
    {id:60,name:'pietro marroni',sumVotes:150},
    {id:70,name:'ornella franceschini',sumVotes:160},
    {id:80,name:'francesca rosa',sumVotes:170},
    {id:90,name:'antonietta azzurri',sumVotes:180}
];
   
const listNames = [];
 students.forEach(({name}) => {

    const listWords = name.split(' ');
    const changedNameArray = listWords.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
    const changedName = changedNameArray.join(' ');

    listNames.push(changedName);

});

console.table(listNames);

