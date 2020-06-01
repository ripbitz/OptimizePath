// Imports
import { game } from './game.js'
import { coordinate } from './components.js';
import { helpers } from './helpers.js'; 

export const create = {
    matrix: () => {
			let m = [];
			for(let i = 0; i < helpers.NUMBER_OF_ROWS; i++) {
				m[i] = [];
				for(let j = 0; j < helpers.NUMBER_OF_COLUMNS; j++){
					m[i][j] = new coordinate();
				}
			}
			return m;
		},

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
					c.fillStyle = '#f5f2d0';
					c.fill();
					c.closePath();
					map[i][j].x = positionX,
					map[i][j].y = positionY,
					map[i][j].energy = 1;
					positionX += 200;
				}
			}
			return map; 
		},
}