<?php
session_start();
// 
$poeple = $_SESSION["familles"];
// var_dump($poeple);
//
echo "<table border>";
foreach($poeple as $key => $value) {
    echo "<tr><th>" . $key . "<th><tr>";
    foreach($value as $cle => $element) {
        echo "<tr><td>" . $cle . "<td>" . $element;
    }
};
echo "<tr><table>";
// 