function preload() {


}

function setup() {
    canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotResult() {

}