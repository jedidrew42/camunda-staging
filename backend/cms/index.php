<?php

  // Contentful API
  $apiUrl = 'https://cdn.contentful.com/spaces/vpidbgnakfvf';

  // ContentfFul Access Token 
  $access_token = '63bd56e62381aff6acbc9f46d9095b6f9424bf0e0f5267cd7b523b18cf6c822a';

  // Default locale
   $locale = "en-US";
 
   if (isset($_GET["locale"])) {
     if ($_GET["locale"] == 'de') $locale = 'de';
   }

  // Whitelist of tables that can be queried (avoid injection)
  $whitelist = 'reference, whitepaper, training, event, partner';

  if (isset($_GET["list"])) {
    $contentType = $_GET["list"];

    // Check against Whitelist
    if (strpos($whitelist, $contentType) !== false) {
      $call = $apiUrl . '/entries' . '?access_token=' . $access_token . '&content_type=' . $contentType . "&locale=" . $locale . "&order=fields.priority";
    } else {
      die ('invalid argument for list');
    }

  } else if ( (isset($_GET["entry"])) and (isset($_GET["id"])) ) {
    $contentType = $_GET["entry"];
    $id = $_GET["id"];

    // Check against Whitelist
    if (strpos($whitelist, $contentType) !== false) {
      $call = $apiUrl . '/entries/' . $id . '?access_token=' . $access_token. "&locale=" . $locale;    
    } else {
      die ('invalid argument for view');
    }
  } else if ( (isset($_GET["entry"])) and (isset($_GET["technical-name"])) ) {
    $contentType = $_GET["entry"];
    $technicalName = $_GET["technical-name"];

    // Check against Whitelist
    if (strpos($whitelist, $contentType) !== false) {
      $call = $apiUrl . '/entries/?access_token=' . $access_token . '&content_type=' . $contentType . '&fields.technicalName=' . $technicalName. "&locale=" . $locale; 
    } else {
      die ('invalid argument for view');
    }

  } else {
    die ('invalid request');
  }  


  //echo $call;
  $curl = curl_init($call);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

  $curl_response = curl_exec($curl);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. ' . var_export($info));
  }

  curl_close($curl);

  echo $curl_response;

?>