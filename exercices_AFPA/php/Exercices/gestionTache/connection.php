<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connection</title>
</head>
<body>
    <fieldset>
        <form action="treatConnection.php" method="post">
            <label for="user">Nom d'utilisateur: </label>
            <input type="text" name="user" required><br>

            <label for="password">Mot de passe: </label>
            <input type="password" name="password" required>

            <input type="submit" value="Connection">
        </form>
    </fieldset>
</body>
</html>