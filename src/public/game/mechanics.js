import { game } from './game.js';
import { coordinate } from './components.js';
import { helpers } from './helpers.js';
import { create } from './create.js';

export const mechanics = {
  // Connecting the control panel to the map
  connectControlPanelToMap: (button, mapCoordinate) => {
    button.onclick = () => {
      //const color = currPath.color;
      const color = helpers.randomColor();
      button.style.backgroundColor = color;
      create.mapCoordinate(game.context, mapCoordinate.x, mapCoordinate.y, color);
      mapCoordinate = new coordinate(mapCoordinate.x, mapCoordinate.y, mapCoordinate.energy, color);
    }
  },
  /*
    makePath: () => {
      if(helpers.editFlag){
        console.log('edit');
      }
      if(helpers.runFlag){
        console.log('run');
      }
      let coordinates = [];
      const path = new path(coordinates, helpers.randomColor(), coordinates.length, 2, 10);
    }
  */
}