export const helpers = {
  /*
    Switch between game modes
    editButton: document.getElementById('editButton'),
    editFlag: true,
    runButton: document.getElementById('runButton'),
    runFlag: false,

    editMode: (editFlag, runFlag) => {
      helpers.editButton.onclick = () => {
        helpers.editFlag = true;
        helpers.runFlag = false;
      }
    },

    runMode: (editFlag, runFlag) => {
      helpers.runButton.onclick = () => {
        helpers.runFlag = true;
        helpers.editFlag = false;
      }
    },
  */

  // Number of rows and columns
  NUMBER_OF_ROWS: 10,
  NUMBER_OF_COLUMNS: 10,

  // Random color generator
  randomColor: () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      if(color === '#FF' || color === '#262626'){ helpers.randomColor(); }
      else { return color; }
  }
}