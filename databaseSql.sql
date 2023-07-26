CREATE DATABASE miPrimerNombre_20230719;


CREATE TABLE tresource_type (
	idResourceType int auto_increment PRIMARY KEY,
    created datetime,
    descrip varchar(200)
);

CREATE TABLE tresource (
	idResource int auto_increment PRIMARY KEY,
    created datetime,
    descrip varchar(200),
    idResourceType int,
    foreign key (idResourceType) references tresource_type(idResourceType)
);

INSERT INTO tresource_type (created, descrip) VALUES 
(NOW(), 'Vídeo'),
(NOW(), 'PDF Documentación'),
(NOW(), 'PDF Enunciado'),
(NOW(), 'PDF Solución');

INSERT INTO tresource (created, descrip, idResourceType) 
VALUES
(NOW(), 'Recurso 1', 1),
(NOW(), 'Recurso 2', 2),
(NOW(), 'Recurso 3', 3),
(NOW(), 'Recurso 4', 2),
(NOW(), 'Recurso 5', 4),
(NOW(), 'Recurso 6', 1);

SELECT tresource_type.descrip AS Resource_Type, COUNT(*) AS Total
FROM tresource
INNER JOIN tresource_type ON tresource.idResourceType = tresource_type.idResourceType
GROUP BY tresource_type.descrip;