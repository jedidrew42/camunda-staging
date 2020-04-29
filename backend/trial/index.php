<?php
  include ('../mql/startMQL.php');

  include ('../mc/subscribe_lib.php');

try {

  if ( isset($_POST["website"]) && isset($_POST["email"]) && isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["company"])) {
    // Get LandingPage
    $website = $_POST["website"];
    // Get Email
    $email = $_POST["email"];
    // Get Person
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $company = $_POST["company"];

  } else {
     die ('Missing Fields');
  }

  //
  $source = "unknown";
  if (isset($_GET["source"])) {
    $source = $_GET["source"];
  }


  // Set Additional Data to Null
  $phone = null;
  $jobdesc = null;
  $usage = null;

  // Set Fit Score Data to unknown
  $employees = "unknown";
  $developers = "unknown";
  $industry = "unknown";

  // Set Message to null
  $message = null;

  // Retrieve Location based on IP
  $ip = $_SERVER['REMOTE_ADDR'];

  // Start Free Trial Process
  $date = date('Y-m-d');
  $businessKey = strtolower($company).'_'. strtolower($firstname) .'_' . strtolower($lastname) . '_' . $date;

  $jSonMessage = json_encode($message);

 $jsonArray = array(
    'businessKey' => $businessKey,
    'variables' => array(
      'custCompany' => array(
        'value' => $company,
        'type' => 'String',
        ),
      'custFirstname' => array(
        'value' => $firstname,
        'type' => 'String',
        ),
      'custLastname' => array(
        'value' => $lastname,
        'type' => 'String',
        ),
      'custEmail' => array(
        'value' => $email,
        'type' => 'String',
        ),
      'days' => array(
        'value' => 30,
        'type' => 'Integer',
        )
      )
    );

  $data = json_encode($jsonArray);

  //echo $data;

  // Start Evaluation Process

  //$camundaUrl = 'http://localhost:8080/engine-rest/process-definition/key/mql/start';
  $camundaUrl = 'https://sales.int.camunda.com/evaluation-manager/api/evaluations/start';

  $curl = curl_init($camundaUrl);

  curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Cookie: evaluation_manager_sessionid=123'));

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

  // echo $curl_response;

  curl_close($curl);

  $decoded = json_decode($curl_response);

  // Start MQL Process
  startMQL($firstname, $lastname, $phone, $email, $company, $jobdesc, $usage, $employees, $developers, $industry, $message, $ip, $website, "trial");


  // Default locale
  $locale = "en";
  $mcAutomationId = "048424643b";
  $mcAutomationEmailId = "9925b0d054";

  if (isset($_POST["locale"])) {
    if ($_POST["locale"] == 'de') {
      $locale = 'de';
      $mcAutomationId = "d63f26645c";
      $mcAutomationEmailId = "c5c93e851a";
    }
  }

  // Start MailChimp Drip Campaign
  // STOPPED THIS DUE TO GDPR COMPLIANCE
  //startWorkflow ($mcAutomationId, $mcAutomationEmailId, $email, $locale, $source);


  echo "{Success}";

} catch (Exception $e) {

// Inform Jakob
    $subject="Free Trial Exception\n\n";
    $text .= "Error Message: " .  $e->getMessage();

    $text .= "\n\nIP-Lookup: http://ipinfo.io/" . $ip;
    $text .= "\n\nComplete Form Data:\n\n";
     foreach ($_POST as $name => $wert) {
          if (is_array($wert)) {
          foreach ($wert as $einzelwert) {
            $text .= $name . ": " . $einzelwert."\n";
              }
          } else {
              $text .= $name . ": " . $wert . "\n";
          }
      }

    $header = "From: noreply@camunda.com\n";
    $header .= 'MIME-Version: 1.0' . "\r\n";
    $header .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

    mail("jakob.freund@camunda.com", $subject, $text, $header);

    echo "{Error}";


}


?>
