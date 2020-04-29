<?php

  // GoToWebinar API
  $apiUrl = 'https://api.getgo.com/G2W/rest/organizers/9208757704522971397';

  // GoToWebinar Access Token - EXPIRES probably in October 2019 !!!
  $access_token = '6dfawnMNJis7mntXhRAAbOIZqQuW';

/*
  // Default locale
   $locale = "en-US";

   if (isset($_GET["locale"])) {
     if ($_GET["locale"] == 'de') $locale = 'de';
   }
*/

 $call = $apiUrl . '/webinars/';

  //echo $call;
  $curl = curl_init($call);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  $headers = array(
    "Content-Type: application/vnd.citrix.g2wapi-v1.1+json",
    "Accept: application/vnd.citrix.g2wapi-v1.1+json",
    "Authorization: OAuth oauth_token=" . $access_token
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
