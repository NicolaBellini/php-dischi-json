<?php 

$json_String = file_get_contents('disc-list.json');

$discsList = json_decode($json_String);

// Qui ci va la logica 


header('Content-Type: application/json');

// stampo il json in pagina
echo json_encode($discsList);


?>
