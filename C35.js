class ElectricDevice {
	constructor (name, power) {
		this.power = power;
		this.name = name;
		this.isPlugged = false;
	}
	plugIn() {
		this.isPlugged = true;
		console.log(`${this.brand} ${this.name} of ${this.power} W has been plugged in!`);
	}

	unplug() {
		this.isPlugged = false;
		console.log(`${this.brand} ${this.name} of ${this.power} W has been unplugged!`);
	}
}


class Lamp extends ElectricDevice {
	constructor (name, brand, power, lumen, lampType) {
		super(name, power);
		// super(power);
		// this.name = name;
		this.brand = brand;
		// this.power = power;
		this.lumen = lumen;
		this.lampType = lampType;
	}
	plugIn() {return super.plugIn()}
	unplug() {return super.unplug()}
}
// Lamp.prototype = new ElectricDevice();


class VacuumCleaner extends ElectricDevice {
	constructor(name, brand, power, dB) {
		super(name, power)
		// this.name = name;
		this.brand = brand;
		// this.power = power;
		this.dB = dB;
	}
	plugIn() {return super.plugIn()}
	unplug() {return super.unplug()}
}



// VacuumCleaner.prototype = new ElectricDevice();

class Laptop extends ElectricDevice {
	constructor(name, brand, power, screen_size) {
		super(name, power)
		// this.name = name
		this.brand = brand
		// this.power = power
		this.screen_size = screen_size
	}
	plugIn() {return super.plugIn()}
	unplug() {return super.unplug()}
}
// Laptop.prototype = new ElectricDevice();

const laptop = new Laptop('Alex_laptop', 'HP', 50, 16)


const lamp = new Lamp('floor lamp', 'Philips', 40, 60, 'fluorescent')

const hoover = new VacuumCleaner('vacuum cleaner', 'Hoover', 1500, 70)

laptop.plugIn()
lamp.plugIn()
hoover.plugIn()
lamp.unplug()
hoover.unplug()

console.log(lamp);
console.log(hoover);
console.log(laptop)
