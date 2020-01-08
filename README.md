# SGC2019_PeaceTreesVietnam

## Primary Problem Goal

Create a map that has markers based on lat/long data that can be clicked on, show a modal with more information about the marker and allow you to click something to go to a page to see more information.

## Setting up a development environment

These are terse instructions for a developer working on this project, to set up a local development and test environment.
Not all parts of this procedure are available from the repository alone -- in particular, the data to populate the database is not.

### Install MySQL

We are using MySQL 5.7, as 8.0 was not yet available in a community edition at the time the project was started,
and 5.7 is what is running on the production server.  We cannot migrate to 8.0 until it is provided on the production server.

MySQL Server 5.7 documentation:  https://dev.mysql.com/doc/refman/5.7/en/

Installation instructions for different operating systems:  https://dev.mysql.com/doc/refman/5.7/en/installing.html
See the instructions for your OS.

Download the MySQL 5.7 Community Server installer:  https://dev.mysql.com/downloads/mysql/  (Select "Looking for previous GA versions?" to get 5.7.)

Note for all installations:  If you are running a different version of MySQL already, then it is likely using the default port, 3306.
In that case, pick a different port (tradition says, use 3307).  You will set the port during installation.

For Windows:
While running the installer, make sure Connector/Node.js and MySQL shell are selected.  You may also want MySQL Workbench.
If necessary (see above) set the TCP/IP port.  Un-check the option to open the firewall if you will be testing locally.
You do not need MySQL Router, so if you decide to install it, you do not need to let the installer configure it at this point.
Note the installer will install 8.0 versions of the other components -- they are compatible with server version 5.7.
The installer will create the data directory and system tables, and put the command line tools in your path.

For MacOS:
Use the DMG installer, as that will also create data directories and system tables.

For Linux:
Install using the appropriate package manager.  See installation documentation above for post-install setup.

Remember the root password.  Write it down somewhere, now.  Seriously, do not lose this.  On Windows, you choose the root password.
On MacOS, if you use the installer, you will get a temporary password, which you will need to change.

How you will start the MySQL server is different depending on your operating system.

On Windows, MySQL is a service.  On the Start menu, type Services, open that.  Scroll down to MySQL.
You can start and stop it here, or have it start automatically on boot.

On MacOS, you have a choice of which type of launcher to install:  https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html
A MySQL preferences pane is installed by default if you use the DMG installer -- open System Preferences and click on the MySQL icon.
You can start the server here, and choose whether to start it on boot.
You should take care of setting a real root password now.

Note that on the production server, MySQL is provided as a service, and is already installed and running.
This is the typical case, even for a local installation -- one MySQL server instance serves all databases.
So starting MySQL does not belong in our website startup script.
The instructions here have you start MySQL before starting the web server.

### Clone the repository

The repository is at:  https://github.com/SeattleGiveCamp/SGC2019_PeaceTreesVietnam

We are currently using a shared repository model, but if you do not have commit privileges on the above repository,
and expect to be making code changes you want to share, you can fork that repository, and then clone your fork.

### Get a Mapbox API key

Go to https://www.mapbox.com/ , scroll down to "Get your free API key", and follow instructions.
You will need to set up a Mapbox account.
Note the key will have three parts separated by ".": pk, then the key, then a checksum.
You'll need the entire string including all three parts, just as it appears in your account's key list.

### Edit the configuration files

There are two configuration files you will need to edit.  There are template versions for each, which should not be changed.
Only the templates are in the repository -- the templates do not contain any passwords or keys.  The edited local copies will.
Do not accidentally commit your local copies into the repository.

First is the database creation script.
You will need to choose a password for the database user.
In the repository, find scripts/create_database.sql.
Make a copy of this -- here, we'll call this create_database_local.sql.
The copy can be inside the scripts directory, but does not have to be -- it will just be run once.
Edit the copy and change `insert-password-here` to the chosen password.
Do not use quotes inside the password.

Second is the Node.js environment file.  There is a template version .env_template in the root of the repository.
Copy that into the frontend directory and rename the copy to .env.
No quotes are needed around values -- all are text.
Change the database user password to the one you put in the database creation script above.
Copy in your entire Mapbox API key, including the prefix pk and the checksum.
If you are not using the default MySQL port, change it here.
The remaining variables should likely be left unchanged:
The MySQL host is provided in case the MySQL server is running on a separate machine, which is unlikely for development, and requires additional setup.
Although there are variables for the database name and user, it is recommended that you do not change either,
as those are the values in use on the server, and are in the database creation script.

### Create the database

This assumes you will use the command line MySQL shell.  Open a terminal / cmd window.
Change directory to the repository's scripts directory where your create_database_local.sql file is.
Then run mysql as the root MySQL user -- this will ask for the MySQL root password.

`mysql -u root -p`

In mysql, execute the script.

`source create_database_local.sql`

This will create the PeaceTrees_Vietnam database and tables, and add user peacetrees_admin and assign privileges to it.

### Optionally load data

This requires the data csv files, project_id_lat_lon.csv and project2.csv.
It does not show loading ordnance data.
These can be loaded either as the MySQL root user or as the peacetrees_admin user.
If you want to use the latter, replace root with peacetrees_admin when starting the mysql client, and use the appropriate password.
This assumes your terminal / cmd window directory is set to where the csv files are.

`mysql -u root -p`

```
\u 'PeaceTrees_Vietnam'

LOAD DATA LOCAL INFILE 'project_id_lat_lon.csv'
INTO TABLE Location
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(id, latitude, longitude);

LOAD DATA LOCAL INFILE 'project2.csv'
INTO TABLE Project
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(projectName,projectType,completedYear,projectStatus,location,pageUrl,location_id,sponsors,dedicatedTo,notes);
```

### Install Node.js and packages

Node.js LTS version v12 documentation:  https://nodejs.org/docs/latest-v12.x/api/index.html

Install the LTS version (currently v12) of Node.js as per your operating system:  https://nodejs.org/en/

Open a terminal / cmd window, change directory to the frontend directory in the repository (where your edited .env file is) and run:

`npm install`

### Start the web server

In a terminal / cmd window in the frontend directory:

`npm start`

If you have a default browser set, a tab will open, at http://localhost:3000 , and the landing page with map will display.
Otherwise, open that URL.  If all is well, you should see a page with the PeaceTrees Vietnam logo and a map.

## Tools Used

## Resources Referenced
- [Dynamic Select Lists in React](https://medium.com/@cwmcmhn/create-dynamic-select-list-in-react-952bccf7a768)

## Team Members
