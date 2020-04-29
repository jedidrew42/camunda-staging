<?php

  // Whitelist of tables that can be queried (avoid injection)
  $whitelist = 'references, whitepapers';

  if (isset($_GET["list"])) {
  	$table = $_GET["list"];

    // Check against Whitelist
  	if (strpos($whitelist, $table) !== false) {
      $directusUrl = 'https://camunda--camunda-test.directus.io/api/1/tables/' . $table . '/rows?access_token=IQzZuJla5T1C84Ee';  
    } else {
      die ('invalid argument for list');
    }

  } else if ( (isset($_GET["view"])) and (isset($_GET["id"])) ) {
    $table = $_GET["view"];
    $row = $_GET["id"];

    // Check against Whitelist
    if (strpos($whitelist, $table) !== false) {
      $directusUrl = 'https://camunda--camunda-test.directus.io/api/1/tables/' . $table . '/rows/' . $row .'?access_token=IQzZuJla5T1C84Ee';  
    } else {
      die ('invalid argument for view');
    }

  } else {
  	die ('invalid request');
  }  

  $curl = curl_init($directusUrl);

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