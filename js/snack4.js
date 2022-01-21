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

/* functions */

/* creo l'array degli studenti */
const students = [
    {id:100,name:'marco giuliani moroni',sumVotes:50},
    {id:121,name:'michele bianchi',sumVotes:60},
    {id:130,name:'giuseppe verdi',sumVotes:70},
    {id:140,name:'enrico gialli',sumVotes:130},
    {id:150,name:'alfredo rossi',sumVotes:140},
    {id:160,name:'pietro marroni',sumVotes:150},
    {id:170,name:'ornella franceschini',sumVotes:71},
    {id:180,name:'francesca rosa',sumVotes:60},
    {id:190,name:'antonietta azzurri',sumVotes:180}
];

/* prendo gli elementi che mi servono */
const table1 = document.getElementById('table-body-one');
const table2 = document.getElementById('table-body-two');
const table3 = document.getElementById('table-body-three');
/* creo un'array vuoto */   
const listNames = [];


/* ciclo su tutti gli studenti */
 students.forEach(({name}) => {

    /* splitto per spazio il nome in un'array di parole*/
    const listWords = name.split(' ');
    /* capitalizzo ogni parola */
    const changedNameArray = listWords.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
    /* la trasformo in stringa separando ogni parola con uno spazio */
    const changedName = changedNameArray.join(' ');

    /* lo pusho nell'array vuoto di nomi */
    listNames.push(changedName);

});

console.table(listNames);
/* stampo in tabella nel DOM*/
listNames.forEach((element) => {
    
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.append(`${element}`);
    tr.append(td);
    table1.appendChild(tr);
});


/* con  un filter creo un nuovo array di oggetti con gli studenti che hanno la somma dei voti superiore a 70 */
const up70 = students.filter(({sumVotes}) => sumVotes > 70);
console.table(up70);
/* stampo in tabella nel DOM*/
up70.forEach(({name,sumVotes}) => {
    
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdSumVotes = document.createElement('td');
    tdName.append(`${name}`);
    tdSumVotes.append(`${sumVotes}`);
    tr.append(tdName);
    tr.append(tdSumVotes);
    table2.appendChild(tr);
});

/* con  un filter creo un nuovo array di oggetti con gli studenti che hanno la somma dei voti superiore a 70
 e un'id superiore a 120*/
const newStudents = students.filter(({id,sumVotes}) => sumVotes > 70 && id > 120);
console.table(newStudents);
/* stampo in tabella nel DOM*/
newStudents.forEach(({id,name,sumVotes}) => {
    
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdSumVotes = document.createElement('td');
    tdId.append(`${id}`);
    tdName.append(`${name}`);
    tdSumVotes.append(`${sumVotes}`);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdSumVotes);
    table3.appendChild(tr);
});


