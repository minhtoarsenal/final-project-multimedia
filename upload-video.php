<?php
header("Access-Control-Allow-Origin: *");
if(isset($_FILES["file"])){
    // Define a name for the file
    $fileName = $_FILES["file"]["name"];

    // In this case the current directory of the PHP script
    $uploadDirectory = './uploads/'. $fileName;
    
    // Move the file to your server
    if (!move_uploaded_file($_FILES["file"]["tmp_name"], $uploadDirectory)) {
        echo("Couldn't upload video !");
    }
}else{
    echo "No file uploaded";
}
 
?>

