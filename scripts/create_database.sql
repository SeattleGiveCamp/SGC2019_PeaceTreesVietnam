# Insert the actual password that will be used for the database admin user
# in place of insert-password-here.  The create database, create user, and
# grant command should be run as the MySQL root user.  After the database
# admin user is available, the remaining commands can either be run as that
# user or as the MySQL root user.  Note this only needs to be run once to
# set up a new database (e.g. for local testing).  Once the server is in
# production, further database schema changes should be done by means of
# migration sql scripts, rather than just changing this script (though this
# script should be updated as well).  Providing migration scripts will allow
# other developers to update their local databases to match the official
# schema.
CREATE DATABASE PeaceTrees_Vietnam DEFAULT CHARACTER SET utf8;
COMMIT;
CREATE USER 'peacetrees_admin'@'localhost' IDENTIFIED BY 'insert-password-here';
COMMIT;
GRANT ALL ON PeaceTrees_Vietnam.* TO 'peacetrees_admin'@'localhost';
COMMIT;
CREATE TABLE Location (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
COMMIT;
CREATE TABLE ProjectCategory (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
COMMIT;
CREATE TABLE ProjectStatus (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
COMMIT;
INSERT INTO ProjectCategory
    (name)
VALUES
    ("Community Project"),
    ("Library"),
    ("Kindergarten"),
    ("Economic Development Project"),
    ("Other");
COMMIT;
INSERT INTO ProjectStatus
    (name)
VALUES
    ("Repurposed"),
    ("Planned"),
    ("Under Construction"),
    ("Under Cultivation"),
    ("Complete");
CREATE TABLE Project (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    projectName VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    projectType INT,
    description TEXT,
    sponsors TEXT,
    dedicatedTo VARCHAR(200),
    projectStatus INT,
    completedYear INT,
    plantedYear INT,
    imageUrl VARCHAR(200),
    pageUrl VARCHAR(200),
    notes TEXT,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES Location(id)
    FOREIGN KEY (projectType) REFERENCES ProjectCategory(id)
    FOREIGN KEY (projectStatus) REFERENCES ProjectStatus(id)
);
COMMIT;
CREATE TABLE Ordnance (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES Location(id)
);
COMMIT;
