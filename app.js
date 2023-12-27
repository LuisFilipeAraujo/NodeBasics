console.log("PRIMEIRO");

setTimeout(function(){ //está se dividindo em Threads
    console.log("SEGUNDO");
},1500);

console.log("TERCEIRO");