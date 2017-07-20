<?php

$acct = $_GET['accountid'];
$APIKEY = "B56030D1092EBB1AF70E6D389FD6CBE7";

$steamurl = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=$APIKEY&steamid=$acct&format=json";
$json_object= file_get_contents($steamurl);
header('Content-Type: application/json');
echo $json_object;

?>