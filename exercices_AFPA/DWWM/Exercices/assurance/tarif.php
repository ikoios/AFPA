<?php
include "navBar.php";
//
session_start();
//
$tarif = $_SESSION["Assurance"];
//
echo "<div style='text-align: center'><h1>Votre tarif est:<h1><br>";
echo "<h2>" . $tarif . "<h2><div>";