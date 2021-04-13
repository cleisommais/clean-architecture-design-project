import ParkedCar from "../entities/ParkedCar";
import ParkingLotRepository from "../repositories/ParkingLotRepository";

class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    async execute(code: string, plate: string, date: Date) {
        //const parkingLot = new ParkingLot("shopping", 50, 8, 22);
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);
        const parkedCar = new ParkedCar(code, plate, date);
        if (parkingLot == undefined) {
            throw new Error("The parking lot not found!");
        }else if(!parkingLot.isOpen(parkedCar.date)){
            throw new Error("The parking lot is closed!");
        }else if(!parkingLot.isFull()){
            throw new Error("The parking lot is full!");
        }
        await this.parkingLotRepository.saveParkedCard(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}

export default EnterParkingLot;
