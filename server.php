<?php 

$json_String = file_get_contents('disc-list.json');

$discsList = json_decode($json_String, true);

// Qui ci va la logica 

// creo il nuovo oggetto e lo aggiungo al json
if(isset($_POST["newTitle"])){
  $newDisc=[
    'title'=>$_POST['newTitle'],
    'author'=>$_POST['newAuthor'],
    'year'=>$_POST['newYear'],
    'poster'=>$_POST['newPoster'],
    'genre'=>$_POST['newGenre'],    
  ];
  $discsList[]=$newDisc;
  file_put_contents('disc-list.json', json_encode($discsList));
};



header('Content-Type: application/json');

// stampo il json in pagina
echo json_encode($discsList);


?>
