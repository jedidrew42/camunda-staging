<?php
  include ('startMQL.php');

// error handler function
function myErrorHandler($errno, $errstr, $errfile, $errline) {
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting
        return false;
    }
 
    $text = 'In file '.$errfile.' on line '.$errline.': '.$errno.' - '.$errstr;
 
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


    mail('jakob.freund@camunda.com', 'Error occured', $text);

    exit;
}
set_error_handler("myErrorHandler");

try {

  // Get LandingPage
  $landingPage = $_POST["Website_URL"];

  // Get Email
  $email = $_POST["Email"];

  // Get Person
  $firstname = $_POST["First_Name"];
  $lastname = $_POST["Last_Name"];
  $company = $_POST["Company_Name"];
 
  // Get Person Additional Data
  $phone = $_POST["Phone_Number"]; 
  $jobdesc = $_POST["My_Role"];
  $usage = $_POST["Are_you_currently_using_Camunda?"];

  // Get Fit Score Data
  $employees = $_POST["Company_-_Number_of_Employees_"];
  $developers = $_POST["Company:_Number_of_Developers"];
  $industry = $_POST["Company:_Industry"];

  // Get Message
  $message = $_POST["How_can_we_support_you?_"] . "---- Coming from Hubspot";

  // Retrieve Location based on IP
  $ip = $_POST["IP"];

  startMQL($firstname, $lastname, $phone, $email, $company, $jobdesc, $usage, $employees, $developers, $industry, $message, $ip, $landingPage, "contact");

} catch (Exception $e) {

// Inform Sales Team
    $subject="Start MQL Exception\n\n";
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