 //queremos que o terceiro apenas seja executado se o segundo for executado primeiro, por isso a Promisse

function executaSegundo(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){ //está se dividindo em Threads
            console.log("SEGUNDO");
        },1500);
    });
}

console.log("PRIMEIRO");
executaSegundo(); //chamdo a function
console.log("TERCEIRO");