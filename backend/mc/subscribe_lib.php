<?php
  include ('mailchimp.php');

  function subscribe($email, $locale, $source) {
    $MailChimp = new \Drewm\MailChimp('d91389f4dbbd35370238ebea4095fdec-us7');

    $result = $MailChimp->call('lists/subscribe', array(
                          'id'                => '38cd5998fe',
                          'email'             => array('email'=>$email),
                          'merge_vars'        => array('MC_LANGUAGE'=>$locale, 'SOURCEFORM'=>$source),
                          'double_optin'      => false,
                          'update_existing'   => true,
                          'replace_interests' => false,
                          'send_welcome'      => false,
    ));
  }

  function startWorkflow ($mcAutomationId, $mcAutomationEmailId, $email, $locale, $source) {

    // Subcribe for Newsletter (if not yet subscribed)
    subscribe ($email, $locale, $source);

    // Trigger Workflow with Email
    // Mailchimp API
    $apiUrl = 'https://us7.api.mailchimp.com/3.0/automations/';
    //$automationId = '2c79a73f0b';
    //$automationEmailId = '4136f741fa';

    $call = $apiUrl . $mcAutomationId . '/emails/' . $mcAutomationEmailId . '/queue';

    //echo $call;
    $curl = curl_init($call);

    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    $jsonArray = array('email_address' => $email);
    $data = json_encode($jsonArray);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $headers = array(
      "Content-Type: application/vnd.citrix.g2wapi-v1.1+json",
      "Accept: application/vnd.citrix.g2wapi-v1.1+json",
      "Authorization: Basic cHVwczpkOTEzODlmNGRiYmQzNTM3MDIzOGViZWE0MDk1ZmRlYy11czc="
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
  }
?>
