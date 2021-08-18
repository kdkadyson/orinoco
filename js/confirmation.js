//RÉCUPÉRATION DONNÉES FORMAT JSON
resultOrder = () =>{
    if(sessionStorage.getItem("order") != null){
        let order = JSON.parse(sessionStorage.getItem("order"));
        //AFFICHAGE NOM/ID
        document.getElementById("lastName").innerHTML =order.client.lastName
        document.getElementById("confirmationId").innerHTML =order.orderId
        // ET SI ACTUALISATION PAGE OU ARRIVÉE DIRECT PAGE
        sessionStorage.removeItem("order");
        //SINON MESSAGE ERREUR
    }else{
        alert("Pour passer commande, aller dans votre Panier!");
        window.open("./pagesHTML/home.html");
    }
}