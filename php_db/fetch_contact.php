<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Database connection
$db_conn = new mysqli('localhost', 'root', '', 'contact_table');

// Check connection
if ($db_conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $db_conn->connect_error]);
    exit;
}

// Query to fetch data
$sql = "SELECT * FROM contacts";
$result = $db_conn->query($sql);

$data = [];
if ($result) {
    if ($result->num_rows > 0) {
        
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Query error: " . $db_conn->error]);
    exit;
}

// Close the database connection
$db_conn->close();

// Output data as JSON
echo json_encode($data);
?>
