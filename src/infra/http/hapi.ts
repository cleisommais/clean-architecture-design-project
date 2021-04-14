const Hapi = require('@hapi/hapi');
import HapiAdapter from "../../adapters/HapiAdapter";
import ParkingLotController from "../../controllers/ParkingLotController";

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
	server.route({
		method: "GET",
		path: "/parkingLots/{code}",
		handler: HapiAdapter.create(ParkingLotController.getParkingLot),
	});
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();


