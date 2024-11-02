let users = [];

// تحميل المستخدمين من ملف نصي
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.txt", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            users = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
}

// تسجيل الدخول
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert(`مرحباً بك، ${username}!`);
        closeModal();
        // هنا يمكنك إضافة منطق تسجيل دخول المستخدم
    } else {
        document.getElementById('loginMessage').innerText = "الحساب غير متوفر.";
    }
}

// إنشاء حساب جديد
function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
        document.getElementById('registerMessage').innerText = "كلمة المرور غير متطابقة.";
        return;
    }

    if (users.find(u => u.username === newUsername)) {
        document.getElementById('registerMessage').innerText = "اسم المستخدم موجود بالفعل.";
        return;
    }

    const newUser = { username: newUsername, password: newPassword };
    users.push(newUser);
    saveUser(newUser);
    alert("تم إنشاء الحساب بنجاح!");
    closeModal();
}

// حفظ المستخدمين في ملف نصي
function saveUser(user) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_user.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
}

// فتح نافذة تسجيل الدخول
document.getElementById('loginButton').onclick = function() {
    loadUsers();
    document.getElementById('loginModal').style.display = 'block';
}

// إغلاق النافذة
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'none';
}

// عرض نافذة التسجيل
function showRegister() {
    document.getElementById('registerModal').style.display = 'block';
}


// تحميل المستخدمين عند التحميل
window.onload = loadUsers;
