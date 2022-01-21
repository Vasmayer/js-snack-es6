/* 
SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

/* ARROW FUNCTION */
const getArrayByPositions = (array,positionOne,positionTwo) =>
{

        /* Ipotizzo che il numero minore sia il paramento 2 e il numero maggiore il 3 */
        let minPosition = positionOne;
        let maxPosition = positionTwo;
        
        /* se il parametro 2 è maggiore gli inverto */
        if(positionOne > positionTwo)
        {
            minPosition = positionTwo;
            maxPosition = positionOne;
        }
        
        /* filtro l'array nelle posizioni passate come paramentro */
       const newArray = array.filter((item,i) => i >= minPosition && i <= maxPosition);

    return newArray;

};

/* prendo gli elementi che mi servono  */
const tableBodySnackTre = document.getElementById('table-body-snack-tre');

/* array di numeri */
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.table(array);

/* richiamo la funzione */
const newArray = getArrayByPositions(array,160,5);
console.table(newArray);

/* stampo con un foreach nella tabella del DOM */
newArray.forEach((element,i) => {
    
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdfoulsSuffered = document.createElement('td');
    tdName.append(`${i}`);
    tdfoulsSuffered.append(`${element}`);
    tr.append(tdName);
    tr.append(tdfoulsSuffered);
    tableBodySnackTre.appendChild(tr);
});



