function ElectricDevice(name, power) {
	this.power = power;
	this.name = name;
	this.isPlugged = false;
}


ElectricDevice.prototype.plugIn = function() {
	this.isPlugged = true;
	console.log(`${this.brand} ${this.name} of ${this.power} W has been plugged in!`);
}

ElectricDevice.prototype.unplug = function() {
	this.isPlugged = false;
	console.log(`${this.brand} ${this.name} of ${this.power} W has been unplugged!`);
}

function Lamp(name, brand, power, lumen, lampType) {
	this.name = name;
	this.brand = brand;
    this.power = power;
	this.lumen = lumen;
	this.lampType = lampType;
}

Lamp.prototype = new ElectricDevice();

function VacuumCleaner(name, brand, power, dB) {
	this.name = name;
	this.brand = brand;
    this.power = power;
	this.dB = dB;
}


VacuumCleaner.prototype = new ElectricDevice();

function Laptop(name, brand, power, screen_size) {
	this.name = name
	this.brand = brand
	this.power = power
	this.screen_size = screen_size
}

Laptop.prototype = new ElectricDevice();

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