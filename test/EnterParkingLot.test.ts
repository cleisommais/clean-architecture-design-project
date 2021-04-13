import EnterParkingLot from "../src/core/usecases/EnterParkingLot";
import GetParkingLotRepository from "../src/core/usecases/GetParkingLotRepository";
import ParkingLotRepositoryMemory from "../src/infra/repositories/ParkingLotRepositoryMemory";

describe("Enter Parking lot use case", () => {
    test("Should enter parking lot", async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        const getParkingLot = new GetParkingLotRepository(
            parkingLotRepositoryMemory
        );
        try {
            const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
            if(parkingLotBeforeEnter != undefined){
                expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
            }
            const parkingLlot = await enterParkingLot.execute(
                "shopping",
                "MMM-0001",
                new Date()
            );
            const parkingLotAfterEnter = await getParkingLot.execute("shopping");
            if(parkingLotAfterEnter != undefined){
                expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
            }            
        } catch (error) {
            
        }
    });
});
