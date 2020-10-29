// Imports
import { create } from './create.js';
//import { helpers } from './helpers.js';
import { mechanics } from './mechanics.js'

export const game = {
	canvas: document.getElementById('gameBoard'),
	context: document.getElementById('gameBoard').getContext("2d"),

	init: () => {
		const MAP = create.map();
		const CONTROL_PANEL = create.controlPanel();
		/*
			helpers.editMode();
			helpers.runMode();
			mechanics.makePath();
		*/
		// TEST CASE
		mechanics.connectControlPanelToMap(document.getElementById('1controlButton'), MAP[0][0]);
	}
}

window.onload = () => {
  game.init();
}