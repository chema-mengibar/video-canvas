import './style.css'
const targetS = 700;
const videoSize = {
    w: 700,
    h: 393
}

const w = (videoSize.h * targetS) / videoSize.w


const canvas = document.getElementById("canV");
const ctx = canvas.getContext("2d");
let mediaRecorder;
const video = document.createElement("video");
video.preload = 'auto';
video.src = "istockphoto-1344438584-640_adpp_is.mp4";

video.addEventListener('loadeddata', function() {
    canvas.width = videoSize.w; //video.videoWidth;
    canvas.height = videoSize.h; // video.videoHeight;

    update()
});


document.getElementById("play").onclick = function() {
    video.play();
    // cT += 1;
    // video.currentTime = cT;
    update()
};

document.getElementById("stop").onclick = function() {
    console.log('STOP BUTTON')
    video.pause();
    // cT += 1;
    // video.currentTime = cT;
    update()
};



document.getElementById("record").onclick = function() {
    console.log('record BUTTON')
    video.play();
    record(canvas, 12000)
};


document.getElementById("record-stop").onclick = function() {
    mediaRecorder.stop()
};

// video.addEventListener("play", () => {
//
// });


function record(canvas, time) {
    var recordedChunks = [];
    
    var stream = canvas.captureStream(25 /*fps*/);
     mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm; codecs=vp9"
    });

    mediaRecorder.start();
  
    // mediaRecorder.start(time || 4000);   // ondataavailable will fire in interval of `time || 4000 ms`
    //
    mediaRecorder.ondataavailable = function (event) {
        recordedChunks.push(event.data);
        // after stop `dataavilable` event run one more time
        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

    }

  

    mediaRecorder.onstop = function (event) {
        var blob = new Blob(recordedChunks, {type: "video/webm" });
        var url = URL.createObjectURL(blob);

        var link = document.createElement("a"); // Or maybe get it from the current document
        link.href = url;
        link.download = "aDefaultFileName.mp4";
        link.innerHTML = "Click here to download the file";
        //document.body.appendChild(link); // Or append it whereever you want
        link.click();

    }

   
   
}

function draw(){
    
    let region = new Path2D();
    region.id = 'uno'
    region.moveTo(10, 10);
    region.lineTo(10, 100);
    region.lineTo(100, 100);
    region.closePath();

    ctx.fillStyle = "#ff000088";
    ctx.strokeStyle = "#000000";
    ctx.fill(region);
    ctx.stroke(region);
}

function update(){
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // console.log(video.currentTime)
        draw();
        requestAnimationFrame(update);

}

