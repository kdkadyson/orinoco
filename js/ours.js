
// FORMAT DE REPRÉSENTATION DES PRODUITS 

class Teddies{ //pr facliter les future entrées
    constructor(jsonTeddyItem){  //format renvoyé par le Backend
        jsonTeddyItem && Object.assign(this, jsonTeddyItem);//assigner jsonProduit à la class Teddies
    }// Object.assign permet de récupérer les attributs de jsonProduct sans les écraser mais 1 à 1 pr les mettre ds This qui est une instance de class produit
};




