<?php
include "fonctionnalitesVoiture.php";
class Voiture implements FonctionnalitesVoiture
{
    private string $modele;
    private string $couleur;
    private int $nbrPortes;

    public function __construct(string $modele, string $couleur, int $nbrPortes)
    {
        $this->modele = $modele;
        $this->couleur = $couleur;
        $this->nbrPortes = $nbrPortes;
    }
    // 
    public function demarer()
    {
        return "démarrage";
    }
    public function freiner()
    {
        return "freinage";
    }
    public function accelerer()
    {
        return "accélération";
    }
    // 
    public function getModele(): string
    {
        return $this->modele;
    }
    public function getCouleur(): string
    {
        return $this->couleur;
    }
    public function getNbrPortes(): int
    {
        return $this->nbrPortes;
    }
    // 
    public function setModele(string $modele): void
    {
        $this->modele = $modele;
    }
    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }
    public function setNbrPortes(string $nbrPortes): void
    {
        $this->nbrPortes = $nbrPortes;
    }
    // 
    public function allumerPhares() {
        echo "Les phares sont allumés | ";
    }
    public function changerVitesse($vitesse) {
        echo "La voiture roule à $vitesse Km/h | ";
    }
    public function klaxonner() {
        echo "La voiture klaxonne | ";
    }
};
