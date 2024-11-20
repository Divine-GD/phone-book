<?php

function db_conn(){
$db_conn = mysqli_connect('localhost','root','','contact_table');

if($db_conn){
   return $db_conn;
}
else{
   return "db_error";
}
}
$db_conn = db_conn();

?>