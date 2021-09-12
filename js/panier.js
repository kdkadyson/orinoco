
//RÉCUPÉRER PRODUIT SELECTIONNÉ
let localStorageIn = JSON.parse(localStorage.getItem("produit"));          

//DISPLAY PRODUIT
const voirPanier = document.getElementById("containerPanier")
//SI PANIER VIDE ou PRODUIT SUPPRIMÉ (2 CONDITIONS)
    if(localStorageIn === null || localStorageIn == 0){
        const panierVide = 
        `<div>
            <p id="panierVide" class="panier-vide"> 
                <i class="fas fa-cart-arrow-down"></i> Hélas, votre Panier est vide pour le moment ! 
                </br/>
                Retournez sur la page d'accueil et vous pourrez le remplir.
                <i class="fas fa-cart-arrow-down"></i>
            </p>
        </div>`;
        voirPanier.innerHTML = panierVide;
        document.querySelector(".bouton_panier").style.display = "none";
        document.getElementById("boutonsPanier").style.display = "none";
        document.querySelector(".bouton_vider").style.display = "none";
        document.querySelector(".prix-panier").style.display = "none";
    } else{
        for(j = 0; j < localStorageIn.length; j++){
            voirPanier.innerHTML += 
                `<div class="item-panier">
                    <div class="panier_uno">
                        <div class="panier_photo">
                            <div><img src=${localStorageIn[j].imageUrl} alt="Image d'ours choisi" class="panier_img"/></div>
                        </div>
                        <div class="panier_description">
                            <div class="texte_description-panier">
                                <div class="teddy-nom">${localStorageIn[j].name}</div>
                                <div class="teddy-quantity"> Quantité : ${localStorageIn[j].quantity}</div>
                                <div class="teddy-total"> Total : ${localStorageIn[j].quantity * localStorageIn[j].price} €</div>
                                <input type="button"value="Supprimer" 
                                id="supprimerItem" class="supprimer-item"/></input>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }
    //SUPPRIMER PRODUIT SELON L'ID AU CLICK
    let removeItem = document.querySelectorAll("#supprimerItem");
    
    for(let k = 0; k < removeItem.length; k++){
        removeItem[k].addEventListener("click", (event) =>{
            event.preventDefault();//evite le comportement par défaut des btn à recharger une page
        let itemOter = localStorageIn[k].id_item;
        //MÉTHODE FILTER = SÉLECTIONNER PRODUIT À GARDER ET SUPPRIME AVEC BTN
        localStorageIn = localStorageIn.filter(el => el.id_item !== itemOter);//fonction inverse ! ote seulemt l'élèmt à oter
        localStorage.setItem("produit", JSON.stringify(localStorageIn));
        //FENÊTRE POP UP ALERT
        alert("Ce produit va être supprimé de votre Panier.");
        window.location.href = "panier.html";
    });
}
//VIDER PANIER (méthode insert adjacent html pr ne pas réécrire le contenu de ma div)
const toutVider = `<a class="bouton_vider"> Vider mon Panier <i class="fas fa-trash"></i></a>`;
voirPanier.insertAdjacentHTML("afterend", toutVider);
//SÉLECTIONER BTN VIDER PANIER
const btnSupprimerPanier = document.querySelector(".bouton_vider");
//SUPPRESION KEY PRODUIT DU LS
btnSupprimerPanier.addEventListener("click", (event) =>{//fonction de callback
event.preventDefault();
//VIDER DU LS
localStorage.removeItem("produit");
//ALERT PANIER VIDE
alert ("Vider tout votre Panier ?");
window.location.href = "panier.html";
});

//CALCULER /DISPLAY LE PRIX TOTAL DU PANIER
//RÉCUPÉRER LES PRIX DU PANIER / IF LS PAS VIDE => B. FOR PR CHERCHER PRIX 
let totalPanier = 0;
if( localStorageIn !== null){
    for(let l = 0; l < localStorageIn.length; l++){
        totalPanier += localStorageIn[l].price *localStorageIn[l].quantity; 
    }
}
//DISPLAY DS HTML
const totalBasket =
    `<div class="prix-panier">
        <p> Prix Total : ${totalPanier} € </p>
    </div>`;

voirPanier.insertAdjacentHTML("afterend", totalBasket);



/////////////////////// FORMULAIRE //////////////////////////////

//DISPLAY FORM
const voirForm = () =>{
    const formPage = document.querySelector("#containerForm");  
    const Form = 
`<form method="POST">
    <fieldset id="form" class="form">
        <legend>Passer votre commande en renseignant <br/> vos informations ci-dessous :</legend>
        <div class="box_size2">
            <label for="nom">Nom :</label><span id="nomManquant"></span><br/>
            <input type="text" id="nom" name="nom" required placeholder="ex:  LeBienvenue"/>
        </div>
        <div class="box_size2">
            <label for="prenom">Prenom :</label><span id="prenomManquant"></span><br/>
            <input type="text" id="prenom" name="prenom" required placeholder="ex:  Noé"/>
        </div>
        <div class="box_size2">
            <label for="adresse">Adresse :</label><span id="adresseManquante"></span><br/>
            <input type="text" id="adresse" name="adresse" required  placeholder="ex:  50,rue des Oursons"/>
        </div>
        <div class="box_size2">
            <label for="ville">Ville :</label><span id="villeManquante"></span><br/>
            <input type="text" id="ville" name="ville" required  placeholder="ex:  Paris"/>
        </div>
        <div class="box_size2">
            <label for="email">E-mail :</label><span id="emailManquant"></span><br/>
            <input type="email" id="email" name="email" required placeholder="ex:  oribear@gmail.fr"/>
        </div>                                 
        <input type="submit" value="Commander" id="formSend" class="form-send"/>
        <a href="#" class="form-close">&times;
        </a>
    </fieldset>
</form>`;

//mettre ds html
    voirPanier.insertAdjacentHTML("beforeend", Form);
};
//afficher ds html
voirForm();

//SÉLECTION DU BOUTON SEND FORM
const sendForm = document.querySelector("#formSend");

//EVENT LISTENER / RÉCUPÉRER/VALIDER/SEND DONNÉES LS/SERVER 
sendForm.addEventListener("click", (event) =>{
    event.preventDefault(); 
    //RÉCUPÉRER
    const contact = {  
        firstName: document.querySelector("#prenom").value,    
        lastName : document.querySelector("#nom").value,
        address : document.querySelector("#adresse").value,
        city : document.querySelector("#ville").value,
        email : document.querySelector("#email").value
    }
    
    //VALIDATION FORMULAIRE
    //VAR PATTERN NOM/PRÉNOM/VILLE
    const pattern = (value) =>{//express° de f
        return /^([A-Za-z]{2,25})?([-]{0,1})?([A-Za-z]{2,25})$/.test(value);
    }
    const patternAdresse = (value) =>{
        return /^[A-Za-z0-9\s]{2,50}$/.test(value);
    }
    const patternEmail = (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }

    //VAR ALERT
    const textAlert = (value) =>{
        return `${value} : Les chiffre et symbole ne sont autorisés \n Ne pas dépasser 25 caractères et en avoir un minimum de 2.`;
    }
    
    //FONCTIONS INPUTS MANQUANTS
    function inputManquantVide(querySelectorId){
        document.querySelector(`#${querySelectorId}`).textContent = "";
    }
    function inputManquant(querySelectorId){
        document.querySelector(`#${querySelectorId}`).textContent = "Veuillez bien remplir ce champ.";
    }

    //CONTÔLE DES DONNÉES
    function nomControle(){   
        const leNom = contact.lastName;
        if(pattern(leNom)){
            inputManquantVide("nomManquant");
            return true; 
        }else{
            inputManquant("nomManquant");
            alert(textAlert("NOM"));
            return false; 
        };
    };
    function prenomControle(){   
        const lePrenom = contact.firstName;
        if(pattern(lePrenom)){
            inputManquantVide("prenomManquant");
            return true; 
        }else{
            inputManquant("prenomManquant");
            alert(textAlert("PRÉNOM"));
            return false; 
        }; 
    };
    function adresseControle(){   
        const lAdresse = contact.address;
        if(patternAdresse(lAdresse)){
            inputManquantVide("adresseManquante");
            return true; 
        }else{
            inputManquant("adresseManquante");
            alert("ADRESSE : Votre adresse ne doit contenir que des lettres sans ponctuation et des chiffres.");
            return false; 
        }; 
    };
    function villeControle(){   
        const laVille = contact.city;
        if(pattern(laVille)){
            inputManquantVide("villeManquante");
            return true; 
        }else{
            inputManquant("villeManquante");
            alert(textAlert("VILLE"));
            return false; 
        };
    };
    function emailControle(){   
        const lEmail = contact.email;
        if(patternEmail(lEmail)){
            inputManquantVide("emailManquant");
            return true; 
        }else{
            inputManquant("emailManquant");
            alert("email (@) : Votre email n'est pas valide.");
            return false; 
        };
    };

    //SEND LOCAL STORAGE APRÈS VÉRIFICATIONS
    if(nomControle() && prenomControle() && adresseControle() && villeControle() && emailControle()){ 
        localStorage.setItem("formValues", JSON.stringify(contact));
        localStorage.setItem("prixTotal", JSON.stringify(totalPanier));
        let products = [];
        if(localStorageIn !== null) {
            for(let l = 0 ; l < localStorageIn.length; l++ ) {
                products.push(localStorageIn[l].id_item);
            }
        }
        const dataToSend = JSON.stringify({ contact, products });
        envoiServer(dataToSend);
    }else{
        alert("Veuillez vous assurer que le formulaire soit bien rempli.");
    };  
});
//SEND AU SERVER AVEC API FETCH / MÉTHODE POST
//fonction send server
function envoiServer(dataToSend){
   const promiseServer = 
        fetch("http://localhost:3000/api/teddies/order",{
            method: "POST",
            body: dataToSend,
            headers: {
                "content-type" : "application/json",
            },
        }); 
      
    //RÉCUPÉRER RÉPONSE SERVER /GESTION ERREUR
    promiseServer.then(async(response) =>{
        try {  
            const contenuServer = await response.json();

            if(response.ok){
            //METTRE ID DS LS
                localStorage.setItem("responseId", contenuServer.orderId);
            //AFFICHER ID 
                window.location = "confirm.html";
            }else{
                alert(`Problème avec server : erreur ${response.status}`)
            };
       
        }catch(err){
            alert(`Erreur du catch()${err}`);  
        };
    }); 
}