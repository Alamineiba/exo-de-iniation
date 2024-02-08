// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
const h1 = document.getElementById('fullName');
h1.innerHTML = `Hey, I'm ${datas.fullname} `;
// 2.
const profil = document.getElementById('profil');
profil.innerHTML = `${datas.profil}`;
// 3.
const p = document.getElementById('description');
p.innerHTML = `${datas.description}`;
// 4.
const image = document.querySelector('img');
image.src = datas.picture;
// 5.
const social = document.querySelectorAll('.socials')
social.forEach( function(element) {
    element.innerHTML = '';
    datas.socials.forEach(socio =>{
        element.innerHTML +=  `<li>
        <a href="${socio.url}"><img src="${socio.link}" alt="${socio.name}"></a>
      </li>`
    })
})    
// 6.
const travail = document.querySelectorAll('#works')
travail.forEach(function(job) {
    job.innerHTML = '';
    datas.works.forEach(travail =>{
        job.innerHTML += ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
        <div class="card">
          <img class="card-img-top" src="${travail.preview}" alt="datasWorksName">
          <div class="card-body w-100 px-0">
            <h2 class="card-title mt-0 mb-4 text-center">${travail.name}</h2>
            <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
              <!-- 
                <li>
                  <span class="card-link">${travail.technology}</span>
                </li>
                -->
            </ul>
            <div class="row w-100">
              <div class="d-flex justify-content-center">
                <a href="${travail.url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
})  
// 7.
const connaissance = document.querySelectorAll('#experiences')
connaissance.forEach(function(expert) {
    expert.innerHTML = '';
    datas.experiences.forEach(element =>{
        expert.innerHTML += ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
        <div class="card h-100">
          <img class="card-img-top" src="${element.link}" alt="">
          <div class="card-body w-100 px-0">
            <h2 class="card-title mt-0 mb-4 text-center">${element.name}</h2>
            <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
              <!-- 
                <li>
                  <span class="card-link">${datas.experiences}</span>
                </li>
              -->
            </ul>
          </div>
        </div>
      </div>`
    })
})  
// 8.
const adress = document.getElementById('mail')
adress.innerHTML = `${datas.email}`