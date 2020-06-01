export function coordinate(x, y, energy){
	this.x = x;
	this.y = y;
	this.energy = energy;
}

export function path(coordinates, color, numOfWorkers, speed){
	this.coordinates = coordinates;
	this.color = color;
	this.numOfWorkers = numOfWorkers;
	this.speed = speed;
}

export function worker(path){
	this.path = path;
}

export function destination(energy, level){
	this.energy = energy;
	this.level = level;
	this.coordinate = coordinate;
}