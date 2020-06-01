// Imports
import { create } from './create.js';

export const game = {
	canvas: document.getElementById('gameBoard'),
	context: document.getElementById('gameBoard').getContext("2d"),

	init: () => {
		create.map();
		create.controlPanel();
	}
}

window.onload = () => {
  game.init();
}