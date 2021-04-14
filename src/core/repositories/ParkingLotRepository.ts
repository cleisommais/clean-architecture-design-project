import ParkingLot from "../entities/ParkingLot";

interface ParkingLotRepository {
    saveParkedCar(code: string, plate: string, date: Date): void;
    getParkingLot(code: string): Promise<ParkingLot | undefined>;
}

export default ParkingLotRepository;
