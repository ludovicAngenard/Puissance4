<?php

    session_start();

    $mysqli = new mysqli("localhost", "root", "root", "puissance_4");

    //check connection
    if ($mysqli -> connection_aborted) {
        echo "failes to connect to MySQL : " . $mysqli -> connection_aborted;
        exit();
    }
 

    // S'il y a une session alors on ne retourne plus sur cette page

    if (isset($_SESSION['id'])){

        header('Location: index.php'); 

        exit;

    }

 

    // Si la variable "$_Post" contient des informations alors on les traitres

    if(!empty($_POST)){

        extract($_POST);

        $valid = true;

 

        // On se place sur le bon formulaire grâce au "name" de la balise "input"

        if (isset($_POST['inscription'])){

            $playerName  = htmlentities(trim($playerName)); // On récupère le playerName

            $mdp = trim($mdp); // On récupère le mot de passe 
 

            //  Vérification du nom

            if(empty($playerName)){

                $valid = false;

                $playerName = ("Le nom d' utilisateur ne peut pas être vide");

            }       
 

            // Vérification du mot de passe

            if(empty($mdp)) {

                $valid = false;

                $er_mdp = "Le mot de passe ne peut pas être vide";

 

            }
 

            // Si toutes les conditions sont remplies alors on fait le traitement

            if($valid){

 

                $mdp = crypt($mdp, "$6$rounds=5000$macleapersonnaliseretagardersecret$");

                $date_creation_compte = date('Y-m-d H:i:s');

 

                // On insert nos données dans la table utilisateur

                $DB->insert("INSERT INTO utilisateur (playerName, mdp) VALUES 

                    (?, ?)", 

                    array($playerName, $mdp));

 

                header('Location: index.php');

                exit;

            }

        }

    }

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Inscription</title>
    </head>
    <body>      
        <div>Inscription</div>
        <form method="post">
            <?php
                // S'il y a une erreur sur le nom alors on affiche
                if (isset($er_playerName)){
                ?>
                    <div><?= $er_playerName ?></div>
                <?php   
                }
            ?>
            <input type="text" placeholder="Votre playerName" name="playerName" value="<?php if(isset($playerName)){ echo $playerName; }?>" required>   
            
            <?php
                if (isset($er_mdp)){
                ?>
                    <div><?= $er_mdp ?></div>
                <?php   
                }
            ?>
            <input type="password" placeholder="Mot de passe" name="mdp" value="<?php if(isset($mdp)){ echo $mdp; }?>" required>
            <button type="submit" name="inscription">Envoyer</button>
        </form>
    </body>
</html>