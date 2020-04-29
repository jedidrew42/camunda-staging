<?php

	error_reporting(E_ALL ^ E_WARNING);

	// Initialize
	$data = json_decode(file_get_contents('php://input'), true);

	// Call DMN Simulator Server
	//$url = "http://localhost:8080/dmn-evaluator/evaluateDecision";
	//$url = "http://ec2-52-210-135-62.eu-west-1.compute.amazonaws.com:8080/dmn-evaluator/evaluateDecision";
	$url = "http://ec2-52-29-71-10.eu-central-1.compute.amazonaws.com:8080/evaluateDecision";

	$content = json_encode($data);

	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_HTTPHEADER,
	        array("Content-type: application/json"));
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $content);

	$json_response = curl_exec($curl);

	$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

	if ( $status != 200 ) {
	    //die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
	}

	curl_close($curl);

	// Return Server Response to Client
	echo $json_response;

?>
