CREATE TABLE Hotels (
    hotelID int AUTO_INCREMENT,
    hotelLocation varchar NOT NULL,
    pricePerNight float NOT NULL,
    currency varchar NOT NULL,
    phone int,
    email VARCHAR,

    PRIMARY KEY(hotelID)
)

CREATE TABLE Flight (
    id int AUTO_INCREMENT PRIMARY KEY,
    startPoint varchar(50) NOT NULL,
    endPoint varchar(50) NOT NULL,
    startTime DATETIME NOT NULL,
    endTime DATETIME NOT NULL,
    class varchar(20) NOT NULL,
    price decimal not null,
    duration int,
    priceCurrency VARCHAR(50) NOT NULL
)

CREATE TABLE Airport (
    
)