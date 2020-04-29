<?php

  // Eventbrite API
  $apiUrl = 'https://www.eventbriteapi.com/v3';

  // Eventbrite Access Token
  $events_access_token = 'NAITNIW5D6M3XOQ5ZK7C';
  $trainings_access_token = '2GWN36P3LABXMAMQO2PK';

  if (isset($_GET["trainings"])) {
    $call = $apiUrl . '/events/search/?token=' . $trainings_access_token . '&organizer.id=15623924219&sort_by=date&expand=ticket_availability';
  } else if (isset($_GET["training-dates"])) {
    $training = urlencode($_GET["training-dates"]);
    $call = $apiUrl . '/events/search/?token=' . $trainings_access_token . '&organizer.id=15623924219&expand=ticket_availability&q=' . $training;
  } else if (isset($_GET["training-venues"])) {
    $call = $apiUrl . '/users/me/venues/?token=' . $trainings_access_token;
  } else {
    die ('invalid request');
  }

  //echo $call;
  $curl = curl_init($call);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('accept: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

  $curl_response = curl_exec($curl);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. ' . var_export($info));
  }

  curl_close($curl);

  echo ($curl_response);

?>
