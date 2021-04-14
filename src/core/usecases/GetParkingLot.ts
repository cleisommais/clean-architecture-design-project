import ParkingLotRepository from "../repositories/ParkingLotRepository";

class GetParkingLotRepository {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string) {
        return this.parkingLotRepository.getParkingLot(code);
    }
}
export default GetParkingLotRepository;
