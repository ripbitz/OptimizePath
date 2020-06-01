// Imports
import { game } from './game.js'
import { coordinate } from './components.js';
import { helpers } from './helpers.js'; 

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

	// Create the game map
	map: () => {
		let map = create.matrix();
		let positionY = -100;
		for(let i = 0; i < map.length; i++){
			let positionX = 300;
			positionY += 200;
			for(let j = 0; j < map[i].length; j++){
				let c  = game.context;
				c.beginPath();
				game.context.arc(positionX, positionY, 16, 0, Math.PI * 2);
				c.fillStyle = '#FFF';
				c.fill();
				c.closePath();
				map[i][j] = new coordinate(positionX, positionY, 1);
				positionX += 200;
			}
		}
		return map; 
	},

	// Create the game control panel
	controlPanel: () => {
		let buttons = create.matrix();
		const controlPanel = document.getElementById('controlPanel');
		let counter = 1;
		for(let i = 0; i < buttons.length; i++){
			for(let j = 0; j < buttons[i].length; j++){
				const b = document.createElement('button');
				b.className = 'controlButton';
				b.setAttribute('id', counter.toString().concat('controlButton'));
				b.textContent = j+1;
				counter++;
				controlPanel.appendChild(b);
			}
		}
		return controlPanel;
	}
}