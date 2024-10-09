create table
  treasures (
    id bigint primary key generated always as identity,
    latitude decimal(9, 6) not null,
    longitude decimal(9, 6) not null,
    name text not null
  );

alter sequence treasures_id_seq restart with 100;

create table 
    users (
    id bigint primary key generated always as identity,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
alter sequence users_id_seq restart with 3000;

-- create table: money_values
create table money_values (
    id bigint primary key generated always as identity,
    treasure_id INT NOT NULL,
    amt DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (treasure_id) REFERENCES treasures(id) ON DELETE CASCADE
);