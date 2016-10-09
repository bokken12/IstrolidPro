change_colors = true;
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
recurse_colors();