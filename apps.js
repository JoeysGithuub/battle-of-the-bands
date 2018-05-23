let bandNumber = 0;
const bandName ='';

const takeNumber = (bandName) => {
    bandNumber++
    console.log(`${bandNumber}` ,  `${bandName}`)
}

takeNumber ('Pearl Jam');
takeNumber ('Primus');