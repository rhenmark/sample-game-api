-- insert to treasures
INSERT INTO treasures (id, latitude, longitude, name) VALUES
(100, 15.000000, 121.000000, 'T1'),
(101, 15.000000, 121.000000, 'T2'),
(102, 15.000000, 121.000000, 'T3'),
(103, 15.000000, 121.000000, 'T4'),
(104, 15.000000, 121.000000, 'T5'),
(105, 15.000000, 121.000000, 'T6'),
(106, 15.000000, 121.000000, 'T7'),
(107, 15.000000, 121.000000, 'T8'),
(108, 14.000000, 121.000000, 'T9'),
(109, 15.000000, 121.000000, 'T10'),
(110, 15.000000, 121.000000, 'T11'),
(111, 15.000000, 121.000000, 'T12'),
(112, 15.000000, 121.000000, 'T13'),
(113, 15.000000, 121.000000, 'T14'),
(114, 15.000000, 121.000000, 'T15'),
(115, 15.000000, 121.000000, 'T16'),
(116, 15.000000, 121.000000, 'T17'),
(117, 14.000000, 121.000000, 'T18');


-- insert to users
INSERT INTO users ( name, age, password, email) VALUES
( 'U1', 21, '123123', 'u1@kitra.abc'),
( 'U2', 51, '234234', 'u2@kitra.abc'),
( 'U3', 31, '345345', 'u3@kitra.abc'),
( 'U4', 18, '456456', 'u4@kitra.abc'),
( 'U5', 21, '567567', 'u5@kitra.abc'),
( 'U6', 35, '678678', 'u6@kitra.abc');

-- insert to money values
INSERT INTO money_values (treasure_id, amt) VALUES
(100, 15),
(101, 10),
(102, 15),
(103, 15),
(104, 10),
(105, 15),
(106, 15),
(107, 10),
(108, 15),
(109, 15),
(110, 10),
(111, 15),
(112, 15),
(113, 10),
(114, 15),
(115, 15),
(116, 10),
(117, 15),
(100, 20),
(101, 25),
(102, 20),
(103, 25),
(107, 30),
(108, 30),
(109, 30);