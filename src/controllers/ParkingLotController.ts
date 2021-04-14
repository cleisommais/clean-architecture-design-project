import GetParkingLot from "../core/usecases/GetParkingLot";
import ParkingLotRepositorySQL from "../infra/repositories/ParkingLotRepositorySQL";

class ParkingLotController {
    static async getParkingLot(params: any, body: any) {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
        const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
        const parkingLot = await getParkingLot.execute(params.code);
        return parkingLot;
    }
}

export default ParkingLotController;
