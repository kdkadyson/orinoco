//APPEL DE L'API / RÉCUPÉRATION / AFFICHAGE DES PRODUITS DE LA LISTE
fetch("http://localhost:3000/api/teddies")
.then(response => response.json()) 
.then(listTeddyItem => {
    for(const product of listTeddyItem){ 
        const teddy = new Teddies(product);  
        document.getElementById("container").innerHTML += 
            `<div id="produitsEtPhotos" class="produits-photos">   
                <div class="produits_img">
                    <img src=${teddy.imageUrl} alt="Photo d'article d'ours en peluches" class="images"/>
                </div> 
                <div class="produits_descriptions">
                    <div class="texte_description">
                        <p class="teddy-nom"> ${teddy.name} </p>
                        <p class="teddy-des"> ${teddy.description} </p>
                        <p class="teddy-prix"> ${teddy.price / 100}€ </p>
                        <a href ="../pagesHTML/produit.html?_id=${teddy._id}"><input type="button" value="Voir l'article" class="voir-article" id="voirArticle">
                    </div>
                </div>
            </div>`
        document.getElementById("voirArticle").href += `?id=${teddy._id}`;    
    }
});