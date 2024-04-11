<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assurance</title>
</head>

<body>
    <?php include "navBar.php"; ?>
    <fieldset style="text-align: center;">
        <h1>Assurance</h1>
        <hr>
        <form action="TreatForm.php" method="post">
            <label for="age">
                <h3>Âge:</h3>
            </label>
            <input type="number" name="age">

            <label for="permis">
                <h3>Permis:</h3>
            </label>
            <input type="number" name="permis">

            <label for="accident">
                <h3>Accident:</h3>
            </label>
            <input type="number" name="accident">

            <label for="fidelite">
                <h3>Fidélité:</h3>
            </label>
            <input type="number" name="fidelite">
            
            <br><br>
            <input type="submit" value="Valider">
        </form>
    </fieldset>
</body>

</html>