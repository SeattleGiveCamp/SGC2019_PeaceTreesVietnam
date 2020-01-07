# Make a copy of this file, and insert the actual password that will be used
# for the database admin user in place of insert-password-here.  You can then
# run that copy as a script, e.g. using the mysql client program.  Do this as
# the MySQL root user.  Or, you can run the individual commands if you prefer.
# The create database, create user, and grant command should be run as the
# MySQL root user.  After the database admin user is available, the remaining
# commands can either be run as that user or as the MySQL root user.
# Note this only needs to be run once to set up a new database (e.g. for
# local testing).  Once the server is in production, further database schema
# changes should be done by means of migration sql scripts, rather than just
# changing this script.  Providing a separate migration script for each schema
# change will allow the live site to be updated, and allow developers with test
# databases to update their databases to match the official schema.
CREATE DATABASE PeaceTrees_Vietnam DEFAULT CHARACTER SET utf8;
COMMIT;
CREATE USER 'peacetrees_admin'@'localhost' IDENTIFIED BY 'insert-password-here';
COMMIT;
GRANT ALL ON PeaceTrees_Vietnam.* TO 'peacetrees_admin'@'localhost';
COMMIT;
CREATE TABLE PeaceTrees_Vietnam.Location (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
COMMIT;
CREATE TABLE PeaceTrees_Vietnam.ProjectCategory (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
COMMIT;
CREATE TABLE PeaceTrees_Vietnam.ProjectStatus (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
COMMIT;
INSERT INTO PeaceTrees_Vietnam.ProjectCategory
    (name)
VALUES
    ("Community Project"),
    ("Library"),
    ("Kindergarten"),
    ("Economic Development Project"),
    ("Other");
COMMIT;
INSERT INTO PeaceTrees_Vietnam.ProjectStatus
    (name)
VALUES
    ("Repurposed"),
    ("Planned"),
    ("Under Construction"),
    ("Under Cultivation"),
    ("Complete");
CREATE TABLE PeaceTrees_Vietnam.Project (
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
    FOREIGN KEY (location_id) REFERENCES PeaceTrees_Vietnam.Location(id),
    FOREIGN KEY (projectType) REFERENCES PeaceTrees_Vietnam.ProjectCategory(id),
    FOREIGN KEY (projectStatus) REFERENCES PeaceTrees_Vietnam.ProjectStatus(id)
) CHARACTER SET utf8mb4;
COMMIT;
CREATE TABLE PeaceTrees_Vietnam.Ordnance (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES PeaceTrees_Vietnam.Location(id)
);
COMMIT;
