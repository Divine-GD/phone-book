<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');
    $db_conn = mysqli_connect('localhost','root','','contact_table');
  
    



    $data = json_decode(file_get_contents("php://input"), true);
    if($data)
    { 
    $phone = mysqli_real_escape_string($db_conn, $data['phone']);
    $first_name = mysqli_real_escape_string($db_conn, $data['first_name']);
    $last_name = mysqli_real_escape_string($db_conn, $data['last_name']);
    $email = mysqli_real_escape_string($db_conn, $data['email']);
    $address = mysqli_real_escape_string($db_conn, $data['address']);



if (!empty($email) && !empty($phone)) {
     
    $insert = "INSERT INTO contacts (phone, first_name, last_name, email, address)
    VALUES ('$phone', '$first_name', '$last_name', '$email', '$address')";
    
    if(mysqli_query($db_conn, $insert)){
        echo json_encode(["success" => true, "message" => "Contact added successfully"]);
        exit;
    }
    else{
        echo json_encode(["success" => false, "message" => "Error: "]);
        exit;
    }

 }else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}
     

} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}
   
?>
