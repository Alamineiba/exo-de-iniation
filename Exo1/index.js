 // 1.Title
const titre = document.body.firstElementChild
titre.textContent = 'Rick Astley - Never Gonna Give You Up';

// 2.Doublon
const doubles = document.querySelectorAll('.couplet') // d'abord selectionner les paragraphes couplet
for (let i = 0; i < doubles.length; i++) {
    const double = doubles[i];
    double.removeChild(double.firstChild) // supprimer les elements d la classe
    double.removeChild(double.firstChild) // supprimer le br
}

// 3.Occurences
const newRefrain = document.querySelectorAll(".refrain");
 for (let i = 0; i < newRefrain.length; i++) {  // parcourir les paragraphes avec la boucle for
    const paragraphe = newRefrain[i].textContent; 
     const lignes = paragraphe.split('\n')
    // console.log(lignes)
     const tableau =  [];
     for (let j = 0; j < lignes.length; j++) {
        if (tableau.includes(lignes[j]) === false) {
            tableau.push(lignes[j])
        }
    }
    newRefrain[i].innerHTML = tableau.join('<br/>') 
    
    /*  newRefrain[i].textContent = ''
  for (let k = 0; k < tableau.length; k++) {
      const element = tableau[k];
      
     newRefrain[i].innerHTML += element +'<br>'
     
  }   */
}  

 // 4. supprimer la div erreur
var supprimer = document.getElementById("erreur");
supprimer.remove();
// 5. créer un élement footer
const footer = document.createElement("footer"); // pour créer un nouveau element footer
footer.innerHTML = '© Copyright 2023 - by Alamine'; // pour ajouter du html dans mon document
document.body.appendChild(footer); // 