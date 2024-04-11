<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <fieldset>Inscription:
        <form action="treatGestion.php" method="post">
            <label for="name">Nom d'utilisateur: </label>
            <input type="text" name="name" required><br>

            <label for="mail">E-mail: </label>
            <input type="text" name="mail" required><br>

            <label for="pass">Mot de passe: </label>
            <input type="password" name="pass" required><br>

            <label for="confirm">Confirmation de mot de passe: </label>
            <input type="password" name="confirm" required> <br>

            <label for="premium">Membre premium: </label>
            <input type="checkbox" name="premium"> <br>

            <input type="submit" value="Enregistré">
        </form>
    </fieldset>
</body>
</html>