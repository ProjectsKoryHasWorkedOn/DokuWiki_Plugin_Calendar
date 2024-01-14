CREATE TABLE IF NOT EXISTS Owner(
  ownerID INTEGER PRIMARY KEY AUTOINCREMENT
);


CREATE TABLE IF NOT EXISTS Events(
  /* PK */ eventID INTEGER PRIMARY KEY AUTOINCREMENT,
  /* FK */ ownerID INTEGER NOT NULL, 
  eventTitle VARCHAR(20) NOT NULL UNIQUE,
  eventTo VARCHAR(20) NOT NULL UNIQUE,
  eventFrom VARCHAR(20) NOT NULL UNIQUE,
  eventDescription VARCHAR(20) NOT NULL UNIQUE,
  eventLocation VARCHAR(20) NOT NULL UNIQUE,
  eventGroup VARCHAR(20) NOT NULL UNIQUE,
  eventIsAllDay VARCHAR(20) NOT NULL UNIQUE,
  eventShowAlerts VARCHAR(20) NOT NULL UNIQUE,
  eventShowAsBusy VARCHAR(20) NOT NULL UNIQUE,
  eventRepeatEnds VARCHAR(20) NOT NULL UNIQUE,
  eventURL VARCHAR(20) NOT NULL UNIQUE,
  eventRepeatEveryCustomValue VARCHAR(20) NOT NULL UNIQUE,
  eventType VARCHAR(20) NOT NULL UNIQUE,
  eventAlertOffset VARCHAR(20) NOT NULL UNIQUE,
  eventRepeatEvery VARCHAR(20) NOT NULL UNIQUE,
  eventRepeatEveryCustomType VARCHAR(20) NOT NULL UNIQUE,
  eventOrganizerName VARCHAR(20) NOT NULL UNIQUE,
  eventOrganizerEmailAddress VARCHAR(20) NOT NULL UNIQUE,
  eventCreated VARCHAR(20) NOT NULL UNIQUE,
  eventLastUpdated VARCHAR(20) NOT NULL UNIQUE,
  
  /* FK references */ FOREIGN KEY(ownerID) references Owner(ownerID)
);