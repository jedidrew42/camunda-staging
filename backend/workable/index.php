<?php

  // Workable API
  $apiUrl = 'https://camunda.workable.com/spi/v3';

  // Workable Authorization Key
  $access_token = 'Bearer c0db76d01d2a36d83b96cb7ba2f8bc4800e71ba1ca65b804d68574620ca87d1a';

  $call = $apiUrl . '/jobs?state=published';

  //echo $call;
  $curl = curl_init($call);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  $headers = array(
    "Authorization: $access_token"
  );
  
  curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

  $curl_response = curl_exec($curl);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. ' . var_export($info));
  }

  curl_close($curl);

  echo $curl_response;
?>