<?php
$data = json_decode(file_get_contents("php://input"), true);
$file = "users.txt";

// إذا كان الملف موجودًا، نقوم بقراءة البيانات
if (file_exists($file)) {
    $existingUsers = json_decode(file_get_contents($file), true);
} else {
    $existingUsers = [];
}

// إضافة المستخدم الجديد إلى القائمة
$existingUsers[] = $data;

// حفظ البيانات في الملف
file_put_contents($file, json_encode($existingUsers));
?>
