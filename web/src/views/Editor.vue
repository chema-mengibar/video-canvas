<script>
import IconArrowBoth from "../components/icons/icon-arrow-both.vue";
import IconCircle from "../components/icons/icon-circle.vue";
import IconClose from "../components/icons/icon-close.vue";
import IconDirectionRight from "../components/icons/icon-direction-right.vue";
import IconEye from "../components/icons/icon-eye.vue";
import IconMore from "../components/icons/icon-more.vue";
import IconMove from "../components/icons/icon-move.vue";
import IconPencil from "../components/icons/icon-pencil.vue";
import IconPics from "../components/icons/icon-pics.vue";
import IconPolygon from "../components/icons/icon-polygon.vue";
import IconRightDouble from "../components/icons/icon-right-double.vue";
import IconRight from "../components/icons/icon-right.vue";
import IconSquare from "../components/icons/icon-square.vue";
import IconStopBottom from "../components/icons/icon-stop-bottom.vue";
import IconStopLeft from "../components/icons/icon-stop-left.vue";
import IconStopRight from "../components/icons/icon-stop-right.vue";
import IconText from "../components/icons/icon-text.vue";
import IconTriangle from "../components/icons/icon-triangle.vue";
import Button from "../components/buttons/button.vue";

export default {
  name: "Editor",
  inject: ["$services"],
  data: () => ({
    t: () => {},
    lastName: "",
    tabs:['Items', 'Markers'],
    tab_active:'Items'
  }),
  methods: {
    navigate: function (to) {
      this.show = false;
      setTimeout(() => {
        this.$router.push(to);
      }, 1000);
    },
  },
  created() {
    this.t = this.$services.localeService.t();
  },
  mounted() {

    const targetS = 700;
    const videoSize = {
        w: 700,
        h: 393
    }

    const canvas = document.getElementById("canV");
    const ctx = canvas.getContext("2d");


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

  

    const video = document.createElement("video");
    video.preload = 'auto';
    video.src = "./videos/test_cwVxRjOC.mp4";

    video.addEventListener('loadeddata', function() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      update()
    });


  },
  components: { 
    
    IconArrowBoth,
    IconCircle,
    IconClose,
    IconDirectionRight,
    IconEye,
    IconMore,
    IconMove,
    IconPencil,
    IconPics,
    IconPolygon,
    IconRightDouble,
    IconRight,
    IconSquare,
    IconStopBottom,
    IconStopLeft,
    IconStopRight,
    IconText,
    IconTriangle,
    Button
 },
};
</script>

<style  lang="scss">
@import "../styles/media";

.main{
  display:flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}

.sidebar{
  display:flex;
  flex-direction: column;
  width: 400px;
  border-left: 1px solid var(--color-deco-base);
  height: 100vh;
}

.area {
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);
  padding: 12px ;
  width:100%;
  min-height:54px;
  overflow-y:auto;
  

  &.video{
    height:465px
  }

  &.main-top{
    //
  }

  &.sidebar-top{
    //
  }

  &.sidebar-content{

  }

  &.area-expand{
    flex: 1;
  }

  
}

.area-buttons-wrapper{
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}

canvas{
  width: 100%;
}

.buttons-separator{
  width: 2px;
  height: 30px;
  margin:0 7px;
  background-color: var(--color-deco-m-1);
}

.timer{
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}

.timeline-wrapper{
  
}

.tabs{
  display: flex;
  font-size:12px;

  &.Items{
   border-bottom: 1px solid var(--primary-color-rgb);
  }

  &.Markers{
    border-bottom: 1px solid var(--secondary-color-rgb);
  }
  
  .tab{
    padding: 3px 14px 7px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor:pointer;
    
    &.Items{
      &.active{
        color: var(--primary-text-color-rgb);
        font-weight: var(--bold);
        background-color: var(--primary-color-rgb);
      }
    }

    &.Markers{
      &.active{
        color: var(--primary-text-color-rgb);
        font-weight: var(--bold);
        background-color: var(--secondary-color-rgb);
      }
    }
    
     
  }
}

.tab-content-container{
  padding: 14px 7px;
}


</style>

<template>


  <div class="app-layout-body">

    <div class="main"> 
      <div class="area area-buttons-wrapper main-top ">
        <Button :cta="()=>{}"  icon="" labelKey="action.load" />
        <Button :cta="()=>{}"  icon="" labelKey="action.save" />
        <Button :cta="()=>{}"  icon="" labelKey="action.export" />
      </div>
      <div class="area scroll video">
        <canvas id="canV" ></canvas>
      </div>
      <div class="area scroll area-expand">
        <div class="area-buttons-wrapper">
          <Button :cta="()=>{}"  icon="arrowBoth" />
          <div class="buttons-separator"></div>
          <div class="timer">00:00:00:000</div>
          <Button :cta="()=>{}"  icon="dirRight" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{}"  icon="triangle" />
          <Button :cta="()=>{}"  icon="square" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{}"  icon="leftDouble" />
          <Button :cta="()=>{}"  icon="left" />
          <Button :cta="()=>{}"  icon="right" />
          <Button :cta="()=>{}"  icon="rightDouble" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{}"  icon="stopLeft" />
          <Button :cta="()=>{}"  icon="stopRight" />
        </div>
        <div class="timeline-wrapper">

        </div>
      </div>
    </div>
    <div class="sidebar"> 
      <div class="area  area-buttons-wrapper sidebar-top">
        <Button :cta="()=>{}"  icon="polygon" />
        <Button :cta="()=>{}"  icon="square" />
        <Button :cta="()=>{}"  icon="circle" />
        <Button :cta="()=>{}"  label="line" />
        <Button :cta="()=>{}"  icon="text" />
        <Button :cta="()=>{}"  label="curve" />
        <Button :cta="()=>{}"  label="pencil" />
        <Button :cta="()=>{}"  label="Crono" />
        <Button :cta="()=>{}"  label="Image" />
      </div>
      <div class="area scroll area-expand sidebar-content">
         
          <div class="tabs" :class="{[tab_active]: true}">
            <div class="tab"  v-for="tabName in tabs" :class="{'active': tabName=== tab_active, [tabName]: true}"> 
              {{tabName}}
            </div>
          </div>
        <div class="tab-content-container">
          tab
        </div>
      </div>
    </div>

  </div>
</template>