/*
CREATE TABLE IF NOT EXISTS Owner(
  ownerID INTEGER PRIMARY KEY AUTOINCREMENT
);
*/


CREATE TABLE IF NOT EXISTS Events(
  /* PK */ eventID INTEGER PRIMARY KEY AUTOINCREMENT,
  /* FK  ownerID INTEGER NOT NULL, */
  eventTitle VARCHAR(20) NOT NULL UNIQUE
  
  /*
  eventTo VARCHAR(20) NOT NULL UNIQUE,
  eventFrom VARCHAR(20) NOT NULL UNIQUE,
  eventDescription TEXT NOT NULL UNIQUE,
  eventLocation TEXT NOT NULL UNIQUE,
  eventGroup VARCHAR(20) NOT NULL UNIQUE,
  eventIsAllDay VARCHAR(20) NOT NULL UNIQUE,
  eventShowAlerts VARCHAR(20) NOT NULL UNIQUE,
  eventShowAsBusy VARCHAR(20) NOT NULL UNIQUE,
  eventRepeatEnds VARCHAR(20) NOT NULL UNIQUE,
  eventURL TEXT NOT NULL UNIQUE,
  eventRepeatEveryCustomValue VARCHAR(20) NOT NULL UNIQUE,
  eventType INTEGER NOT NULL UNIQUE,
  eventAlertOffset INTEGER NOT NULL UNIQUE,
  eventRepeatEvery INTEGER NOT NULL UNIQUE,
  eventRepeatEveryCustomType INTEGER NOT NULL UNIQUE,
  eventOrganizerName VARCHAR(20) NOT NULL UNIQUE,
  eventOrganizerEmailAddress VARCHAR(255) NOT NULL UNIQUE,
  eventCreated VARCHAR(20) NOT NULL UNIQUE,
  eventLastUpdated VARCHAR(20) NOT NULL UNIQUE,
  */
  
  /* FK references  FOREIGN KEY(ownerID) references Owner(ownerID) */
);

INSERT INTO Events
(eventTitle)
VALUES
('My title');