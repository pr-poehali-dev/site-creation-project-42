CREATE TABLE IF NOT EXISTS site_visits (
    id SERIAL PRIMARY KEY,
    visitor_ip VARCHAR(45),
    user_agent TEXT,
    page_url VARCHAR(500) NOT NULL,
    referrer VARCHAR(500),
    country VARCHAR(100),
    city VARCHAR(100),
    device_type VARCHAR(50),
    browser VARCHAR(50),
    os VARCHAR(50),
    visit_duration INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_visits_created_at ON site_visits(created_at);
CREATE INDEX idx_visits_page_url ON site_visits(page_url);
CREATE INDEX idx_visits_country ON site_visits(country);
CREATE INDEX idx_visits_device_type ON site_visits(device_type);

INSERT INTO site_visits (visitor_ip, user_agent, page_url, referrer, country, city, device_type, browser, os, visit_duration, created_at) VALUES
('192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/', 'https://google.com', 'Россия', 'Москва', 'Desktop', 'Chrome', 'Windows', 145, '2025-10-29 10:15:23'),
('192.168.1.2', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)', '/blog', 'https://yandex.ru', 'Россия', 'Санкт-Петербург', 'Mobile', 'Safari', 'iOS', 89, '2025-10-29 10:23:45'),
('192.168.1.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '/', 'direct', 'США', 'Нью-Йорк', 'Desktop', 'Safari', 'macOS', 234, '2025-10-29 10:45:12'),
('192.168.1.4', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/blog', 'https://vk.com', 'Россия', 'Казань', 'Desktop', 'Chrome', 'Windows', 167, '2025-10-29 11:02:33'),
('192.168.1.5', 'Mozilla/5.0 (Linux; Android 13)', '/', 'https://google.com', 'Украина', 'Киев', 'Mobile', 'Chrome', 'Android', 92, '2025-10-29 11:15:47'),
('192.168.1.6', 'Mozilla/5.0 (iPad; CPU OS 16_0)', '/blog', 'https://facebook.com', 'Германия', 'Берлин', 'Tablet', 'Safari', 'iOS', 201, '2025-10-29 11:34:21'),
('192.168.1.7', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/', 'direct', 'Россия', 'Новосибирск', 'Desktop', 'Firefox', 'Windows', 178, '2025-10-29 12:08:15'),
('192.168.1.8', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)', '/blog', 'https://google.com', 'Беларусь', 'Минск', 'Mobile', 'Safari', 'iOS', 134, '2025-10-29 12:28:42'),
('192.168.1.9', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '/', 'https://telegram.org', 'Россия', 'Екатеринбург', 'Desktop', 'Chrome', 'macOS', 256, '2025-10-29 13:12:09'),
('192.168.1.10', 'Mozilla/5.0 (Linux; Android 12)', '/blog', 'https://yandex.ru', 'Казахстан', 'Алматы', 'Mobile', 'Chrome', 'Android', 143, '2025-10-29 13:45:33'),
('192.168.1.11', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/', 'direct', 'Россия', 'Москва', 'Desktop', 'Edge', 'Windows', 189, '2025-10-29 14:22:18'),
('192.168.1.12', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)', '/blog', 'https://google.com', 'Россия', 'Санкт-Петербург', 'Mobile', 'Safari', 'iOS', 112, '2025-10-29 14:56:27'),
('192.168.1.13', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/', 'https://habr.com', 'Россия', 'Челябинск', 'Desktop', 'Chrome', 'Windows', 221, '2025-10-29 15:18:44'),
('192.168.1.14', 'Mozilla/5.0 (iPad; CPU OS 17_0)', '/blog', 'direct', 'Польша', 'Варшава', 'Tablet', 'Safari', 'iOS', 167, '2025-10-29 15:42:11'),
('192.168.1.15', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '/', 'https://google.com', 'Великобритания', 'Лондон', 'Desktop', 'Chrome', 'macOS', 298, '2025-10-29 16:07:55'),
('192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/blog', 'direct', 'Россия', 'Москва', 'Desktop', 'Chrome', 'Windows', 156, '2025-10-29 16:34:22'),
('192.168.1.16', 'Mozilla/5.0 (Linux; Android 13)', '/', 'https://yandex.ru', 'Россия', 'Красноярск', 'Mobile', 'Chrome', 'Android', 87, '2025-10-29 17:01:09'),
('192.168.1.17', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', '/blog', 'https://vk.com', 'Россия', 'Ростов-на-Дону', 'Desktop', 'Chrome', 'Windows', 203, '2025-10-29 17:28:46'),
('192.168.1.18', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)', '/', 'https://google.com', 'Франция', 'Париж', 'Mobile', 'Safari', 'iOS', 145, '2025-10-29 18:02:31'),
('192.168.1.19', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', '/blog', 'direct', 'Канада', 'Торонто', 'Desktop', 'Safari', 'macOS', 267, '2025-10-29 18:35:17');
