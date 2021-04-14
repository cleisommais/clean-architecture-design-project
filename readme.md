# Clean architecture design

Entities:

    ParkingLot
    has: code, capacity, openHour, closeHour

    ParkedCar
    has: code, plate, date

Use cases:

    EnterParkingLot
    LeaveParkingLot

## Before start
* Install the typescript module `npm install -g typescript`
* Within root project run `npm install`
* To test `npm run test`


## SQL Scripts

`CREATE DATABASE example
    WITH 
    OWNER = developer
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;`

`CREATE TABLE public.parked_car
(
    code character varying(255) COLLATE pg_catalog."default"  NOT NULL,
    plate character varying(255) COLLATE pg_catalog."default",
    date timestamp without time zone,
    CONSTRAINT parked_car_pkey PRIMARY KEY (code)
)
TABLESPACE pg_default;
ALTER TABLE public.parked_car
    OWNER to developer;`

`CREATE TABLE public.parking_lot
(
    code character varying(255) COLLATE pg_catalog."default"  NOT NULL,
    capacity integer,
    open_hour integer,
    close_hour integer,
    CONSTRAINT parking_lot_pkey PRIMARY KEY (code)
)
TABLESPACE pg_default;
ALTER TABLE public.parking_lot
    OWNER to developer;`    

`INSERT INTO public.parking_lot(code, capacity, open_hour, close_hour) 	VALUES ('shopping', 5, 8, 22);`    