// Imports
import { game } from './game.js'
import { coordinate } from './components.js';
import { helpers } from './helpers.js'; 
import { mechanics } from './mechanics.js';

export const create = {
	// Create the game matrix
	matrix: () => {
		let m = [];
		for(let i = 0; i < helpers.NUMBER_OF_ROWS; i++) {
			m[i] = [];
			for(let j = 0; j < helpers.NUMBER_OF_COLUMNS; j++){
				m[i][j] = null;
			}
		}
		return m;
	},

	// Create a map coordinate
	mapCoordinate: (context, positionX, positionY, color) => {
		context.beginPath();
		context.beginPath();
		context.arc(positionX, positionY, 16, 0, Math.PI * 2);
		context.fillStyle = color;
		context.fill();
		context.closePath();
	},

	// Create the game map
	map: () => {
		let map = create.matrix();
		let positionY = -100;
		for(let i = 0; i < map.length; i++){
			let positionX = 300;
			positionY += 200;
			for(let j = 0; j < map[i].length; j++){
				let c  = game.context;
				const color = '#FFF';
				create.mapCoordinate(c, positionX, positionY, color);
				map[i][j] = new coordinate(positionX, positionY, 1, color);
				positionX += 200;
			}
		}
		return map; 
	},

	// Create the game control panel
	controlPanel: (map) => {
		let buttons = create.matrix();
		const controlPanel = document.getElementById('controlPanel');
		let counter = 1;
		for(let i = 0; i < buttons.length; i++){
			for(let j = 0; j < buttons[i].length; j++){
				const b = document.createElement('button');
				b.className = 'controlButton';
				b.setAttribute('id', counter.toString().concat('controlButton'));
				b.textContent = 'x';
				mechanics.connectControlPanelToMap(b);
				counter++;
				controlPanel.appendChild(b);
			}
		}
		return controlPanel;
	}
}