<?php

  function startMQL($firstname, $lastname, $phone, $email, $company, $jobdesc, $usage, $employees, $developers, $industry, $message, $ip, $landingPage, $landingPageCategory) {
    $city = "";
    $country = "";
      try {
         $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
       } catch (Exception $e) {
          // do nothing :-)
       }
    if (isset($details->country)) $country = strtolower($details->country);
    if (isset($details->city)) $city = $details->city;

  if ($country == '') $country='de';

  $date = date('Y-m-d');
  $businessKey = strtolower($company).'_'. strtolower($firstname) .'_' . strtolower($lastname) . '_' . $date;

  $jSonMessage = json_encode($message);


  $variablePayload = "{\"landingPageCategory\":\"" . $landingPageCategory . "\", \"landingPage\":\"" . $landingPage . "\",\"city\":\"" . $city . "\",\"countryCode\":\"" . $country ."\",\"firstname\":\"" . $firstname . "\",\"lastname\":\"" . $lastname . "\",\"phone\":\"" . $phone . "\",\"email\":\"" . $email ."\",\"company\":\"" . $company . "\",\"jobdesc\":\"" . $jobdesc . "\",\"industry\":\"" . $industry ."\",\"employees\":\"" . $employees ."\",\"developers\":\"" . $developers . "\",\"usage\":\"" . $usage ."\",\"assist\":\"false\",\"message\":" . $jSonMessage . "}";

  $jsonArray = array(
    'businessKey' => $businessKey, 
    'variables' => array(
      'lead' => array(
          'type' => 'Object',
          'valueInfo' => array (
            'objectTypeName' => 'com.camunda.bpm.internal.mql.model.LeadCaptureForm',
            'serializationDataFormat' => 'application/json'
            ),
          'value' => $variablePayload
        )
      ) 
    );

  $data = json_encode($jsonArray);

  //echo $data;

  //$camundaUrl = 'http://localhost:8080/engine-rest/process-definition/key/mql/start';
  $camundaUrl = 'http://ec2-52-210-135-62.eu-west-1.compute.amazonaws.com:8080/engine-rest/process-definition/key/mql/start';

  $curl = curl_init($camundaUrl);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

  curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

  $curl_response = curl_exec($curl);

  if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. ' . var_export($info));
  }

  curl_close($curl);

  $decoded = json_decode($curl_response);

  //echo $curl_response;


  }
 
?>