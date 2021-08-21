//APPEL DE L'API / RÉCUPÉRATION DES PRODUITS DE LA LISTE
fetch("http://localhost:3000/api/teddies")
.then(response => response.json()) 
.then(listTeddyItem => {
    for(let product of listTeddyItem){ 
        let teddy = new Teddies(product);  
        document.getElementById("container").innerHTML += 
            `<div id="produitsEtPhotos">
                <div class="produits_img">
                    <img src=${teddy.imageUrl} alt="Photo d'article d'ours en peluches"/>
                </div> 
                <div class="produits_descriptions">
                    <div class="texte_description">
                        <p> ${teddy.name} </p>
                        <p> ${teddy._id} </p>
                        <p> ${teddy.description} </p>
                        <p> ${teddy.price / 100}€ </p>
                        <a href ="../pagesHTML/produit.html?_id=${teddy._id}"><input type="button" value="Voir l'article" class="" id="voirArticle">
                    </div>
                </div>
            </div>`
    }//$ pr mettre var ds html
});

//SI ERREUR API
/*.catch(function (err) {
        alert("Désolé une erreur est survenue, ou la page démandée n'existe pas ! Veuillez réesayer")
        });*/

document.getElementById("voirArticle");
