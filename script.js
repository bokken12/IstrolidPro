if(window == top){
  window.addEventListener('keyup', doKeyPress, false);
}
change_colors = false;
color_key = 67; //c
toggle_key = 84; //t
ai_key = 65; //a
fleet_up = 38; //up arrow
fleet_down = 40; //down arrow
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
function colorChange(){
	r = randomInt(0, 256);
  g = randomInt(0, 256);
  b = randomInt(0, 256);
  commander.color = [r, g, b, 255];
  account.simpleCommander();
  account.color = [r, g, b, 255];
  account.rootSave();
  network.sendPlayer();
}
function recurse_colors(){
	if(change_colors){
		colorChange();
		setTimeout(recurse_colors, 1000);
	}
}
function fleetLength(){
  nrows = 6;
  ref = commander.fleet;
  for (k in ref) {
    v = ref[k];
    if (v) {
      ref1 = k.split(","), r = ref1[0], c = ref1[1];
      r = parseInt(r);
      if (r + 4 > nrows) {
        nrows = r + 4;
      }
    }
  }
  return nrows;
}
function doKeyPress(e) {
  if(e.shiftKey){
    if(e.keyCode == color_key){
    	colorChange();
    } else if(e.keyCode == toggle_key){
    	change_colors = !change_colors;
    	if(change_colors){
    		recurse_colors();
    	}
    } else if(e.keyCode == ai_key){
      if (localStorage.useAi !== "true") {
        localStorage.useAi = "true";
      } else {
        localStorage.useAi = "false";
        designMode.aiEdit = false;
      }
    } else if(e.keyCode == fleet_up){
      if((commander.fleet.selection || 0) <= 0){
        commander.fleet.selection = commander.fleet.length;
      }
      commander.fleet.selection--;
      account.save();
    } else if(e.keyCode == fleet_down){
      if(!commander.fleet.selection || commander.fleet.selection >= fleetLength() - 1){
        commander.fleet.selection = 0;
      }
      commander.fleet.selection++;
      account.save();
    }
  }
}