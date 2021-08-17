
//RÉCUPÉRATION DES PROSUITS DU LOCAL STORAGE
const teddies =JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

//RÉCUPÈRER HTML
const contaner = document.getElementById("containerPanier");

//INITIALISER LE PRIX TOTAL À 0
const totalPrice = 0;

//RÉCUPÉRATION ID PRODUIT 
const addPanierId = [];

//CALCUL DU PRIX TOTAL DU PANIER / SEND LOCAL STORAGE
function totalPanier(teddy){
    totalPrice += teddy.quantité * teddy.price / 100;
    const totalPrice = document.getElementById("prixTotal").textContent = totalPrice + "€";
    localStorage.getItem("prixTotal", JSON.stringify(prixTotal));
};

//BOUCLE AFFICHAGE
teddies.forEach((teddy,i) =>{
    container.innerHTML +=
    `<div class="panier_uno uno_marge">
        <div class="panier_photo">
            <img src=${teddy.imageUrl} alt="Image d'ours choisi" class="panier_img"/>
        </div>
        <div class="panier_description">
            <div class="texte_description-panier">
                <p>${teddy.name}</p>
                <p>${teddy.price / 100}€</p>
                <p>${teddy.quantite}</p>
                <input type="button" value="Supprimer" id="supprimerPanier" data-id="${i}"/>
                <p>${teddy.quantite * teddy.price / 100} €</p>
            </div>
        </div>
    </div>`;

//RÉCUPÉRER / BOUCLE CALCUL PRIX TOTAL PANIER
funtion totalPanier(teddy)
    for(let i = 0; i < teddy.quantite; i++){
        addPanierId.push(teddy._id);   
    }
    });

//SUPPRIMER ITEM / ÉCOUTER L'EVENT
function deleteItem(_id){
    let teddy = teddies[_id];
    if (teddy.quantite > 1){ 
        teddy.quantite--;
    }else{
        teddy.splice(_id, 1);
    }
    localStorage.setItem("panier", JSON.stringify(teddies));
    window.location.reload();
}
document.getElementById("supprimerPanier")
    .forEach(deleteBtn => {
        deletebtn.addEventlistener("click",() => deleteItem(deleteBtn.dataset.id))
    });





    



    