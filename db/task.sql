CREATE DATABASE IF NOT EXISTS Tasks;

USE Tasks;

CREATE TABLE tasks (
  id INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
  titles VARCHAR(45) DEFAULT NULL,
  description TEXT,
  state BOOLEAN NOT NULL,
  date_creation  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

DESCRIBE tasks;

INSERT INTO task (titles, description, state) VALUES
  ('Tarea 1', 'Descripción de la tarea 1', true),
  ('Tarea 2', 'Descripción de la tarea 2', false),
  ('Tarea 3', 'Descripción de la tarea 3', true);

SELECT * FROM tasks;