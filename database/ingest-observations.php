<?php
/**
* Script to fetch and store XML-files from www.imo.net visual report form
* Author: Geert Barentsen
* Version: 2009-10-31
*/


/**
* Panic function: call when error occurs
**/
function panic($msg) {
	echo "<p><strong>ERROR: a technical problem has occured.</strong></p>";
	echo "<p>$msg</p>";
	mail("geert@barentsen.be", "Error in imofetch", $msg, "From: IMO website <geert.barentsen@urania.be>\r\nErrors-To: <gbar@urania.be>\r\n");	
}


$KEY = "INSERT-KEY";
$TARGET = "INSERT-XML-SOURCE-ENDPOINT";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $TARGET."/umdbFetch2.php?key=".$KEY );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$curl_result = curl_exec($ch);
curl_close($ch);

$imo = unserialize($curl_result);

// PostgreSQL on umdb
require_once('Database.class.php');
$db = new Database();

// Run over the fetched XML observations
foreach ($imo as $obs) {
	//var_dump($obs);
	$source = utf8_encode($obs['observation']);
	
	$xml = new DomDocument();
	$xml->loadXml($source);
	
	// Transform XML to SQL insert queries
	$xsl = new DomDocument();
	$xsl->load('sql.xsl');	
	$proc = new XsltProcessor();
	$proc->registerPHPFunctions();
	$proc->importStyleSheet($xsl); 
	$queries = $proc->transformToXML($xml);
		
	// Execute query
	$ok = true;
	try {
		$db->query($queries);
	} catch (DatabaseException $e) {
		$ok = false;
		panic($e->getMessage()."\n\n".$queries);
	}
	
	// Let IMO database know the result
	$ch = curl_init();
	if ( $ok ) {
		echo "OK ".$obs['id'];
		curl_setopt($ch, CURLOPT_URL, $TARGET."/umdbOK.php?key=".$KEY."&id=".$obs['id'] );
	} else {
		echo "ERROR ".$obs['id'];
		curl_setopt($ch, CURLOPT_URL, $TARGET."/umdbError.php?key=".$KEY."&id=".$obs['id'] );
	}
	$curl_result = curl_exec($ch);
	curl_close($ch);
		
}


?>
