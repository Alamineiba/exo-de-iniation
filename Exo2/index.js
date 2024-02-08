 // 1 Substitution
const classeRed = document.querySelectorAll('.red');
//console.log(classeRed);
classeRed.forEach(element => {             // d'abord selectionner l'element qu'on devrait remplacer
    element.classList.remove("red");       // puis supprimer l'ancienne classe
    element.classList.add("blue");         //enfin ajouter la nouvelle classe
}); 

// 2 italique 
 const refrains = document.querySelectorAll('.refrain'); //selection des refrains 
    refrains.forEach(function(refrain) { // pour chaque refrain elements 
        const contenu = refrain.innerHTML; // obtenir le contenu html du refrain 
        refrain.setAttribute('style','font-style: italic;') //utiliser setAttribut pour attribué le style du contenu
        refrain.innerHTML = '<i>' + contenu + '</i>' //  <i> pour representer l'élement courant en italique
    })

// 3 Attenuer la couleur 
const classeblue = document.querySelectorAll(".blue")
classeblue.forEach(element => {
    element.style.background ="#6495DE"; 
})

// 4 supprimer les espaces 
const espace = document.querySelectorAll('P');
espace.forEach(element => {
    element.style.margin = "0";
}); 