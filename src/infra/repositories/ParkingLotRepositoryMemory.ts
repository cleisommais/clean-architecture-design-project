import ParkingLotAdapter from "../../adapters/ParkingLotAdapter";
import ParkedCar from "../../core/entities/ParkedCar";
import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repositories/ParkingLotRepository";

class ParkingLotRepositoryMemory implements ParkingLotRepository {
    parkingLotsArray = [
        {
            code: "shopping",
            capacity: 4,
            open_hour: 8,
            close_hour: 22
        },
    ];
    parkedCarsArray: ParkedCar[] = [];
    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCarsArray.push({ code, plate, date });
    }
    getParkingLot(code: string): Promise<ParkingLot | undefined> {
        const parkingLotData = this.parkingLotsArray.find(
            (parking) => parking.code === code
        );        
        if (parkingLotData != undefined) {
            const occupiedSpaces = this.parkedCarsArray.length;
            const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);
            return Promise.resolve(parkingLot);
        }
        return Promise.resolve(undefined);
    }
}
export default ParkingLotRepositoryMemory;
