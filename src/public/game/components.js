export function coordinate(x, y, energy, color){
	this.x = x;
	this.y = y;
	this.energy = energy;
	this.color = color;
}

export function path(coordinates, color, numOfWorkers, speed, size){
	this.coordinates = coordinates;
	this.color = color;
	this.numOfWorkers = numOfWorkers;
	this.speed = speed;
	this.size = size;
}

export function worker(path){
	this.path = path;
}

export function destination(energy, level){
	this.energy = energy;
	this.level = level;
}