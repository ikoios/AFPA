<?php
if (isset($_POST["user"])) {
    $userName = $_POST["user"];
}
if (isset($_POST["password"])) {
    $password = $_POST["password"];
}
session_start();
$user = $_SESSION["session"];
if (isset($username) == isset($user["name"]) && isset($password) == isset($user["pass"])) {
    header("Location: createTask.php");
} else {
    echo "<div><h1>Le nom d'utilisateur ou le mot de passe n'est pas correcte</h1></div>";
}