BEGIN; -- Début de la transaction

-- Insertion des pays
INSERT INTO "country" ("name") VALUES
('Italie'),
('Colombie'),
('Éthiopie'),
('Brésil'),
('Guatemala'),
('Kenya'),
('Indonésie'),
('Costa Rica'),
('Vietnam'),
('Tanzanie'),
('Jamaïque'),
('Rwanda'),
('Panama'),
('Pérou'),
('Hawaï'),
('Nicaragua');

-- Insertion des categories
INSERT INTO "category" ("name") VALUES
('Corsé'),
('Épicé'),
('Acide'),
('Doux'),
('Fruité'),
('Chocolaté'),
('Florale');

-- Insertion des cafés
INSERT INTO "coffee" ("name", "description", "reference", "price_per_kg", "available", "country_id") VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 20.99, TRUE, 1),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 18.75, TRUE, 2),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 22.50, TRUE, 3),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 17.80, TRUE, 4),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 21.25, TRUE, 5),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 23.70, TRUE, 6),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 19.95, TRUE, 7),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 24.50, TRUE, 8),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 16.75, TRUE, 9),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 26.80, TRUE, 10),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 39.25, TRUE, 11),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 21.90, TRUE, 12),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 42.00, TRUE, 13),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 19.40, FALSE, 14),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 55.75, FALSE, 15),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 28.60, FALSE, 16);

-- Insertion des relations cafés/catégories
INSERT INTO "coffee_category" ("coffee_id", "category_id") VALUES
(1, 1), -- Espresso, Corsé
(1, 2), -- Espresso, Épicé
(2, 3), -- Columbian, Acide
(3, 4), -- Ethiopian Yirgacheffe, Doux
(3, 5), -- Ethiopian Yirgacheffe, Fruité
(4, 4), -- Brazilian Santos, Doux
(5, 1), -- Guatemalan Antigua, Corsé
(5, 2), -- Guatemalan Antigua, Épicé
(6, 4), -- Kenyan AA, Doux
(6, 3), -- Kenyan AA, Acide
(7, 1), -- Sumatra Mandheling, Corsé
(8, 3), -- Costa Rican Tarrazu, Acide
(9, 2), -- Vietnamese Robusta, Épicé
(10, 5), -- Tanzanian Peaberry, Fruité
(10, 1), -- Tanzanian Peaberry, Corsé
(11, 4), -- Jamaican Blue Mountain, Doux
(12, 5), -- Rwandan Bourbon, Fruité
(13, 5), -- Panamanian Geisha, Fruité
(14, 1), -- Peruvian Arabica, Corsé
(14, 6), -- Peruvian Arabica, Chocolaté
(15, 4), -- Hawaiian Kona, Doux
(16, 1), -- Nicaraguan Maragogipe, Corsé
(16, 5); -- Nicaraguan Maragogipe, Fruité

COMMIT; -- Fin de la transaction