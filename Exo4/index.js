// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1. Titre
const titre = chanson.titre;
const auteur = chanson.auteur;

let h1 = document.createElement('h1');
const small = document.createElement('small')
small.innerHTML = auteur + ' -';
h1.appendChild(small)
h1.innerHTML += titre

document.body.appendChild(h1)

// 2e 
const divParoles = document.createElement('div');
document.body.appendChild(divParoles);



const spanDefinition = document.createElement('span')
chanson.paroles.forEach(element => {
    const lignes = element.contenu.map(elem => elem).join("<br />");
    divParoles.innerHTML += lignes
    const paragraph = document.createElement('p');
    paragraph.className = element.type
    const spanContenu = document.createElement('span')
    if (element.type === 'choeur') {
        spanDefinition.className = 'definition '
        spanDefinition.classList.add('hidden')
        spanDefinition.innerHTML = `[refrain]<br/>`;
        paragraph.appendChild(spanDefinition)
        spanContenu.className = 'contenu'
        spanContenu.innerHTML = element.contenu.join("<br />");
        paragraph.appendChild(spanContenu)

    }
    divParoles.appendChild(paragraph)

});


// 3. Footer
const footer = document.createElement("footer"); // pour créer un nouveau element footer
footer.innerHTML = '© Copyright 2023 - Codeloccol'; // pour ajouter du html dans mon document
document.body.appendChild(footer); //

// 4.
const label1 = document.createElement('label');
const checkboxParoles = document.createElement('input');
const label2 = document.createElement('label');
const checkboxParoles1 = document.createElement('input');
const hr = document.createElement('hr');
divParoles.appendChild(hr)

checkboxParoles.type = 'checkbox';
label1.appendChild(checkboxParoles)
label1.appendChild(document.createTextNode('Masquer les paroles '))
//console.log(label1)
//console.log(checkboxParoles)n 
document.body.appendChild(label1);
document.body.insertBefore(label1, divParoles);


checkboxParoles1.type = 'checkbox';
label2.appendChild(checkboxParoles1)
label2.appendChild(document.createTextNode('Masquer les refrains'))
//console.log(checkboxParoles)
document.body.appendChild(label2);
document.body.insertBefore(label2, divParoles);
document.body.insertBefore(hr, divParoles);
checkboxParoles.addEventListener('click', function (event) {
    // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

    if (event.target.checked) {
        // la case vient d'être cochée
        divParoles.style.display = 'none'; // masquer les paroles
        label1.childNodes[1].textContent = 'Afficher les paroles';
        hr.style.display = "none"
    } else {
        // la case vient d'être decochée
        divParoles.style.display = 'block';
        label1.childNodes[1].textContent = 'Masquer les paroles';
        hr.style.display = "block"
    }
});

const choeur = document.querySelectorAll('.contenu')
const definition = document.querySelectorAll('.hidden')
checkboxParoles1.addEventListener('click', function (event) {
    // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

    if (event.target.checked) {
        // la case vient d'être cochée
        for (let i = 0; i < choeur.length; i++) {
            const element = choeur[i];
            element.classList.add('hidden')
            definition[i].classList.remove('hidden')
        }
        label2.childNodes[1].textContent = 'Afficher les refrains';
        mouseEnter()
        mouseLeave()
    } else {

        for (let i = 0; i < choeur.length; i++) {
            const element = choeur[i];
            element.classList.remove('hidden')
            definition[i].classList.add('hidden')
        }

        label2.childNodes[1].textContent = 'Masquer les refrains';

    }
});


function mouseEnter() {

    for (let i = 0; i < definition.length; i++) {
        const element = definition[i];

        element.addEventListener("mouseenter", () => {
            for (let i = 0; i < choeur.length; i++) {
                const choeurArray = choeur[i];
                choeurArray.classList.remove('hidden')
            }
        })
    }

}


function mouseLeave() {

    for (let i = 0; i < definition.length; i++) {
        const element = definition[i];

        element.addEventListener("mouseleave", () => {
            for (let i = 0; i < choeur.length; i++) {
                const choeurArray = choeur[i];
                choeurArray.classList.add('hidden')
            }
        })
    }
}






