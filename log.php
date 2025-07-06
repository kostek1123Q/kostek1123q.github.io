<?php
// Webhook Discorda
$webhook_url = "https://discord.com/api/webhooks/1391547254036500540/sWJmd-1sylhKt6FNVXSw63FYu9A_AhKLERYI1xugPGleIgM1YCJBfWnFVaV4wDQiQUoQ";

// Odbierz dane z JS
$data = json_decode(file_get_contents('php://input'), true);

$ip = htmlspecialchars($data['ip'] ?? 'Nieznane');
$city = htmlspecialchars($data['city'] ?? 'Nieznane');
$country = htmlspecialchars($data['country'] ?? 'Nieznane');
$userAgent = htmlspecialchars($data['userAgent'] ?? 'Nieznane');

$message = "**Nowe pobranie GustavoTools**\n";
$message .= "🌐 IP: `$ip`\n";
$message .= "🏙️ Miasto: `$city`\n";
$message .= "🏴 Kraj: `$country`\n";
$message .= "📱 Urządzenie: `$userAgent`";

$json_data = json_encode([
    "content" => $message
]);

$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-Type: application/json",
        'content' => $json_data
    ]
];

$context = stream_context_create($options);
file_get_contents($webhook_url, false, $context);

// Zwróć odpowiedź
echo json_encode(["status" => "ok"]);
