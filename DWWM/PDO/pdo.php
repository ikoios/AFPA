<?php
// try {
//     $host = "localhost";
//     $db = "garage";
//     $connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
//     $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connection réussie!";
//     $query = "INSERT INTO voiture (marque, modele, couleur) VALUES ('Peugeot', '106', 'Noir');";
//     $connection->exec($query);
// } catch (PDOException $e) {
//     echo "Erreur: "  . $e->getMessage();
// }
// // 
// $query = "INSERT INTO voiture (marque, modele, couleur) VALUES (:marque, :modele, :couleur)";
// $statement = $connection->prepare($query);
// $marque = "Nissan";
// $modele = "Skyline";
// $couleur = "bleu";
// $statement->bindParam(":marque", $marque);
// $statement->bindParam(":modele", $modele);
// $statement->bindParam(":couleur", $couleur);
// $statement->execute();
// echo "Insertion réussie!";
// // 
// $query = "SELECT * FROM voiture";
// $statement = $connection->prepare($query);
// $statement->execute();
// $garage = $statement->fetchAll(PDO::FETCH_ASSOC);
// foreach($garage as $voiture) {
//     echo "ID : " . $voiture["id"] . "<br>";
//     echo "marque : " . $voiture["marque"] . "<br>";
//     echo "modele : " . $voiture["modele"] . "<br>";
//     echo "couleur : " . $voiture["couleur"] . "<br>";
// }
?>