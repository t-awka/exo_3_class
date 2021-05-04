class Objet {
    constructor(nom, prix) {
        this.nom = nom,
        this.prix = prix
    }
}

let carotte = new Objet("carotte", 1);
let ananas = new Objet("ananas", 2.5);

class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom,
        this.sac = sac,
        this.argent = argent
        this.prendre = () =>  {
        },
        this.acheter = (vendeur, objet) => {
            if (this.argent >= objet.prix) {
                this.sac.push(vendeur.sac[vendeur.sac.indexOf(objet)].nom)
                vendeur.sac.pop()
                vendeur.argent = vendeur.argent + 1
                this.argent = this.argent - 1
            } else {
                return console.log("Faut réessayer frérot");
            }
        }
    }
}

let grumpyCat = new Personnage("Grumpy Cat premier du nom", [carotte.nom], 1);
let kermit = new Personnage("Kermit the frog", [ananas.nom], 2.5);

grumpyCat.acheter(kermit, ananas);
kermit.prendre();

console.log(grumpyCat);
console.log(kermit);