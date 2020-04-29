<?php

  // Meetup API
  $apiUrl = 'https://api.meetup.com';

  // Meetup API Key von Jakob Freund
  $key = '307c771b7b356e53273e584d41504223';
  
  if (isset($_GET["events"])) {
    $call = $apiUrl . '/find/upcoming_events?key=' . $key . '&text=camunda&radius=global';
  } else if (isset($_GET["groups"])) {
    $call = $apiUrl . '/find/groups?key=' . $key . '&topic_id=1506753&radius=global';
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