class Room {

	constructor(hotelReference) {
		this.occupant = null; //a customer
		this.hotel = hotelReference;
	}
	addOccupant( customer ) {
		this.occupant = customer;
	}
	checkIfOccupied() {
		if(!this.hotel.rooms.length) {
			return false;
		} else {
			return true;
		}
	}
	removeOccupant() {

	}
	getRoomService(food) {
}