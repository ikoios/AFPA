<?php
if (isset($_POST["age"])) {
    $age = $_POST["age"];
    echo "La variable " . $age . " est définie.";
};
// 
if (isset($_POST["permis"])) {
    $permis = $_POST["permis"];
    echo "La variable " . $permis . " est définie.";
};
// 
if (isset($_POST["accident"])) {
    $accident = $_POST["accident"];
    echo "La variable " . $accident . " est définie.";
};
// 
if (isset($_POST["fidelite"])) {
    $fidelite = $_POST["fidelite"];
    echo "La variable " . $fidelite . " est définie.";
};
// 
$point += $accident;
if($age < 25) {
    $point ++;
};
if($permis < 2) {
    $point ++;
};
if($fidelite > 5) {
    $point --;
};
if($point > 4) {
    $point == 4;
};
if($point < 0) {
    $point == 0;
};
// 
$tarif = ["Bleu", "Vert", "Orange", "Rouge", "Refusé"];
//
session_start();
$_SESSION["user"] = "Sulli";
$_SESSION["role"] = "admin";
$_SESSION["Assurance"] = $tarif[$point];
//
header("Location: tarif.php");