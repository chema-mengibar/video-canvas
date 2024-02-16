import { reactive } from 'vue'
import VideoMock from './mocks/video-mock-1'

const defaultConfig = {
    fps: 60,
}


export default class ToolService {

    domain = '//story.motuo.info'

    canvas = null
    ctx = null
    video = null
    myReq = null
    revRef = null

    constructor() {
        this._data = reactive({
            state: 'loaded', // loading, loaded
            currentTime: 0,
            config: {
                ...defaultConfig,
            },
            project: VideoMock,
        })

        this.update = this.update.bind(this)
    }


    init( domElem ){
        const _ = this;
        _.canvas = domElem;
        _.ctx = _.canvas.getContext("2d");

        const targetS = 700;
        const videoSize = {
            w: 700,
            h: 393
        }
        
        _.video = document.createElement("video");
        _.video.preload = true;
        _.video.src =  _.project.source;

        // _.video.crossOrigin = 'anonymous';
        // _.video.loop = false;
        // _.video.muted = true;
        // _.video.playsInline = false;


        _.video.setAttribute("controls", "controls");

        _.video.addEventListener('loadeddata', ()=> {
            _.canvas.width = _.video.videoWidth;
            _.canvas.height = _.video.videoHeight;
            _.update()
        });



       
    }

    get fps(){
        return this._data.config.fps;
    }

    get currentTime(){
        
        return this._data.currentTime;
    }

    set currentTime(t){
        this._data.currentTime = t;
    }

    get video(){
        return this.video;
    }

    get project() {
       return  this._data.project;
    }

    raw(obj) {
        return JSON.parse(JSON.stringify(obj))
    }




    // --------------------------------

    draw(){
        const _ = this;
        let region = new Path2D();
        region.id = 'uno'
        region.moveTo(10, 10);
        region.lineTo(10, 100);
        region.lineTo(100, 100);
        region.closePath();

        _.ctx.fillStyle = "#ff000088";
        _.ctx.strokeStyle = "#000000";
        _.ctx.fill(region);
        _.ctx.stroke(region);
    }

    
    update(){

        this.currentTime = this.video.currentTime;
        this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        //this.draw();

        if( this.video.currentTime > this.video.duration){
   
            cancelAnimationFrame(this.myReq);
        }else{
            setTimeout(() => {
                this.myReq =  requestAnimationFrame(this.update);
            }, 1000 / this.fps);
        }
       
       
    }


    // -------------------------------- CONTROLS

    play(){

        this.video.play();
        clearInterval(this.revRef);
        this.revRef = null;
        // this.update()
    }

    stop(){
        this.video.pause();
        cancelAnimationFrame(this.myReq);
        clearInterval(this.revRef)
        this.revRef = null;
    }

    go(){
        this.currentTime = 4.4;
        this.video.currentTime = 4.4;
        this.update()
    }


    reverse(){
        // this.currentTime = 4.4;
        // this.video.currentTime = 4.4;
        //this.video.currentTime = this.video.duration;
        console.log(this.revRef)
        if(this.revRef){
            return
        }


        this.revRef = setInterval(()=>{
          

            const t = this.video.currentTime - 0.1;
            if(t <= 0 ){
                clearInterval(this.revRef)
                this.revRef = null;
                this.video.currentTime = 0;
            }else{
                this.video.currentTime = t;
            }
            
            
            
        }, 100)
        this.update();
    }

    desp( delta ){
        const t = this.video.currentTime + parseFloat(delta);
  
        if(t > this.video.duration ){
            this.video.currentTime = this.video.duration;
        }else if(t <= 0 ){
            this.video.currentTime = 0;
        }else{
            this.video.currentTime = t;
        }
        this.update()
    }



    next1(){
        const t = this.video.currentTime + 0.1;
        if(t > this.video.duration ){
            this.video.currentTime = this.video.duration;
        }else{
            this.video.currentTime = t;
        }
        this.update()
    }

    next2(){
        const t = this.video.currentTime + 1;
        if(t > this.video.duration ){
            this.video.currentTime = this.video.duration;
        }else{
            this.video.currentTime = t;
        }
        this.update()
    }

    
    prev1(){
        const t = this.video.currentTime - 0.1;
        if(t <= 0 ){
            this.video.currentTime = 0;
        }else{
            this.video.currentTime = t;
        }
        this.update()
    }

    prev2(){
        const t = this.video.currentTime - 1;
        if(t <= 0 ){
            this.video.currentTime = 0;
        }else{
            this.video.currentTime = t;
        }
        this.update()
    }

    toStart(){
        this.video.currentTime = 0;
        this.update()
    }

    toEnd(){
        this.video.currentTime = this.video.duration;
        this.update()
    }
  
  
  
   
}