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
    'poster' =>!empty($_POST['newPoster'])?$_POST['newPoster']: 'https://images.unsplash.com/photo-1526327760257-75f515c74478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljJTIwZGlzY3xlbnwwfHwwfHx8MA%3D%3D',
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

// aggiungo la chiave valore liked=true 
if(isset($_POST['indexToLike'])){
  $index = $_POST['indexToLike'];
  $discsList[$index]['liked'] = 'true';
  file_put_contents('disc-list.json', json_encode($discsList));
}



header('Content-Type: application/json');

// stampo il json in pagina
echo json_encode($discsList);


?>
