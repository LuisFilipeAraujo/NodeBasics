function executaSegundo(){
    setTimeout(function(){ //está se dividindo em Threads
        console.log("SEGUNDO");
    },1500);
}

console.log("PRIMEIRO");
executaSegundo();
console.log("TERCEIRO");