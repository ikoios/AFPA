<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Création des tâches</title>
</head>

<body>
    <?php include "navBarTask.php"; ?>
    <fieldset>Créer une tâche:
        <form action="" method="post">
            <label for="title">Titre: </label>
            <input type="text" name="title"> <br>

            <label for="description">Description: </label>
            <textarea type="text" name="description"></textarea> <br>

            <label for="dateStart">Date de début: </label>
            <input type="date" name="dateStart"> <br>

            <label for="dateEnd">Date de fin: </label>
            <input type="date" name="dateEnd"> <br>

            <input type="submit" value="Créer">
        </form>
    </fieldset>
    <!--  -->
    <?php
    if (isset($_POST["title"])) {
        $title = $_POST["title"];
    }
    if (isset($_POST["description"])) {
        $description = $_POST["description"];
    }
    if (isset($_POST["dateStart"])) {
        $dateStart = $_POST["dateStart"];
    }
    if (isset($_POST["dateEnd"])) {
        $dateEnd = $_POST["dateEnd"];
    }
    if (isset($_POST["title"]) && isset($_POST["description"]) && isset($_POST["dateStart"]) && isset($_POST["dateEnd"])) {
        session_start();
        $user = $_SESSION["session"];
        // 
        $user["task"][] = [
            "titre" => $title,
            "description" => $description,
            "date de début" => $dateStart,
            "date de fin" => $dateEnd
        ];
        // 
        $_SESSION["session"] = $user;
    }
    ?>
</body>

</html>