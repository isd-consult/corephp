<?php
$lastNo=$this->next_turn_num(6);

header('Content-type: application/xml');
echo'<?xml version="1.0" encoding="utf-8"?>';
echo '<xml><row  opencode="'.randKeys().'" opentime="'.$lastNo['actionTime'].'"/></xml>';


/* ?????????? */
function randKeys($len=5){
	$rand='';
	for($x=0;$x<$len;$x++){
		srand((double)microtime()*1000000);
		$rand.=($rand!=''?',':'').mt_rand(0,9);
	}
	return $rand;
}
?>