<?php
session_start();
include 'db_connection.php';

$username = $_POST['username'];
$password = $_POST['password'];
$role = $_POST['role'];

// Fetch user from database
$sql = "SELECT * FROM users WHERE username = ? AND role = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $role);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Verify password
    if (password_verify($password, $user['password'])) {
        $_SESSION['username'] = $user['username'];
        $_SESSION['role'] = $role;

        if ($role === 'user') {
            header("Location: user_dashboard.html");
        } elseif ($role === 'admin') {
            header("Location: admin_dashboard.html");
        }
        exit();
    } else {
        echo "Invalid credentials.";
    }
} else {
    echo "User not found.";
}
?>
