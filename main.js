difference =0;
rightWristX = 0;
leftWristX =0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(410, 410);
    canvas.position(610,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
     console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#F0FFFF');
    textSize(difference);
    fill ("yellow");
    text("Hi", 50 , 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

