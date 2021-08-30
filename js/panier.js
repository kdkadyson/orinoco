
//RÉCUPÉRER PRODUIT SELECTIONNÉ
let localStorageIn = JSON.parse(localStorage.getItem("produit"));          

//DISPLAY PRODUIT
const voirPanier = document.getElementById("containerPanier")
//SI PANIER VIDE ou(||)PRODUIT SUPPRIMÉ (2 CONDITIONS)
    if(localStorageIn === null || localStorageIn == 0){
    const panierVide = 
    `<div>
        <p> 
            <i id="panierVide" class="fas fa-cart-arrow-down panier-vide"></i> Hélas, votre Panier est vide pour le moment ! </br/>
            Retournez sur la page d'accueil et vous pourrez le remplir.<i class="fas fa-cart-arrow-down">
            </i>
        </p>
    </div>`;
        voirPanier.innerHTML = panierVide;
    }else{
        let produitPanier = [];
        for(j = 0; j < localStorageIn.length; j++){
            produitPanier = 
                `<div class="item-panier">
                    <div class="panier_uno">
                        <div class="panier_photo">
                            <div><img src=${localStorageIn[j].imageUrl} alt="Image d'ours choisi" class="panier_img"/></div>
                        </div>
                        <div class="panier_description">
                            <div class="texte_description-panier">
                                <div class="teddy-nom">${localStorageIn[j].name}</div>
                                <div class="teddy-choix"> Couleur : ${localStorageIn[j].optionCouleur}</div>
                                <div class="teddy-quantity"> Quantité : ${localStorageIn[j].quantity}</div>
                                <div class="teddy-total"> Total : ${localStorageIn[j].quantity * localStorageIn.price} €</div>
                                <input type="button"value="Supprimer" 
                                id="supprimerItem"/></input>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        if(j == localStorageIn.length){ 
            voirPanier.innerHTML = produitPanier;
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
        window.location.href = "panier.html"
    });
}
    
//VIDER PANIER (méthode insert adjacent html pr ne pas réécrire le contenu de ma div)
const toutVider = `<a class="bouton_vider">    Vider mon Panier
                    </a>`;
voirPanier.insertAdjacentHTML ("beforeend", toutVider);
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
//RÉCUPÉRER LES PRIX DU PANIER / B. FOR PR CHERCHER PRIX
let totalPanier = [];
for(let l = 0; l < localStorageIn.length; l++){
    let amountProduct = localStorageIn[l].price;
//AJOUTER AU PRIX TOTAL
totalPanier.push(amountProduct)   
}
//ADDITIONNER LE TOTAL PANIER (MÉTHODE REDUCE)
const calculer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = totalPanier.reduce(calculer,0);//0= valeur par défaut qd panier videsinon erreur 

//DISPLAY DS HTML
const totalBasket =
    `<div class="prix">
        <div id="prixPanier">
            <p> Prix Total : ${prixTotal} </p>
        </div>
    </div>`;

voirPanier.insertAdjacentHTML("beforeend", totalBasket);



                //FORMULAIRE

//DISPLAY FORM
const voirForm = () =>{
    const formPage = document.querySelector("#containerForm");  
    const Form = 
`<form method="POST">
    <fieldset id="form" class="form">
        <legend>Passer votre commande en renseignant vos informations ci-dessous :</legend>
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
        <label for="codePostal">codePostal :</label><span id="codePostalManquant"></span><br/>
        <input type="text" id="codePostal" name="codePostal" required  placeholder="ex:  75001"/>
    </div>
        <div class="box_size2">
            <label for="email">E-mail :</label><span id="emailManquant"></span><br/>
            <input type="email" id="email" name="email" required placeholder="ex:  oribear@gmail.fr"/>
        </div>                                 
        <input type="submit" value="Commander" " id="formSend" class="form_send"/>
        <a href="#" class="form_close">&times;
        </a>
    </fieldset>
</form>`;

//mettre ds html
    voirPanier.insertAdjacentHTML("beforeend", Form);
};
//afficher
voirForm();

//SÉLECTION DU BOUTON SEND FORM
const sendForm = document.querySelector("#formSend");

//EVENT LISTENER / RÉCUPÉRER/VALIDER/SEND DONNÉES LS/SERVER 
sendForm.addEventListener("click", (event) =>{
    event.preventDefault(); 
    //RÉCUPÉRER
    const formValues = {      
        nom : document.querySelector("#nom").value,
        prenom : document.querySelector("#prenom").value,
        adresse : document.querySelector("#adresse").value,
        ville : document.querySelector("#ville").value,
        codePostal : document.querySelector("#codePostal").value,
        email : document.querySelector("#email").value
    }
    console.log(formValues);
    
    //VALIDATION FORMULAIRE
    //VAR PATTERN NOM/PRÉNOM/VILLE
    const pattern = (value) =>{//express° de f
        return /^([A-Za-z]{2,25})?([-]{0,1})?([A-Za-z]{2,25})$/.test(value);
    }
    const patternAdresse = (value) =>{
        return /^[A-Za-z0-9\s]{2,50}$/.test(value);
    }
    const patterncodePostal = (value) =>{
        return /^[0-9]{5}$/.test(value);
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
        const leNom = formValues.nom;
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
        const lePrenom = formValues.prenom;
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
        const lAdresse = formValues.adresse;
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
        const laVille = formValues.ville;
        if(pattern(laVille)){
            inputManquantVide("villeManquante");
            return true; 
        }else{
            inputManquant("villeManquante");
            alert(textAlert("VILLE"));
            return false; 
        };
    };
    function codePostalControle(){   
        const leCodePostal = formValues.codePostal;
        if(patterncodePostal(leCodePostal)){
            inputManquantVide("codePostalManquant");
            return true; 
        }else{
            inputManquantVide("codePostalManquant");
            alert("CODE POSTAL : Il doit être composé de 5 chiffres uniquement.");
            return false; 
        };
    };
    function emailControle(){   
        const lEmail = formValues.email;
        if(patternEmail(lEmail)){
            inputManquantVide("emailManquant");
            return true; 
        }else{
            inputManquantVide("emailManquant");
            alert("email (@) : Votre email n'est pas valide.");
            return false; 
        };
    };

    //SEND LOCAL STORAGE APRÈS VÉRIFICATIONS
    if(nomControle() && prenomControle() && adresseControle() && villeControle() && codePostalControle() && emailControle()){ 
        localStorage.setItem("formValues", JSON.stringify(formValues));
        localStorage.setItem("prixTotal", JSON.stringify(prixTotal));
    //METTRE LE FORMVALUES/CONTENU LS DS OBJET PR SEND QD VÉRIFIÉ
        const sendServer = {
            localStorageIn,
            formValues,
            prixTotal 
        };
        envoiServer(sendServer);
    }else{
        alert("Veuillez vous assurer que le formulaire soit bien rempli.");
    };  
});
//SEND AU SERVER AVEC API FETCH / MÉTHODE POST
//fonction send server
function envoiServer(sendServer){
   const promiseServer = 
   fetch("https://restapi.fr/api/commandeTest",{
       method: "POST",
       body: JSON.stringify(sendServer),
       headers: {
           "content-type" : "application/json",
       },
   });    
//RÉCUPÉRER RÉPONSE SERVER /GESTION ERREUR
       promiseServer.then(async(response) =>{
           try {  
               const contenuServer = await response.json();
               console.log("contenuServer");
               console.log(contenuServer);
               if(response.ok){
                   console.log(`reponse ok: ${response.ok}`);
            //RÉCUPÉRARTION ID RESPONSE
                    console.log("Id commande");
                    console.log(contenuServer._id); 
            //METTRE ID DS LS
                    localStorage.setItem("responseId", contenuServer._id);
            //AFFICHER ID 
                    window.location = "confirm.html";

               }else{
                   console.log(`reponse server: ${response.status}`);
                   alert(`Problème avec server : erreur ${response.status}`)
               };
           } catch (err) {
               console.log("catch");  
               console.log(err);
               alert(`Erreur du catch()${err}`);  
           };
       }); 
}
