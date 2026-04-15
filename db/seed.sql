-- Seed file for quick local testing (UUIDs shortened here for readability)
INSERT INTO subjects (id, name, slug) VALUES
('00000000-0000-0000-0000-0000000000s1', 'Cell culture', 'cell-culture'),
('00000000-0000-0000-0000-0000000000s2', 'Microscopy', 'microscopy'),
('00000000-0000-0000-0000-0000000000s3', 'Scaffold fabrication', 'scaffold-fabrication'),
('00000000-0000-0000-0000-0000000000s4', 'Finite element modeling', 'finite-element-modeling'),
('00000000-0000-0000-0000-0000000000s5', 'Reagents', 'reagents'),
('00000000-0000-0000-0000-0000000000s6', 'Troubleshooting', 'troubleshooting');

-- Additional inserts omitted in MVP docs; app ships with in-memory seed in lib/sample-data.ts.
