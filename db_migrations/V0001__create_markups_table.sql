CREATE TABLE IF NOT EXISTS markups (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    purchase_price DECIMAL(10, 2) NOT NULL,
    selling_price DECIMAL(10, 2) NOT NULL,
    markup_percent DECIMAL(5, 2) GENERATED ALWAYS AS (
        CASE 
            WHEN purchase_price > 0 THEN ((selling_price - purchase_price) / purchase_price * 100)
            ELSE 0
        END
    ) STORED,
    markup_amount DECIMAL(10, 2) GENERATED ALWAYS AS (selling_price - purchase_price) STORED,
    category VARCHAR(100),
    supplier VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_markups_category ON markups(category);
CREATE INDEX idx_markups_supplier ON markups(supplier);
CREATE INDEX idx_markups_created_at ON markups(created_at);

INSERT INTO markups (product_name, purchase_price, selling_price, category, supplier) VALUES
('Смартфон XYZ Pro', 25000.00, 35000.00, 'Электроника', 'TechSupply'),
('Ноутбук ABC 15"', 45000.00, 65000.00, 'Электроника', 'CompuWorld'),
('Наушники Wireless', 3000.00, 5500.00, 'Аксессуары', 'AudioPlus'),
('Чехол для телефона', 200.00, 800.00, 'Аксессуары', 'PhoneCase Inc'),
('Клавиатура механическая', 5000.00, 8000.00, 'Периферия', 'KeyMaster'),
('Мышь беспроводная', 800.00, 1500.00, 'Периферия', 'TechSupply');
