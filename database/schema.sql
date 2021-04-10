CREATE DATABASE IF NOT EXISTS borgar_db;
USE borgar_db;

CREATE TABLE borgars (
	id int NOT NULL auto_increment,
	name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
    );
    
    INSERT INTO borgars (name, devoured) VALUES ('Ork-Borgar', FALSE);
    INSERT INTO borgars (name, devoured) VALUES ('Feathered-Borgar', FALSE);
    INSERT INTO borgars (name, devoured) VALUES ('Borgar-Alpharius', TRUE);