//FONCTION RÉCUPÉRER / DISPLAY / PRODUIT ID + SEND LS
(async function(){
    const teddyId = getArticleId()
    const product = await voirArticle(teddyId)
})();
//RÉCUPÉRATION ID
function getArticleId(){
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("_id");
    return id;
};
//FETCH / DISPLAY PRODUIT
function voirArticle(teddyId){
    fetch(`http://localhost:3000/api/teddies/${teddyId}`)
    .then(response => response.json())
    .then(teddyItem =>{
        displayArticle(teddyItem) 
        function displayArticle(product){
            document.getElementById("containerProduit").innerHTML +=
                `<div class="photo-produit">
                    <div class="produit_img">
                        <img src=${product.imageUrl} alt="Photo de l'article choisi d'ours en peluches" class="image"/>
                    </div>
                    <div class="produit_description">
                        <div class="texte_description-produit">
                            <p class="teddy-nom"> ${product.name} </p>
                            <p class="teddy-des"> ${product.description} </p>
                            <p class="teddy-prix"> ${product.price / 100}€ </p>
                            <div id="choixQuantite" class="choix-quantity">
                                <label for="optionCouleur"> Choix des couleurs </label>
                                <select id="teddyChoix" class="teddy-choix">

                                </select>
                                <label for="quantite"> Qté </label>
                                <select id="teddyQuantity" class="teddy-quantity">
                                   
                                </select>
                                <p id="teddyPrixTotal" class="teddy-prixtotal" value="Prix total :" ${product.totalprice / 100} € > </p>
                            </div>
                                <a href="../pagesHTML/panier.html"><button type="submit" id="dansPanier"
                                class="dans-panier" value="submit">Ajouter au panier</button></a>
                         </div>
                    </div>
                </div>`;

            //AFFICHAGE OPTIONS COULEURS
            const colorsOption = teddyItem.colors;//recupére mes colors/ boucle for pour afficher
            let voirCouleur = [];
            for(let i = 0; i < colorsOption.length; i++){
                voirCouleur +=
                `<option value="${colorsOption[i]}">${colorsOption[i]}</option>`;
                //METTRE COULEURS DS HTML
                const nomCouleur = document.getElementById("teddyChoix");
                nomCouleur.innerHTML = voirCouleur;
            }

            // OPTIONS QUANTITÉ
            const quantityOption = 
         ` <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>`;
            //METTRE QUANTITÉ DS HTML
            const quantityNumber = 
            document.getElementById("teddyQuantity");
            quantityNumber.innerHTML = quantityOption;
            
            //RÉUPÉRATION DES DONNÉES USER 
            //SELECTION BOUTON Ajouter au panier/EVENT LISTENER
            const sendPanier = document.getElementById("dansPanier");
            sendPanier.addEventListener("click", (event) =>{//function de callback
                event.preventDefault();//pr ne pas reactualiser la page qdon rappuie sue lz btn
            //choix du user color/qte ds var
            const choixQuantite = parseInt(quantityNumber.value);
            console.log(choixQuantite);
        
            //RÉCUPERER VALEUR DE CHOIX
            let optionProduit = {//objet avec ses clés/valeur
                imageUrl : product.imageUrl,
                name : product.name,
                id_item : product._id,
                quantity : choixQuantite,
                price : product.price / 100,
            };
            console.log("optionProduit");
            console.log(product.price);
            
            //RÉCUPÉRER PRODUIT SELECTIONNÉ/ VERIFIER si/ou CRÉER LS / ENVOYER AU LOCAL STORAGE
            let localStorageIn = JSON.parse(localStorage.getItem("produit"));
            
            //FENÊTRE POP UP CONFIRM
            const popupFenetre = () =>{
                if(window.confirm(`(${choixQuantite}) ${product.name} a bien été ajouter à votre Panier.  Consulter votre panier : OK, ou revenir à l'accueil : ANNULER.`)){
                    window.location.href = "panier.html";
                }else{
                    window.location.href = "home.html";
                }
            }
            // fonction send au ls
            const localStorageAjout = () =>{
                localStorageIn.push(optionProduit);//new produit
                localStorage.setItem("produit", JSON.stringify(localStorageIn));
            };
            //SI PRODUIT DS LS
            if(localStorageIn){
                localStorageAjout();
                popupFenetre();
            }//SINON CRÉER LS
            else{
                localStorageIn = [];
                localStorageAjout();
                popupFenetre();
            }
            
        });
 
        }
    })
}
            
                