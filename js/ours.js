
// FORMAT DE REPRÉSENTATION DES PRODUITS 

class Teddies{  //pr facliter les future entrées
    constructor(jsonTeddyItem){  //format renvoyé par le Backend
        jsonTeddyItem && Object.assign(this, jsonTeddyItem);//assigner jsonProduit à la class Teddies
    }// Object.assign permet de récupérer les attributs de jsonProduct sans les écraser mais 1 à 1 pr les mettre ds This qui est une instance de class produit
};




/*class Teddies {
    constructor({
        name,
        imageUrl,
        price,
        _id,
        description,
        colors,
        quantity
    }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = _id;
        this.description = description;
        this.colors = colors;
        this.quantity = parseInt(quantity, 10); 
        // String en nombre
    }
};*/