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
    tab_active:'Items',
    desp: 0,
    despInterval: 0
  }),
  methods: {
    mousedown: function(){
      this.despInterval = setInterval( ()=>{
        this.$services.toolService.desp(this.desp);
      }, 1000)
    },  
    mouseup: function(){
      clearInterval(this.despInterval);
      setTimeout(()=>{
        this.desp = 0;
      })
    },  
    navigate: function (to) {
      this.show = false;
      setTimeout(() => {
        this.$router.push(to);
      }, 60);
    },
    proCent: function(){
      console.log('---')
      if(this.$services.toolService.video){
        const pc =  (this.$services.toolService.currentTime * 100) / this.$services.toolService.video.duration;
        
        return pc
      }
      return 0 
    }
  },
  created() {
    this.t = this.$services.localeService.t();
  },
  mounted() {
   
    const domCanvas = document.getElementById("canV");
    this.$services.toolService.init(domCanvas);


  },
  // computed: {
  //   // procent: function () {
  
  //   //   if(this.$services.toolService.video){
  //   //     const pc =  (this.$services.toolService.currentTime * 100) / this.$services.toolService.video.duration;
  //   //     console.log(pc)
  //   //     return pc
  //   //   }
  //   //   return 0 
  //   // }
  // },
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
  min-width: 400px;
  border-left: 1px solid var(--color-deco-base);
  height: 100vh;
  width:35%;
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
  margin-bottom: 12px;
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
    user-select: none; 
    
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


.timeline{
  width:100%;
  background-color: var(--color-dark);
  height: 10px;

  .currentTime{
    width: 0;
    background-color: var(--primary-color-rgb);
    height: 100%;
  }
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


        <input  @mousedown="mousedown" @mouseup="mouseup" type="range" v-model="desp" step="0.1" min="-5" max="5" />
          {{ desp }}
          <Button :cta="()=>{}"  icon="arrowBoth" />
          <div class="buttons-separator"></div>
          <div class="timer">00:00:00:000</div>
          <Button :cta="()=>{ $services.toolService.go(); }"  icon="dirRight" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{ $services.toolService.play(); }"  icon="triangle" />
          <Button :cta="()=>{ $services.toolService.stop(); }"   icon="square" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{ $services.toolService.prev2(); }"   icon="leftDouble" />
          <Button :cta="()=>{ $services.toolService.prev1(); }"  icon="left" />
          <Button :cta="()=>{ $services.toolService.next1(); }"   icon="right" />
          <Button :cta="()=>{ $services.toolService.next2(); }"   icon="rightDouble" />
          <div class="buttons-separator"></div>
          <Button :cta="()=>{ $services.toolService.toStart(); }"   icon="stopLeft"  />
          <Button :cta="()=>{ $services.toolService.toEnd(); }"   icon="stopRight" />
        </div>
        <div class="timeline-wrapper">
          <div>{{ $services.toolService.currentTime }}</div>
          <div  class="timeline">
            <div class="currentTime" v-if="$services.toolService.currentTime" :style="{width: `${proCent()}%`}"></div>
          </div>
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
            <div class="tab" 
             :key="'tab_' + tabName"
             v-on:click="()=>{ tab_active = tabName }"
             v-for="tabName in tabs" :class="{'active': tabName=== tab_active, [tabName]: true}"> 
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