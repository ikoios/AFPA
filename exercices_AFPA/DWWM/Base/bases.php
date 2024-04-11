<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bases PHP</title>
</head>

<body>
    <h1>Hello HTML</h1>
    <?php
    echo "<h1>Hello PHP</h1>";
    // echo phpinfo();
    include("include.php");
    ?>
    <!--  -->
    <hr>
    <!--  -->
    <h2>Les variables:</h2>
    <?php
    $a = null;
    $myVariable = "Salut";
    $str = "$myVariable tout le monde";
    echo gettype($a);
    // 
    define("MY_CONST", "déclaration d'une constante");
    echo "<br>" . MY_CONST;
    // 
    $nbr = 1;
    // (postIncrémentation) on affiche $nbr et on ajoute 1
    echo "<br>" . $nbr++;
    // (préIncrémentation) on ajoute 1 et on affiche $nbr
    echo "<br>" . ++$nbr;
    echo "<br>" . $nbr;
    // 
    echo "<hr><h2>Les tableaux:</h2>";
    // 
    $tab = ["Pomme", "Fraise", "Orange"];
    echo $tab[1] . "<br><br>";
    // 
    $personne = [
        "nom" => "Doe",
        "prenom" => "John",
        "age" => 99,
        5 => "cinq"
    ];
    var_dump($personne);
    echo "<br>" . $personne['nom'] . "<br>";
    // 
    $animals = [
        "chat" => [
            "nom" => "Felix",
            "age" => 50,
            "couleur" => "chartreuse"
        ],
        "chien" => [
            "nom" => "Paf",
            "age" => 9,
            "couleur" => "blanc"
        ]
    ];
    echo "<br>" . $animals["chat"]["nom"] . "<br><br>";
    // 
    $heure = date("H:i:s");
    if ($heure > 12) {
        echo "C'est l'après-midi <br>";
    } else {
        echo "C'est le matin <br>";
    };
    $resultat;
    $heure > 12 ? $resultat = "C'est l'après-midi" : $resultat = "C'est le matin";
    echo "<br>" . $heure;
    // 
    foreach ($tab as $element) {
        echo "<br>" . $element;
    };
    echo "<br>";
    foreach ($personne as $key => $value) {
        echo "<br>" . $key . " : " . $value;
    };
    echo "<br>";
    foreach($animals as $key => $value) {
        echo "<br>" . $key . "<br>";
        foreach ($value as $cle => $element) {
            echo "<br>" . $cle . " : " . $element;
        };
        echo "<br>";
    };
    // 
    function division(int $nbr1, int $nbr2 = 2) {
        if($nbr2 === 0) {
            return "erreur";
        }
        return $nbr1 / $nbr2;
    }
    echo "<br>" . division(10);
    // 
    for($i = 0; $i < count($tab); $i++) {
        echo "<br>" . $tab[$i] . "<br>";
    }
    //
    echo "<hr><br><h2>Les sessions</h2>";
    // 
    // session_start();
    // $_SESSION["fruit"] = $tab;
    ?>
</body>

</html>