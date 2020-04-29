<?php
  include ('startMQL.php');

try {

  // Get LandingPage / website
  $website = $_POST["website"];

  // Get Email
  $email = $_POST["email"];

  // Get Person
  $firstname = $_POST["firstname"];
  $lastname = $_POST["lastname"];
  $company = $_POST["company"];

  // Get Person Additional Data
  $phone = $_POST["phone"];
  $my_role = $_POST["my_role"];
  $are_you_currently_using_camunda_ = $_POST["are_you_currently_using_camunda_"];

  // Get Fit Score Data
  $numemployees = $_POST["numemployees"];
  $company_number_of_developers = $_POST["company_number_of_developers"];
  $industry = $_POST["industry"];

  // Get Message
  $how_can_we_support_you_ = $_POST["how_can_we_support_you_"];

  // Retrieve Location based on IP
  $ip = $_SERVER['REMOTE_ADDR'];

  startMQL($firstname, $lastname, $phone, $email, $company, $my_role, $are_you_currently_using_camunda_, $numemployees, $company_number_of_developers, $industry, $how_can_we_support_you_, $ip, $website, "contact");

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
