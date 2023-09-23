"use strict"
let choixMusique;  //je déclare mes variables
let santé=10;
let feux= 30;
let alive = true;
let changement=0;
console.log("John un homme perdu cherche à rentrer chez lui en taxi, il rentre dans un taxi avec une radio contenant 5 sons différents.") //introduction du contexte
    while (alive){ //boucle while avec un boolean en condition de sortie de la boucle
        let Musique = (Math.floor(Math.random() * 5) + 1); //tirer aléatoirement sur 5 musique
        feux=feux-1;// incrémentation des feux rouges
        switch(Musique){ //switch permettant de faire différents cas dont anissa qui enelve 1 de santé et rajoute 1 changement
            case 1:
                choixMusique = "Anissa Wejdene, il quitte le taxi pour changer de taxi car la musique est nulle.";
                santé -=1;
                changement+=1
            break;
            case 2:
                choixMusique = "Gazo Die";
            break;   
            case 3:
                choixMusique = "Idrane Wind";
            break;
            case 4:
                choixMusique = "Ice Rounhaa";
            break;
            case 5:
                choixMusique = "Une place pour toi Sokuu";
            break;
            }
        if (feux==0 || santé ==0) { alive = false;}   //condition permettant la sortie de la boucle si le nombre de feux=0 ou la santé= 0
        console.log("Arrivé au feu rouge, la musique jouée est",choixMusique);
        console.log("Il lui reste", santé,"de vie");
        console.log("il reste",feux,"feux rouge");
    }

if (santé == 0) {
    console.log("EXPLOSION.John a épuisé sa santé."+ " Nombre de feux rouges restants:" + feux);
} else {
    console.log("John a terminé le trajet en " + changement + " changements et avec une santé finale de : " + santé);
} //message de fin ou quand la santé est = a 0 le joueur explose sinon le joueur est arrivé a destination





