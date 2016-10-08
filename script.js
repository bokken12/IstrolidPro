if(window == top){
  window.addEventListener('keyup', doKeyPress, false);
}
change_colors = false;
color_key = 67; //c
toggle_key = 84; //t
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
function doKeyPress(e) {
  if(e.shiftKey){
    if(e.keyCode == color_key){
    	colorChange();
    } else if(e.keyCode == toggle_key){
    	change_colors = !change_colors;
    	if(change_colors){
    		recurse_colors();
    	}
    }
  }
}