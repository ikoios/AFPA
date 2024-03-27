<?php
// 
if (isset($_POST["name"])) {
    $name = $_POST["name"];
        echo $name . "<br>";
};
if (isset($_POST["mail"])) {
    $mail = $_POST["mail"];
    if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        echo $mail . " est une adresse valide <br>";
    } else {
        echo $mail . " n'est pas une adresse valide <br>";
    };
}
if (isset($_POST["pass"])) {
    $pass = $_POST["pass"];
    if(preg_match( "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/", $pass)) {
        echo "Ce mot de passe respecte bien les conditions <br>";
    } else {
        echo "Ce mot de passe ne respecte pas les conditions <br>";
    }
}
if(isset($_POST["confirm"])) {
    if($pass == $_POST["confirm"]) {
        $confirm = $_POST["confirm"];
        $pass = password_hash($pass, PASSWORD_DEFAULT);
        $confirm = password_hash($confirm, PASSWORD_DEFAULT);
        $premium = $_POST["premium"];
    } else {
        echo "Ce mot de passe ne correspond pas au premier <br>";
    }
}
if(isset($name) && isset($mail) && isset($pass) && isset($confirm) && empty($premium)) {
    session_start();
    $_SESSION["user"] = $name;
    $_SESSION["role"] = "utilisateur";
    $user = [
        "user" => $name,
        "mail" => $mail,
        "pass" => $pass,
        "task" => [
        ],
    ];
    $_SESSION["session"] = $user;
    header("Location: connection.php");
} else {
    $_SESSION["user"] = $name;
    $_SESSION["role"] = "utilisateur premium";
    $user = [
        "user" => $name,
        "mail" => $mail,
        "pass" => $pass,
        "task" => [
        ],
    ];
    $_SESSION["session"] = $user;
    header("Location: offer.php");
}