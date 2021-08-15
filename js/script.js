
//APPEL DE L'API / RÉCUPÉRATION DES ARTICLES DE LA LISTE

fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(function (listeProduct) {
        for(let product of listeProduct) {
            let teddy = new Teddy(product)
            display(teddy);
        }
    })

//AFFICHAGE DE LA PAGE HOME HTML

let container = document.getElementById("container");

const display = teddy => {
    container.innerHTML +=` 
    <div id="articlesEtPhotos">
        <div class="articles_photos">
            <img src="${teddy.imageUrl}" alt="Photo d'article d'ours en peluches"/>
        </div>
        <div class="articles_descriptions">
            <div class="texte">
                <p> ${teddy.name} </p>
                <p> s{teddy.id} </p>
                <p> ${teddy.description} </p>
                <p> ${teddy.price / 100}€ </p>
            </div>
        </div>
    </div>`
};

    //SI ERREUR API

    .catch(function (err) {
        console.log("fetch Error")
        alert("Désolé une erreur est survenue, ou la page démandée n'existe pas ! Veuillez réesayer")
    })


//FUNCTION INITIAL EXÉCUTÉE DÈS CHARGEMENT
/*(async function() {
    const products = await getProducts()
    for (product of products) {
        displayProduct(product)
    }
})()
//APPEL DE L'API / RÉCUPÉRATION DES DONNÉES 
    function getProducts() {
        return fetch("http://localhost:3000/api/teddies")
        .then(function(response) {
            return response.json()
        })
        .then (function(products) {

        })

        //SI ERREUR API
    .catch(function (err) {
    alert("Désolé une erreur est survenue, ou la page démandée n'existe pas ! Veuillez réesayer")
    })

    }
    function displayProducts() {
        document.getElementById("container") 
        .innerHtml +=`
        <article id="produitsEtPhotos">
            <div class="produits_photos">
                <img src="${teddy.imageUrl}" alt="Photo d'article d'ours en peluches"/>
            </div>
            <div class="produits_descriptions">
                <div class="texte">
                    <p> ${teddy.name} </p>
                    <p> s{teddy.id} </p>
                    <p> ${teddy.description} </p>
                    <p> ${teddy.price / 100}€ </p>
                </div>
            </div>
        </article>`
    }*/