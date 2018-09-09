let lx = 30;
let ly = 20;

let circleX = 0;
let circleY = 0;

function setup() {
	createCanvas(500, 500);

	circleX = 500 >> 1;
	circleY = 500 >> 1;
}

function draw() {

	noStroke();
	fill(180, 10, 200, 10);
	ellipse(circleX, circleY, random(40, 50));

	circleX += random(-15, 15);
	circleY += random(-15, 15);
}
