import ParkedCar from "../entities/ParkedCar";
import ParkingLot from "../entities/ParkingLot";

interface ParkingLotRepository {
    saveParkedCard(code: string, plate: string, date: Date): void;
    getParkingLot(code: string): Promise<ParkingLot | undefined>;
}

export default ParkingLotRepository;
