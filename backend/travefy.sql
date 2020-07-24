CREATE TABLE Packages (
    id int auto_increment,
    title varchar(100) NOT NULL,
    description varchar(500) NOT NULL,
    location varchar(200) NOT NULL,
    hotelID int NOT NULL,
    duration TIME NOT NULL,
    price float NOT NULL,
    currency varchar(4) NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    flightID varchar(50) NOT NULL,
    transportationID varchar(50),
    busNo varchar(50),
    discountAmnt float,

    primary key(id)
)

CREATE TABLE Bookings (
    bookID int auto_increment,
    clientID int NOT NULL,
    packageID int NOT NULL,
    bookDate DATETIME NOT NULL,

    primary key(bookID),
    foreign key(clientID) REFERENCES Client(clientID),
    foreign key(packageID) REFERENCES Packages(packageID)
)