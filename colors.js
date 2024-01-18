function alteraCor(cor){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            document.body.style.backgroundColor = cor;
            resolve();
        }, 1500);
    }

    );
   
}

alteraCor('red')
    .then(()=>alteraCor("green"))
    .then(()=>alteraCor("yelow"))
    .then(()=>alteraCor("indigo"))
    .then(()=>alteraCor("black"))
    .then(()=>alteraCor("pink"))
    .then(()=>alteraCor("blue"));
