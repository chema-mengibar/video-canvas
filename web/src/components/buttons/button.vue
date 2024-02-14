
<script>

import IconArrowBoth from "../icons/icon-arrow-both.vue";
import IconCircle from "../icons/icon-circle.vue";
import IconClose from "../icons/icon-close.vue";
import IconDirectionRight from "../icons/icon-direction-right.vue";
import IconEye from "../icons/icon-eye.vue";
import IconMore from "../icons/icon-more.vue";
import IconMove from "../icons/icon-move.vue";
import IconPencil from "../icons/icon-pencil.vue";
import IconPics from "../icons/icon-pics.vue";
import IconPolygon from "../icons/icon-polygon.vue";
import IconRightDouble from "../icons/icon-right-double.vue";
import IconRight from "../icons/icon-right.vue";
import IconLeft from "../icons/icon-left.vue";
import IconLeftDouble from "../icons/icon-left-double.vue";
import IconSquare from "../icons/icon-square.vue";
import IconStopBottom from "../icons/icon-stop-bottom.vue";
import IconStopLeft from "../icons/icon-stop-left.vue";
import IconStopRight from "../icons/icon-stop-right.vue";
import IconText from "../icons/icon-text.vue";
import IconTriangle from "../icons/icon-triangle.vue";


  export default {
    inject: ['$services'],
    name: 'Button',
    props: {
      labelKey: { type: String, default: ''},
      label: { type: String, default: ''},
      /**
       * - arrowBoth
       * - circle
       * - close
       * - dirRight
       * - eye
       * - more
       * - move
       * - pencil
       * - pics
       * - polygon
       * - rightDouble
       * - right
       * - square
       * - stopBottom
       * - stopLeft
       * - stopRight
       * - text
       * - triangle
       */
      icon: { type: String, default: ''},
      cta: { type: Function },
    },
      data: ()=>( {
  }),
   created(){
    this.t = this.$services.localeService.t();
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
    IconLeft,
    IconLeftDouble
 },
  }
</script>

<style lang="scss">

  .button{
    display:flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:30px;
    border-radius: 4px;
    border: 1px solid var(--color-deco-base);
    background-color:var(---color-base);
    color: var(--text-color);
    font-family: var(--font-copy);
    font-size: 12px;



    &.withText{
      width:auto;
      padding:0 7px;
    }

    &:hover{
      border-color: var(--primary-color-rgb);
      color: var(--primary-color-rgb);
    }
    
    @media (min-width: 780px) {
      //
    }
  }


</style>

<template>
  <button class="button" :class="{'withText': !icon}" alt="main call action"  @click="cta()">
    <template v-if="icon">
      <IconArrowBoth v-if="icon === 'arrowBoth'" />
      <IconCircle v-if="icon === 'circle'" />
      <IconClose v-if="icon === 'close'" />
      <IconDirectionRight v-if="icon === 'dirRight'" />
      <IconEye v-if="icon === 'eye'" />
      <IconMore v-if="icon === 'more'" />
      <IconMove v-if="icon === 'move'" />
      <IconPencil v-if="icon === 'pencil'" />
      <IconPics v-if="icon === 'pics'" />
      <IconPolygon v-if="icon === 'polygon'" />
      <IconRightDouble v-if="icon === 'rightDouble'" />
      <IconRight v-if="icon === 'right'" />
      <IconSquare v-if="icon === 'square'" />
      <IconStopBottom v-if="icon === 'stopBottom'" />
      <IconStopLeft v-if="icon === 'stopLeft'" />
      <IconStopRight v-if="icon === 'stopRight'" />
      <IconText v-if="icon === 'text'" />
      <IconTriangle v-if="icon === 'triangle'" />
      <IconLeft v-if="icon === 'left'" />
      <IconLeftDouble v-if="icon === 'leftDouble'" />
    </template>
    <template v-else>
      <template v-if="label">
        {{label}}
      </template>
      <template v-else>
        {{t(labelKey)}}
      </template>
    </template>
  </button>
</template>