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
                            <p class="ted-id"> ${product._id} </p>
                            <p class=" teddy-des"> ${product.description} </p>
                            <p class="teddy-prix"> ${product.price / 100}€ </p>
                            <div id="choixQuantite class="choix-quantity">
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
                                <p id="teddyPrixTotal" class="teddy-prixtotal" value="Prix total :" ${product.totalprice / 100} € > </p>
                            </div>
                                <a href="../pagesHTML/panier.html"><button type="submit" id="dansPanier"
                                class="dans-panier" data-id="${product._id}" value="submit">Ajouter au panier</button></a>
                         </div>
                    </div>
                </div>`;
                //ENVOI AU LOCAL STORAGE
                document.getElementById("dansPanier")
                addEventListener("click", function(){//idem like, fonction anonyme +ancienne
                addFavorites(teddyItem)
                })
                //AFFICHAGE OPTIONS COULEURS
                for (let colors of teddyItem.colors){
                    document.getElementById("teddyChoix").innerHTML +=
                    `<option value="1">${colors}</option>`;
                } 
        
                // 1/ INITIALISER PRIX TOTAL À 0 / CALCUL PRIX TOTAL 
                /*let totalPrice = 0;
                JSON.parse(localStorage.getItem(teddyItem))
                .forEach((product) =>{
                    totalPrice += product.price / 100;
                });
                //AFFICHAGE PRIX TOTAL 
                document.getElementById("teddyPrixTotal").textContent = Prix Total + "€";              
                */

                // 2/ INITIALISER PRIX TOTAL À 0
                /*const total = 0;
                //CALCUL PRIX TOTAL / SEND LOCAL STORAGE
                function totalTeddy(teddyId) {
                    total += product.quantité * product.price / 100;
                    const totalPrice = document.getElementById("teddyPrixTotal").textContent = "Prix Total :" + "€";
                    localStorage.getItem("teddyPrixTotal", JSON.stringify(prixTotal));
                }*/      
        }                       
    })
    //AJOUTER ÉLÉMENT SÉLECTIONNÉ DS PANIER            
    const addPanierItems = teddyItem => {
        product.quantity = parseInt(document.getElementById("teddyQuantite").value);
    //var condition si oui =>get item sinon =>tableau vide    
    const panier = localStorage.getItem("teddyItem") ? JSON.parse(localStorage.getItem("teddyItem")) : [];
    
    //BOUCLE vrai/faux PARCOURIR PANIER / 
    const teddyPresent = false;
    for (let i =0; i< panier.length; i++){
        let product = panier[i];
        if (product._id === teddy._id){
            teddyPresent = i;
        }
        //POUSSER DS PANIER
        if (false !== teddyPresent){
            panier[teddyPresent].quantity = parseInt(panier[teddyPresent].quantity) + product.quantity;
        }else {
            panier.push(teddyItem);
        };
        addBasket(panier);
    };
    };
}

    
    
//ENVOI AU LOCAL STORAGE

    /* 1/ const addBasket = teddyId => {
        localStorage.setItem("teddyId",JSON.stringify(panier));
    };*/

    /* 2/  const like = document.getElementById("dansPanier");
                like.addEventListener("click", async function(){
                    const produit = await getArticleId();
                    itemSelected.push(produit);
                    localStorage.setItem("itemSelected",JSON.stringify(itemSelected));
                    console.log(itemSelected);
            })*/ 
        
    /*3/ document.querySelectorAll(".dans-panier")
        .forEach(like =>{
            /*like.addEventListener("click", function(){
                addFavorites(this.dataset.id)}); //this = like/ récupére l'id ds html data-id
    })*/
