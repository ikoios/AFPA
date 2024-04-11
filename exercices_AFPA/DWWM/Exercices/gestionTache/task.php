<?php
include "navBarTask.php";
session_start();
$user = $_SESSION["session"];
// 
echo "<div
style='width: 15rem;'
>";
foreach ($user["task"] as $key => $value) {
    echo "<form style='display: flex; justify-content: end;' method='post'>
       <label for='delete'></label>
       <input type='hidden' name=$key></input>
       <input type='submit' value='Supprimer' name='delete'>
    </form>";
    if (isset($_POST["delete"]) && isset($_POST[$key])) {
        $delete = $_POST["delete"];
        $user = $_SESSION["session"];
        // 
        unset($user["task"][$key]);
        // 
        $_SESSION["session"] = $user;
        header("Location: task.php");
    }
    foreach ($value as $task => $allTask) {
        echo $task . ": " . $allTask . "<br>";
    };
    echo "<hr>";
};
echo "</div>";
