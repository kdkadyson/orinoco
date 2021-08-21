
/*RÉCUPÉRATION URL ET ID PRODUIT 
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");*/

/*function voirArticle (teddyId){
    let teddySelected = getArticle()
}

function getArticle(){
    let listeFavorite = document.location
}*/

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
            <select id="quantité" class="quantité">
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
        document.getElementById("choix").innerHTML +=`<option value="1">${colors}</option>`
    }

    //ÉCOUTER L'EVENT AU CLIC
    document.getElementById("panier").addEventListener("click", function(){
        addPanierItem(this.dataset._id)
        //RÉCUPÈRE L'ID DE FAVORITE ITEM DS DATA-ID DU HTML
    });
};

//AJOUTER ÉLÉMENT SÉLECTIONNÉ DS PANIER            
const addPanierItem = teddy => {
    teddy.quantité = parseInt(document.getElementById("quantité").value);
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
        panier[teddyPresent].quantité = parseInt(panier[teddyPresent].quantité) + teddy.quantité;
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
    alert("Désolé une erreur est survenue, ou la page démandée n'existe pas ! Veuillez réesayer")
};*/



          
