<?php

	$email = $_POST["email"];

	$firstName = $_POST["firstname"];
	$lastName = $_POST["lastname"];
	$phone = $_POST["phone"];
	$company = $_POST["company"];
	$jobdesc = $_POST["jobdesc"];

	$street = $_POST["street"];
	$city = $_POST["city"];
	$zip = $_POST["zip"];
	$country = $_POST["country"];

	$employees = $_POST["employees"];
	$javadevs = $_POST["javadevs"];

  $regionsArray = $_POST['regions'];
  $regions = implode(', ', $regionsArray);

  $website = $_POST["website"];


	$listingDesc = $_POST["listingDesc"];

	$message = $_POST["message"];

  $base64 = "";

  if(isset($_FILES['logo']))
  {

      $errors=array();
      $allowed_ext= array('jpg','jpeg','png','gif');
      $file_name =$_FILES['logo']['name'];

      $file_size=$_FILES['logo']['size'];
      $file_tmp= $_FILES['logo']['tmp_name'];
      //echo $file_tmp;echo "<br>";

      $type = pathinfo($file_tmp, PATHINFO_EXTENSION);
      $data = file_get_contents($file_tmp);
      $base64 = base64_encode($data);

      if($file_size > 2097152)
      {
          $errors[]= 'File size must be under 2mb';

      }

  }

/*
    // CONFIRM
	$referrer = $_SERVER['HTTP_REFERER'];
	$url = parse_url($referrer);
	$host = $url["host"];
	$path = $url["path"];

	header("Location: http://" . $host . $path . "?sent=true");

	// sent Confirmation at once so the user wouldn't need to wait too long
	flush();
*/
    // Backup Email
    $subject="New SI Partner Application\n\n";
    $text = "\n\nComplete Form Data:\n\n";
	   foreach ($_POST as $name => $wert) {
	        if (is_array($wert)) {
			    foreach ($wert as $einzelwert) {
				    $text .= $name . ": " . $einzelwert."\n";
	            }
	        } else {
	            $text .= $name . ": " . $wert . "\n";
	        }
	    }

    $header = "From: jakob.freund@camunda.com\n";
    $header .= 'MIME-Version: 1.0' . "\r\n";
    $header .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

    mail("jakob.freund@camunda.com", $subject, $text, $header);

 $data = array();

  $date = date('Y-m-d');
  $businessKey = strtolower($company).'_'. strtolower($firstName) .'_' . strtolower($lastName) . '_' . $date;

  $jsonArray = array(
    'businessKey' => $businessKey,
    'variables' => array(
      'partnerType' => array(
        'value' => 'si',
        'type' => 'String',
        ),
      'company' => array(
        'value' => $company,
        'type' => 'String',
        ),
      'firstname' => array(
        'value' => $firstName,
        'type' => 'String',
        ),
      'lastname' => array(
        'value' => $lastName,
        'type' => 'String',
        ),
      'email' => array(
        'value' => $email,
        'type' => 'String',
        ),
      'phone' => array(
        'value' => $phone,
        'type' => 'String',
        ),
      'jobdesc' => array(
        'value' => $jobdesc,
        'type' => 'String',
        ),
      'street' => array(
        'value' => $street,
        'type' => 'String',
        ),
      'city' => array(
        'value' => $city,
        'type' => 'String',
        ),
      'zip' => array(
        'value' => $zip,
        'type' => 'String',
        ),
      'country' => array(
        'value' => $country,
        'type' => 'String',
        ),
      'employees' => array(
        'value' => $employees,
        'type' => 'String',
        ),
      'javadevs' => array(
        'value' => $javadevs,
        'type' => 'String',
        ),
      'regions' => array(
        'value' => $regions,
        'type' => 'String',
        ),
      'website' => array(
        'value' => $website,
        'type' => 'String',
        ),
      'listingdesc' => array(
        'value' => $listingDesc,
        'type' => 'String',
        ),
      'message' => array(
        'value' => $message,
        'type' => 'String',
        ),
      'logo' => array(
        'value' => $base64,
        'type' => 'File',
        'valueInfo' => array(
          'filename' => 'logo.png',
          'mimetype' => 'image/png'
          )
        )
      )
    );

  $data = json_encode($jsonArray);

  //$camundaUrl = 'http://localhost:8080/engine-rest/process-definition/key/partner-application/start';
  //$camundaUrl = 'http://ec2-52-210-135-62.eu-west-1.compute.amazonaws.com:8080/engine-rest/process-definition/key/partner-application/start';
	$camundaUrl = 'https://sales.int.camunda.com/partner-manager/api/partners/start';

  $curl = curl_init($camundaUrl);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Cookie: partner_manager_sessionid=PAR-75e6dedbf3828c61a848fe339797be92'));

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

  echo $curl_response;


?>
