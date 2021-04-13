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