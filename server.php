<?php 

$json_String = file_get_contents('disc-list.json');

$discsList = json_decode($json_String, true);

// Qui ci va la logica 
  
// Aggiungere un nuovo disco
if (isset($_POST["newTitle"])) {
  $newDisc = [
    'title' => $_POST['newTitle'],
    'author' => $_POST['newAuthor'],
    'year' => $_POST['newYear'],
    'poster' => $_POST['newPoster'],
    'genre' => $_POST['newGenre'],    
  ];
  $discsList[] = $newDisc;
  file_put_contents('disc-list.json', json_encode($discsList));
}

// Eliminare un disco
if (isset($_POST['indexToDelete'])) {
  array_splice($discsList, $_POST['indexToDelete'], 1);
  file_put_contents('disc-list.json', json_encode($discsList));
}



header('Content-Type: application/json');

// stampo il json in pagina
echo json_encode($discsList);


?>
