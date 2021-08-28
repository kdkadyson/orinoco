
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
            produitPanier += 
                `<div class="item-panier">
                    <div class="panier_uno">
                        <div class="panier_photo">
                            <div><img src=${localStorageIn[j].imageUrl} alt="Image d'ours choisi" class="panier_img"/></div>
                        </div>
                        <div class="panier_description">
                            <div class="texte_description-panier">
                                <div class="teddy-nom">${localStorageIn[j].name}</div>
                                <div class="teddy-choix"> <span> Couleur : 
                                </span> ${localStorageIn[j].optionCouleur}</div>
                                <div class="teddy-quantity"> Quantité : 
                                ${localStorageIn[j].quantity}</div>
                                <div class="teddy-total"> Total : 
                                ${localStorageIn[j].quantity * localStorageIn.price / 100} €</div>
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
console.log(prixTotal);                    
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
        <div class="">
            <input type="radio" id="Mr" name="drone" value="Mr" checked>
            <label for="Mr">Mr</label>
            <input type="radio" id="Mme" name="drone" value="Mme" checked>
            <label for="Mme">Mme</label>
        </div>
        <div class="box_size2">
            <label for="nom">Nom :</label><br/>
            <input type="text" id="nom" name="nom" required placeholder="ex:  LeBienvenue"/>
        </div>
        <div class="box_size2">
            <label for="prenom">Prenom :</label><br/>
            <input type="text" id="prenom" name="prenom" required placeholder="ex:  Noé"/>
        </div>
        <div class="box_size2">
            <label for="adresse">Adresse :</label><br/>
            <input type="text" id="adresse" name="adresse" required  placeholder="ex:  50,rue des Oursons"/>
        </div>
        <div class="box_size2">
            <label for="ville">Ville :</label><br/>
            <input type="text" id="ville" name="ville" required  placeholder="ex:  Paris"
                pattern="^[a-zA-Z]{1}[a-zA-Z'À-ÿ -]+$"/>
        </div>
        <div class="box_size2">
        <label for="codePostal">codePostal :</label><br/>
        <input type="text" id="codePostal" name="codePostal" required  placeholder="ex:  75001"
            pattern="^[a-zA-Z]{1}[a-zA-Z'À-ÿ -]+$"/>
    </div>
        <div class="box_size2">
            <label for="email">E-mail :</label><br/>
            <input type="email" id="email" name="email" required placeholder="ex:  oribear@gmail.fr"
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"/>
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
  
//Récupérer /send les données au LS
//SÉLECTION DU BOUTON SEND FORM
const sendForm = document.querySelector("#formSend");

//EVENT LISTENER / RÉCUPÉRER DONNÉES POUR LS 
sendForm.addEventListener("click", (event) =>{
    event.preventDefault(); 

//CLASS PR OBJET ATTRIBUTS 
class formValues{
    constructor(){ 
        this.nom = document.querySelector("#nom").value;
        this.prenom = document.querySelector("#prenom").value;
        this.adresse = document.querySelector("#adresse").value;
        this.ville = document.querySelector("#ville").value;
        this. codePostal= document.querySelector("#codePostal").value;
        this.email = document.querySelector("#email").value
    }
}
//APPELER INSTANCE CLASS FORMVALUES PR CRÉER OBJET donnéesForm
const donnéesForm = new formValues();

//VALIDATION FORMULAIRE
function nameControl(){ 
    const attributsForm = formValues.nom;
        if(/^[A-Za-z]{3,20}$/.test(attributsForm)){
            return true;
        console.log("ok"); 
        }else{
            alert("Les chiffre et symbole ne sont autorisés \n Ne pas dépasser 20 caractères et en avoir un minimum de 3.")
            return false;
        console.log("ko"); 
    };  
};
//SEND LOCAL STORAGE
if(nameControl()){ 
    localStorage.setItem("formValues", JSON.stringify(formValues))  
}else{
    alert("Veuillez vous assurer que le formulaire soit bien rempli.");
}
//METTRE LES VALUES DS OBJET PR SEND AU SERVER SI VÉRIFIÉ
const sendServer = {// 2 objets ds objet
    localStorageIn,
    formValues 
}
//ENVOI AU SERVER








 /*<input type="submit" value="Commander" onclick="location.href='confirm.html';" id="formSend" class="form_send"/>
        <a href="#" class="form_close">&times;
        </a>*/  
})