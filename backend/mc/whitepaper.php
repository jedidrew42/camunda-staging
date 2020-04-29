<?php
  include ('subscribe_lib.php');

  if (isset($_GET["email"])) {
    $email = $_GET["email"];
  } else {
    die ('invalid request');
  }

  if (isset($_GET["source"])) {
    $source = $_GET["source"];
  } else {
    die ('invalid request');
  }

 if (isset($_GET["mcAutomationId"])) {
    $mcAutomationId = $_GET["mcAutomationId"];
  } else {
    die ('invalid request');
  }

 if (isset($_GET["mcEmailId"])) {
    $mcAutomationEmailId = $_GET["mcEmailId"];
  } else {
    die ('invalid request');
  }


  // Default locale
  $locale = "en";

  if (isset($_GET["locale"])) {
    if ($_GET["locale"] == 'de') $locale = 'de';
  }

  startWorkflow ($mcAutomationId, $mcAutomationEmailId, $email, $locale, $source);

?>