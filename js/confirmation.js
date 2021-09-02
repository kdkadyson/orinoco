//RÉCUPÉRATION ID COMMANDE 
const resultOrder = localStorage.getItem("responseId");

//RÉCUPÉRER PRIX TOTAL
const prixTotal = localStorage.getItem("prixTotal");

//METTRE DS HTML
const displayConfirm = document.getElementById("containerConfirm");
const confirm = 
`<div class="confirmation__resume">
    <h2 id="remerciement" class="remerciement"> Votre commande d'un montant de : ${prixTotal} €</br> à bien été enregistrée.<br/>
        ORIBEAR vous remercie pour votre achat. </h2>
    <div class="confirmation_id">
        <p>Référence Commande : </br><span id="confirmationId">${resultOrder}</span></p>
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