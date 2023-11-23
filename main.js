song_1 = "";
song_2 = "";

function setup()
{
    Canvas = createCanvas(600, 500);
    Canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Modelo P5 Inicializado");
}

function gotPoses(results)
{
    if(1)
    {

    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song_1 = loadSound("Past_Lives.mp3");
    song_2 = loadSound("Believer.mp3");
}

function r()
{

}