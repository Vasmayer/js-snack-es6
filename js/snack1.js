/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal

BONUS
Stampare in pagina oltre che in console!
 */

/* prendo gli elementi che mi servono */
const info = document.getElementById('info-bike');

/* creo un'array di oggetti 'bikes' */
const bikes = [
    {nome:'Bianchi',peso:15},
    {nome:'Carrera',peso:5},
    {nome:'Battaglin',peso:9},
    {nome:'Casati',peso:17},
    {nome:'Mondial',peso:12},
    {nome:'Decathlon',peso:3},
    {nome:'Formigli',peso:2},
    {nome:'Lapierre',peso:7}
];

console.table(bikes);
/* prendo il primo oggetto in assoluto e lo imposto come bicicletta più leggera */
let minWeight = bikes[0];

/* ciclo sull'array di oggetti partendo dalla posizione numero 1  */
for(let i = 1;i < bikes.length;i++)
{
    /* destructuring */
    const {peso}  = bikes[i];

    /* verifico se la bicicletta con minor peso è quella che mi sono salvato in precedenza  nell'oggetto minWeight*/
    if(minWeight.peso > peso)
    {
        minWeight = bikes[i];
    }
}

/* stampo in console la bicicletta che pesa di meno */
console.log(minWeight.nome,minWeight.peso);

/* creo il messaggio da stampare */
let message = `<div class="h1"><i class="far fa-copyright"></i><strong class="mx-5">Brand:</strong><i>${minWeight.nome}</i></div>`;
    message += `<div class="h1"><i class="fas fa-weight-hanging"></i><strong class="mx-5">Peso:</strong><i>${minWeight.peso}</i></div>`;

    info.innerHTML = message;

/* stampo i risultati a schermo */