 //queremos que o terceiro apenas seja executado se o segundo for executado primeiro, por isso a Promisse
 function executaPrimeiro(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){ //está se dividindo em Threads
            console.log("PRIMEIRO");
            resolve();
        },1000);
    });
}

function executaSegundo(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){ //está se dividindo em Threads
            console.log("SEGUNDO");
            resolve();
        },3000);
    });
}

function executaTerceiro(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){ //está se dividindo em Threads
            console.log("TERCEIRO");
            resolve();
        },5000);
    });
}

executaPrimeiro()
    .then(()=> executaSegundo())
    .then(()=> executaTerceiro());

//executaSegundo();
//executaTerceiro();
