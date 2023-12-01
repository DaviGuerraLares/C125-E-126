var song = ""
function preload() {
    song = loadSound("music.mp3")
}
scoreRight = 0
scoreLeft = 0
RightWristx = 0
RightWristy = 0
LeftWristx = 0
LeftWristy = 0
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("O poseNet foi inicializado")
}
function gotPoses(results) {
    if (results.length > 0) {
        scoreRight = results[0].pose.keypoints[10].score
        scoreLeft = results[0].pose.keypoint[9].score
        RightWristx = results[0].pose.rightWrist.x
        LeftWristx = results[0].pose.leftWrist.x
        RightWristy = results[0].pose.rightWrist.y
        LeftWristy = results[0].pose.leftWrist.y
    }
}
function draw(){
    image(video, 0, 0, 500, 500)
}