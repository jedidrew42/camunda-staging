<?php

  // GoToWebinar API
  $apiUrl = 'https://api.vimeo.com/';

  // Vimeo Access Token - if its used wont expire according to https://developer.vimeo.com/api/authentication#authentication-workflow !!!
  $access_token = '87976c40ac0992050cddcdc6f588f20b';

/*
  // Default locale
   $locale = "en-US";

   if (isset($_GET["locale"])) {
     if ($_GET["locale"] == 'de') $locale = 'de';
   }
*/
  // english vimeo webinars
  $call = $apiUrl . 'users/camunda/albums/4954033/videos';
  // german vimeo webinars
  $callGerman = $apiUrl . 'users/camunda/albums/4955594/videos';
  //echo $call;
  $curl = curl_init($call);
  $curlGerman = curl_init($callGerman);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  $headers = array(
    "Authorization: Bearer " . $access_token
  );

  curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

  curl_setopt($curlGerman, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curlGerman, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curlGerman, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curlGerman, CURLOPT_HTTPHEADER, $headers);


  $curl_response = curl_exec($curl);

  $curl_responseGerman = curl_exec($curlGerman);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. ' . var_export($info));
  }
  if ($curl_responseGerman === false) {
    $info = curl_getinfo($curlGerman);
    curl_close($curlGerman);
    die('error occured during curl exec. ' . var_export($info));
  }

  curl_close($curl);
  curl_close($curlGerman);


  $jsonGerman = json_decode($curl_responseGerman, true);
  $json = json_decode($curl_response, true);
  if ($curl_responseGerman != null) {
    $result = array_merge($json["data"], $jsonGerman["data"]);
  }

  echo json_encode($result);

?>
