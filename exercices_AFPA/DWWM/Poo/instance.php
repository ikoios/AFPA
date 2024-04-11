<?php
// include "voiture.php";
include "bolide.php";
$voiture1 = new Voiture("BMW", "Grise", 4);
$voiture2 = new Voiture("Mercedes", "Noir", 4);
$voiture3 = new Voiture("Peugeot", "Bleu", 2);
// 
echo $voiture1->getModele() . " | " . $voiture1->getCouleur() . " | " . $voiture1->getNbrPortes() . " Portes" . "<br>";
echo $voiture2->getModele() . " | " . $voiture2->getCouleur() . " | " . $voiture2->getNbrPortes() . " Portes" . "<br>";
echo $voiture3->getModele() . " | " . $voiture3->getCouleur() . " | " . $voiture3->getNbrPortes() . " Portes" . "<br><hr>";
// 
$voiture1->setModele("Wolksvagen");
echo $voiture1->getModele() . " | " . $voiture1->getCouleur() . " | " . $voiture1->getNbrPortes() . " Portes" . "<br><hr>";
// 
$bolide = new Bolide("Bugatti", "Mauve", 2, 320, false);
echo $bolide->getModele() . " | " . $bolide->getCouleur() . " | " . $bolide->getNbrPortes() . " Portes" . " | " . $bolide->getVitesseMax()  . " Km/h";
if(!$bolide->getHomologuerRoute()) {
    echo " | Ce bolide n'est pas homologué pour la route  <br><hr>";
}
// 
$newCar = new Voiture("Aston-Martin", "Girse", 4);
echo $newCar->getModele() . " | " . $newCar->getCouleur() . " | " . $newCar->getNbrPortes() . " Portes" . " | " . $newCar->allumerPhares()  . $newCar->changerVitesse(50)  . $newCar->klaxonner();