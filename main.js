peter_pan_song = "";
harry_potter_theme_song = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload(){
    harry_potter_theme_song = loadSound("music.mp3");
	peter_pan_song = loadSound("music2.mp3")
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	
	posenet = ml5.posenet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
	console.log('PoseNet is Initialized');
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	Peter_Pan_Song = peter_pan_song.isPlaying();
	console.log(Peter_Pan_Song);

	if(scoreLeftWrist > 0.2){
		circle(leftWristX , leftWristY , 20);
		harry_potter_theme_song.stop();
		if(Peter_Pan_Song == false){
			peter_pan_song.play();
		}
		else{
			document.getElementById("song_name").innerHTML = "Song Name : Peter Pan Song";
		}
	}
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);

		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
	}
}

