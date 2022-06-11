function preload() {}

function setup() {
    canvas = createCanvas(480, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}