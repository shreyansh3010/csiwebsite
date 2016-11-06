<?php
$servername = "localhost";
$username = "root";
$password = "yashabhishek";
$dbname = "slackemail";
if(isset($_REQUEST['slackemail']))
{
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO slackemail (email)
        VALUES (:email)";
        // use exec() because no results are returned
        $query_params = array(':email' => $_REQUEST['slackemail']);
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute($query_params);
        // $conn->exec($sql);
        echo "Email inserted successfully";
        }
    catch(PDOException $e)
        {
        echo "Email not inserted. Sorry.";
        }

    $conn = null;
}
?>
