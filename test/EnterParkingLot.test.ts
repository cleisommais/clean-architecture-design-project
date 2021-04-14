import EnterParkingLot from "../src/core/usecases/EnterParkingLot";
import GetParkingLot from "../src/core/usecases/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repositories/ParkingLotRepositoryMemory";
import ParkingLotRepositorySQL from "../src/infra/repositories/ParkingLotRepositorySQL";

describe("Enter Parking lot use case with data base data", () => {
    test("Should enter parking lot", async () => {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
        const getParkingLot = new GetParkingLot(
            parkingLotRepositorySQL
        );
        const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
        if (parkingLotBeforeEnter != undefined) {
            expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
        }
        await enterParkingLot.execute("shopping", "MMM-0001", new Date());
        const parkingLotAfterEnter = await getParkingLot.execute("shopping");
        if (parkingLotAfterEnter != undefined) {
            expect(parkingLotAfterEnter.occupiedSpaces).toBeGreaterThan(0);
        }        
    });
    test("Should be closed the parking lot", async () => {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
        expect(async () => {
            await enterParkingLot.execute(
                "shopping",
                "MMM-0001",
                new Date("2021-14-04T23:30:00")
            );
        }).rejects.toThrow();
    });
    test("Should be full the parking lot", async () => {
        const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
        expect(async () => {
            await enterParkingLot.execute("shopping", "MMM-0001", new Date());
            await enterParkingLot.execute("shopping", "MMM-0002", new Date());
            await enterParkingLot.execute("shopping", "MMM-0003", new Date());
            await enterParkingLot.execute("shopping", "MMM-0004", new Date());
            await enterParkingLot.execute("shopping", "MMM-0005", new Date());
        }).rejects.toThrow();
    });    
});

describe("Enter Parking lot use case with in memory data", () => {
    test("Should enter parking lot", async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        const getParkingLot = new GetParkingLot(
            parkingLotRepositoryMemory
        );
        const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
        if (parkingLotBeforeEnter != undefined) {
            expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
        }
        await enterParkingLot.execute("shopping", "MMM-0001", new Date());
        const parkingLotAfterEnter = await getParkingLot.execute("shopping");
        if (parkingLotAfterEnter != undefined) {
            expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
        }
    });
    test("Should be closed the parking lot", async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        expect(async () => {
            await enterParkingLot.execute(
                "shopping",
                "MMM-0001",
                new Date("2021-14-04T23:30:00")
            );
        }).rejects.toThrow();
    });
    test("Should be full the parking lot", async () => {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
        const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
        expect(async () => {
            await enterParkingLot.execute("shopping", "MMM-0001", new Date());
            await enterParkingLot.execute("shopping", "MMM-0002", new Date());
            await enterParkingLot.execute("shopping", "MMM-0003", new Date());
            await enterParkingLot.execute("shopping", "MMM-0004", new Date());
            await enterParkingLot.execute("shopping", "MMM-0005", new Date());
        }).rejects.toThrow();
    });
});
