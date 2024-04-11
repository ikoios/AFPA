<?php
include "voiture.php";
class Bolide extends Voiture{
    private int $vitesseMax;
    private bool $homologuerRoute;

    public function __construct(string $modele, string $couleur, int $nbrPortes, int $vitesseMax, bool $homologuerRoute) 
    {
        parent::__construct($modele, $couleur, $nbrPortes);
        $this->vitesseMax = $vitesseMax;
        $this->homologuerRoute = $homologuerRoute;
    }
    public function getVitesseMax() {
        return $this->vitesseMax;
    }
    public function getHomologuerRoute() {
        return $this->homologuerRoute;
    }
}
?>