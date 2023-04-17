leftWristX=0
rightWristX=0
differece=0



function preload() {
    
}
function setup() {
canvas = createCanvas(600,300)
canvas.position(500,250)
video = createCapture(VIDEO)
video.size(400,400)

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes)

function modelLoaded(){
console.log('Model is Loaded')
}

function gotposes(results){
    if(results.length>0){
        console.log(results)

        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
        differece= floor(leftWristX-rightWristX)
    }
}

}

function draw(){
background('#808080')
textSize(differece)
fill('#FFA500')
text('Shaurya',50,50)
document.getElementById('font_size').innerHTML=  'Font size is  '+differece;
}

