class Hotel{
	constructor() {
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer( name ) {
		var newCustomer = new Customer(name);
		this.rooms[0].addOccupant(newCustomer);
	}
	checkOutCustomer() {

	}
	//make a room and add to rooms array
	addRoom(){
		var newRoom = new Room(this);
		this.rooms.push(newRoom);
	}
	//add staff to the hotel
	hireStaff(name) {
		var newStaff = new Staff(this);
		this.staff.push(newStaff);
	}
	getVacantRooms() {
		if(this.room.checkIfOccupied() === false) {
			
	}
	getKitchenService() {

	}

}
