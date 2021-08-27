
//AJOUTER/ RÉCUPÉRER / ENREGISTRER LES PRODUITS AU LOCAL STORAGE
    function addFavorites(teddyId){
        const listeFavorites = getFavorites();//récupére la liste
        const favorite = displayFavotites(listeFavorites)
        listeFavorites.push(teddyId);//Ajouter produit ds tableau
        saveFavorites(listeFavorites);   
    }
    function getFavorites(){
        let listeFavorites = localStorage.getItem("listeFavorites");//si getItem ne trouve rien, retourne null + affichage mess html
            if(listeFavorites == null){
                return /*document.getElementById("panierVide").innerHTML +=
                        `<p><i class="fas fa-cart-arrow-down"></i> Hélas, votre Panier est vide pour le moment ! </br/>
                        Retournez sur la page d'accueil et vous pourrez le remplir.<i class="fas fa-cart-arrow-down"></i></p>`;*/
            }else{//sinon parse car LS ne peux pas enreg. données complexes kom (tableaux/objets) désérialiser au format json
                return JSON.parse(listeFavorites);
            }
    }
    function displayFavotites(favorite){ 
        document.getElementById("containerPanier").innerHTML +=
        `<div class="item-panier">
                <div class="panier_uno">
                    <div class="panier_photo">
                        <img src=${favorite.imageUrl} alt="Image d'ours choisi" class="panier_img"/>
                    </div>
                    <div class="panier_description">
                        <div class="texte_description-panier">
                            <p class="teddy-nom">${favorite.name}</p>
                            <p class="teddy-id">${favorite._id}</p>
                            <p class="teddy-quantity">Quantité : ${favorite.quantity}</p>
                            <p class="teddy-total"> :Prix Total : ${favorite.quantity * favorite.price / 100} €</p>
                            <input type="button" value="Supprimer" id="supprimerPanier" data-id="${i}"/>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    function saveFavorites(listeFavorites){
        localStorage.setItem(listeFavorites, JSON.stringify(listeFavorites));
    };
        
        
    

/*const teddies =JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

//RÉCUPÉRATION ID PRODUIT 
const addPanierId = [];

//RÉCUPÉRER HTML
const container = document.getElementById("containerPanier");

//INITIALISER LE PRIX TOTAL À 0
const totalPrice = 0;

//CALCUL DU PRIX TOTAL DU PANIER / SEND LOCAL STORAGE
function totalPanier(teddy){
    totalPrice += teddy.quantité * teddy.price / 100;
    const Price = document.getElementById("prixTotal").textContent = "Prix Total :" + "€";
    localStorage.getItem("prixTotal", JSON.stringify(prixTotal));
};

//RÉCUPÉRER / BOUCLE CALCUL PRIX TOTAL PANIER
function totalPanier(teddy){ 
    for(let i = 0; i < teddy.quantite; i++){
        addPanierId.push(teddy._id);   
    }
};

//BOUCLE AFFICHAGE
teddies.forEach((teddy,i) =>{
    container.innerHTML +=
    `<div class="item-panier">
        <div class="panier_uno">
            <div class="panier_photo">
                <img src=${teddy.imageUrl} alt="Image d'ours choisi" class="panier_img"/>
            </div>
            <div class="panier_description">
                <div class="texte_description-panier">
                    <p class="teddy-nom">${teddy.name}</p>
                    <p class="teddy-quantity">Quantité : ${teddy.quantity}</p>
                    <p class="teddy-total"> :Prix Total : ${teddy.quantite * teddy.price / 100} €</p>
                    <input type="button" value="Supprimer" id="supprimerPanier" data-id="${i}"/>
                </div>
            </div>
        </div>
    </div>`;
});

//SUPPRIMER ITEM / ÉCOUTER L'EVENT
function deleteItem(_id){
    let teddy = teddies[_id];
    if (teddy.quantite > 1){ 
        teddy.quantite --;
    }else{
        teddy.splice(_id, 1);
    }
    localStorage.setItem("panier", JSON.stringify(teddies));
    window.location.reload();
}
document.getElementById("supprimerPanier")
teddies.forEach((deleteBtn) => {
        deletebtn.addEventlistener("click",() => deleteItem(deleteBtn.dataset.id))
    });
*/

                 //FORMULAIRE

//VÉRIFIER lES DONNÉES
checkInput = () =>{
    //Controle Regex
    let checkString = [a-zA-Z];
    let checkNumber = [0-9];

    //MESSAGE FIN DE CONTRÔLE
    let checkMessage = "";

    //RÉCUPÉRER DONNNÉES
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;
    let email = document.getElementById("e-mail").value;

    //TESTER DONNÉES
    //nom/prénom => aucun nbre ni charactères spèciaux
    if(checkNumber.test(nom) == true || checkSpecialCharacter.test(nom) == true || nom == ""){
        checkMessage = "Vérifier ou renseigner votre Nom";
    }else{
        console.log("Administration Nom ok");
    };
    if (checkNumber.test(prenom) == true || checkSpecialCharacter.test(prenom) == true || prenom == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre Prénom";

    }else{
        console.log("Administration Prénom ok")
    };
    //adresse avec ou ss no de rue et ss charactères spéciaux
    if(checkSpecialCharacter.test(adresse) == true || adresse == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre Adresse";
    }else{
        console.log("Administration Adresse ok");
    };
    //ville => aucune ville en France ne comporte de chiffre ou charactères spéciaux
    if(checkNumber.test(ville) == true || checkSpecialCharacter.test(ville) == true || ville == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre Ville";
    }else{
        console.log("Administration Ville ok");
    };
    //SI UN DES CHAMPS MAL/NON REMPLI => MESSAGE
    if(checkMessage !=""){
        alert("il est nécessaire de :" + "\n" + checkMessage);
    } 
    //RÉCUPÉRER LES DONNÉES CLIENTS DS OBJECT
    
    else{
        client = {
            lasttName : nom,
            firstName : prenom,
            adresse : adresse,
            city : ville,
            email : email
        };
        return client;
    };
};

//VÉRIFIER PANIER /SEND 
checkPanier = () =>{
 //Vérifier qu'il y ai au moins un produit dans le panier
 let etatPanier = JSON.parse(localStorage.getItem("panier"));
 //SI PANIER VIDE =>SUPPRIMER DU LOCAL STORAGE / ALERT
 if(etatPanier == null){
     // ET SI USER CONTINU PROCESS DE COMMANDE
     alert("Il y a eu un problème avec votre panier, merci de recharger la page pour le corriger");
     return false
 }else if(etatPanier.length < 1 || etatPanier == null){
     alert("Votre panier est vide");
     return false;
 }else{
     //AJOUTER PANIER ET SEND
     JSON.parse(localStorage.getItem("panier")).forEach((product) =>{
         products.push(product._id);
     });
     return true;
 }
};

//ENVOYER FORMULAIRE À API AVEC SA F. REQUEST POST
donneesEnvoi = (objectRequest) =>{
    return new Promise((resolve) =>{
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(this.readyState == XMLHttpRequest.DONE && this.status == 201){
    //RÉCUPÉRER RETOUR API / AFFICHAGE DS CONFIRM.HTML
     sessionStorage.setItem("order",this.resposeText);
    //CHARGER LA PAGE DE CONFIRMATION
     document.forms["basketForm"].action = "../pagesHTML/confirm.html";
     document.forms["basketForm"].submit();
     resolve(JSON.parse(tjis.resposeText));
    }
    };
    request.open("POST",APIURL + "order");
    request.setRequestHeader("content-Type", "application/json");
    request.send(objectRequest);
});
  };

//ÉCOUTER L'EVENT AU CLICK 
validForm = () =>{
    let sendForm = document.getElementById("formSend");
    sendForm.addEventlistener("click", function(){
        //VÉRIFIER PANIER / FORM => OBJECT À SEND
        if (checkPanier() == true && checkInput() !=null){
            let objet = {
                client,products
            };
            //CONVERSION JSON
            let objectRequest = JSON.stringify(object);
            //F. ENVOYER OBJECT
            donneesEnvoi(objectRequest)
            //RETOURNER ÉTAT INITIAL
            client = {};
            products = [];
            localStorage.clear();
        }else{
            console.log("ERREUR");
        };
    });
};












    



    