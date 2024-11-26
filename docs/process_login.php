<?php
session_start();

// Predefined users (username => [password, role])
$users = [
    "andrematarlo" => ["Matarlo13", "user"],
    "adminuser" => ["AdminPass123", "admin"]
];

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];
$role = $_POST['role'];

// Check if username exists and role matches
if (isset($users[$username]) && $users[$username][0] === $password && $users[$username][1] === $role) {
    $_SESSION['username'] = $username;
    $_SESSION['role'] = $role;

    // Redirect based on role
    if ($role === "user") {
        header("Location: user_dashboard.html");
    } elseif ($role === "admin") {
        header("Location: admin_dashboard.html");
    }
    exit();
} else {
    echo "Invalid username, password, or role. Please try again.";
}
?>
