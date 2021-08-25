
//FONCTION RÉCUPÉRER/DISPLAY ID + FETCH PRODUIT 
/*(async function(){
    const teddyId = getArticleId()
    const product = await voirArticle(teddyId)
    dysplayArticle(product)
})();
//RÉCUPÉRATION ID
function getArticleId(){
    return new URl(location.href).searchParasm.get("_id");
};
//RÉCUPÉRATION PRODUIT
function voirArticle(teddyId){
    fetch("http://localhost:3000/api/teddies/${teddyId}")
        .then(response => response.json())
        .then(teddyItem =>{
            return teddyItem
        })
//SI ERREUR
        .catch(function(err){
            alert("Désolé une erreur est survenue, ou la page démandée n'existe pas ! Veuillez réesayer")
        })
};

//ENVOI AU LOCAL STORAGE
const addBasket = panier => {
    localStorage.setItem("panier",JSON.stringify(panier));
};

//DISPLAY DS HTML
function displayArticle(product){
    document.getElementById("containerProduit").innerHTML +=
    `<div class="photo-produit">
        <div class="produit_img">
            <img src=${teddy.imageUrl} alt="Photo de l'article choisi d'ours en peluches" class="image"/>
        </div>
        <div class="produit_description">
            <div class="texte_description-produit">
                <p class="teddy-nom"> ${teddy.name} </p>
                <p class="ted-id"> ${teddy._id} </p>
                <p class=" teddy-des"> ${teddy.description} </p>
                <p class="teddy-prix"> ${teddy.price / 100}€ </p>
                <div id="choixQuantite"
                    <select id="teddyChoix" class="teddy-choix">
                        <option>Choix des couleurs</option>
                    </select>
                    <select id="teddyQuantity" class="teddy-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <p id="teddyPrixTotal"> ${teddy.pricetotal / 100}€ </p>
                </div>
                    <a href="../pagesHTML/panier.html"><button type="submit"id="panier" data-id="${teddy._id}" value="submit">Ajouter au panier</button></a>
            </div>
        </div>
    </div>`;

    //AFFICHAGE OPTIONS COULEURS
    for (let colors of teddy.colors){
        document.getElementById("teddyChoix").innerHTML +=`<option value="1">${colors}</option>`
    }

    //INITIALISER PRIX TOTAL À 0
    const totalTeddy = 0;

    //CALCUL PRIX TOTAL / SEND LOCAL STORAGE
    function totalTeddy(teddy){
    totalPrice += teddy.quantité * teddy.price / 100;
    const totalPrice = document.getElementById("teddyPrixTotal").textContent = Prix Total : + "€";
    localStorage.getItem("teddyPrixTotal", JSON.stringify(prixTotal));
};
    
    //ÉCOUTER L'EVENT AU CLIC
    document.getElementById("panier").addEventListener("click", function(){
        addPanierItem(this.dataset._id)
        //RÉCUPÈRE L'ID DE FAVORITE ITEM DS DATA-ID DU HTML
    });

    //AJOUTER ÉLÉMENT SÉLECTIONNÉ DS PANIER            
    const addPanierItem = teddy => {
        teddy.quantity = parseInt(document.getElementById("teddyQuantite").value);
    //var condition si oui =>get item sinon =>tableau vide    
    let panier = localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("ds_panier")) : [];

    //BOUCLE vrai/faux PARCOURIR PANIER / 
        const teddyPresent = false;
        for (let i =0; i< panier.length; i++){
            let product = panier[i];
            if (product._id === teddy._id){
                teddyPresent = i;
            }
    };
    //POUSSER DS PANIER
        if (false !== teddyPresent){
            panier[teddyPresent].quantity = parseInt(panier[teddyPresent].quantity) + teddy.quantity;
        }else {
            panier.push(teddy);
        };
        addBasket(panier)
        };*/


                















        /*const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");

function voirArticle (teddyId){
    let teddySelected = getArticle()
}

function getArticle(){
    let listeFavorite = document.location
}

//RÉCUPÉRER HTML
const container = document.getElementById("containerProduit");

//ENVOI AU LOCAL STORAGE
const addBasket = panier => {
    localStorage.setItem("panier",JSON.stringify(panier));
};

//METTRE DS HTML
const display = teddy =>{
    container.innerHTML += 
    `<div class="photo_description">
        <img src=${teddy.imageUrl} alt="Image d'ours choisi"/>
    </div>
    <div class="produit_description">
        <div class="texte_description-produit">
            <p> ${teddy.name} </p>
            <p> ${teddy._id} </p>
            <p> ${teddy.description} </p>
            <select class="choix" id="choix">
                <option>Choix des couleurs</option>
            </select>
            <p> ${teddy.price / 100}€ </p>
            <select id="quantite" class="quantité">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
                <a href="../pagesHTML/panier.html"><button type="submit"
                id="panier data-id="${teddy._id}" value="submit">Ajouter au panier</button></a>
        </div>
    </div>`;

    //AFFICHAGE OPTIONS COULEURS
    for (let colors of teddy.colors){
        document.getElementById("teddyChoix").innerHTML +=`<option value="1">${colors}</option>`
    }

    //ÉCOUTER L'EVENT AU CLIC
    document.getElementById("panier").addEventListener("click", function(){
        addPanierItem(this.dataset._id)
        //RÉCUPÈRE L'ID DE FAVORITE ITEM DS DATA-ID DU HTML
    });
};

//AJOUTER ÉLÉMENT SÉLECTIONNÉ DS PANIER            
const addPanierItem = teddy => {
    teddy.quantity = parseInt(document.getElementById("teddyQuantite").value);
//var condition si oui =>get item sinon =>tableau vide    
  let panier = localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("ds_panier")) : [];

//BOUCLE vrai/faux PARCOURIR PANIER / 
    const teddyPresent = false;
    for (let i =0; i< panier.length; i++){
        let product = panier[i];
        if (product._id === teddy._id){
            teddyPresent = i;
        }
    };

//POUSSER DS PANIER
    if (false !== teddyPresent){
        panier[teddyPresent].quantity = parseInt(panier[teddyPresent].quantity) + teddy.quantity;
    }else {
        panier.push(teddy);
    };
    addBasket(panier)
    };

/*CHANGEMENT ADRESSE API
fetch ("http://localhost:3000/api/teddies" + newId) 
    .then(response => response.json())
    .then(function (product){
        const itemChoisi = new Teddies(product);
        display(itemChoisi);
    })*/

//SI API ERREUR
/*.catch(function(err){
    alert(""
};*/



          
