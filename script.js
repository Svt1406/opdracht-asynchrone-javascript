// stap 1: 
// const huiswerkMaken = (vak, callback) => {
//         console.log(`ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//         callback();
// }

//huiswerkMaken("wiskunde");

// stap 2: 
// const klaarMetHuiswerk = () => { 
//     console.log('kijk paps/mams, ik ben klaar met mijn huiswerk');
// }
//klaarMetHuiswerk();

// stap 3: 
// huiswerkMaken("wiskunde", klaarMetHuiswerk);

//stap 4: 
const huiswerkMaken = (vak, callback) => { 
    setTimeout (() => {
        console.log(`ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback();
    }, 10000);
}

const klaarMetHuiswerk = () => { 
    console.log('kijk paps/mams, ik ben klaar met mijn huiswerk');
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);


