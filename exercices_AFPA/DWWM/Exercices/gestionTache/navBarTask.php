<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NavBar</title>
</head>

<body>
    <nav>
        <button><a href="createTask.php">Créer une tâche</a></button>
        <button><a href="task.php">Liste des tâche</a></button>
        <form action="" method="post">
            <input type="submit" value="Compte" name="account">
        </form>
        <!-- <form action="" method="post">
            <input type="submit" value="Se déconnecter" name="logOut">
        </form> -->
    </nav>
    <?php
    if (isset($_POST["account"])) {
        echo "<div>
            <form action='' method='post'>
            <input type='submit' value='Se déconnecter' name='logOut'>
            </form>
            </div>";
    }
    if (isset($_POST["logOut"])) {
        session_destroy();
        header("Location: inscription.php");
    }
    ?>
</body>

</html>