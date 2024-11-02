<?php
// الحصول على عنوان IP
$ip_address = $_SERVER['REMOTE_ADDR'];

// عرض عنوان IP
?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>yes</h1>
        <p>it is <strong><?php echo $ip_address; ?></strong></p>
        <a href="index.html" class="btn">العودة إلى الصفحة الرئيسية</a>
    </div>
</body>
</html>
