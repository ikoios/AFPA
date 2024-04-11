<?php
session_start();
$_SESSION["user"] = "Sulli";
$_SESSION["role"] = "admin";
// 
$poeple = [
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith"
    ],
    "Lannister" => [
        "Father" => "Tywin Lannister",
        "Son" => "Jaime Lannister",
        "Son" => "Tyrion Lannister",
        "Daughter" => "Cersei Lannister"
    ],
    "Roy" => [
        "Father" => "Logan Roy",
        "Mother" => "Marcia Roy",
        "Son" => "Kendal Roy",
        "Son" => "Connor Roy",
        "Daughter" => "Siobhan Roy"
    ],
    "Simpson" => [
        "Father" => "Homer Simpson",
        "Mother" => "Marge Simpson",
        "Son" => "Bart Simpson",
        "Daughter" => "Lisa Simpson",
        "Daughter" => "Maggie Simpson"
    ],
    "Parr" => [
        "Father" => "Robert Parr",
        "Mother" => "Helen Parr",
        "Son" => "Flèche Parr",
        "Son" => "Jack Parr",
        "Daughter" => "Violette Parr"
    ],
    "Delajungle" => [
        "Father" => "Nigel Delajungle",
        "Mother" => "Marianne Delajungle",
        "Son" => "Donnie Delajungle",
        "Daughter" => "Debbie Delajungle",
        "Daughter" => "Eliza Delajungle"
    ]
];
// 
$_SESSION["familles"] = $poeple;
var_dump($_SESSION);
// 
header("Location: listPersonne.php");