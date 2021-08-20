INSERT INTO enterprise (cnpj, razao_social, nome_fantasia, situacao_cadastral) VALUES(
    '957034985',
    'OPEN KNOWLEDGE RÚSSIA',
    'Bibi Tech',
    4
);

SELECT * FROM enterprise;

SELECT * FROM enterprise WHERE situacao_cadastral = 4;

SELECT * FROM enterprise WHERE nome_fantasia = "Sapiens";

SELECT * FROM enterprise WHERE situacao_cadastral >= 3;