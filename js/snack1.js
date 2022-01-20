/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal

BONUS
Stampare in pagina oltre che in console!
 */


/* creo un'array di oggetti 'bikes' */
bikes = [
    {nome:'Bianchi',peso:15},
    {nome:'Carrera',peso:5},
    {nome:'Battaglin',peso:9},
    {nome:'Casati',peso:17},
    {nome:'Mondial',peso:12},
    {nome:'Decathlon',peso:3},
    {nome:'Formigli',peso:2},
    {nome:'Lapierre',peso:7}
];

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