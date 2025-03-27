<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'contacts/api/*'], // Add your specific path
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Your React app's URL
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
