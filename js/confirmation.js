//RÉCUPÉRATION ID COMMANDE 
const resultOrder = localStorage.getItem("responseId");
console.log(`responseId : ${resultOrder}`);

//RÉCUPÉRER PRIX TOTAL
const prixTotal = localStorage.getItem("prixTotal");
console.log(`total : ${prixTotal}`);

//METTRE DS HTML
const displayConfirm = document.getElementById("containerConfirm");
const confirm = 
`<div class="confirmation__resume">
    <h2 id="remerciement" class="remerciement"> Votre commande d'un montant de : ${prixTotal} €</br> à bien été enregistrée.<br/>
        ORIBEAR vous remercie pour votre achat. </h2>
    <div class="confirmation_id">
        <p>Référence Commande : <span id="confirmationId">${resultOrder}</span></p>
    </div>
</div>`;
displayConfirm.insertAdjacentHTML("afterbegin", confirm);

//EFFACER LOCAL STORAGE
function localStorageRemove(key){
    localStorage.removeItem(key);
};
localStorageRemove("produit");
localStorageRemove("prixTotal");
localStorageRemove("resultOrder");

/*resultOrder = () =>{
    if(sessionStorage.getItem("order") != null){
        let order = JSON.parse(sessionStorage.getItem("order"));
        //AFFICHAGE NOM/ID
        document.getElementById("remerciement").innerHTML = client.lastName// +Mme/Mr
        document.getElementById("confirmationId").innerHTML = order.orderId
        // ET SI ACTUALISATION PAGE OU ARRIVÉE DIRECT PAGE
        sessionStorage.removeItem("order");
        //SINON MESSAGE ERREUR
    }else{
        alert("Pour passer commande, aller dans votre Panier!");
        window.open("./pagesHTML/home.html");
    }
}*/