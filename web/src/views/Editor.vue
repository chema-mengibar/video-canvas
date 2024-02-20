<script>
import { toRaw } from 'vue'
import IconArrowBoth from "../components/icons/icon-arrow-both.vue";
import IconCircle from "../components/icons/icon-circle.vue";
import IconImage from "../components/icons/icon-image.vue";
import IconDown from "../components/icons/icon-down.vue";
import IconUp from "../components/icons/icon-up.vue";
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
    tabs: ["Items", "Markers"],
    tab_active: "Items",
    desp: 2,
    despInterval: 0,
    range: [-10, -1, 0, 1, 10],
    itemsCollapsableOpened:{}
  }),
  methods: {
    mousedown: function () {
      this.despInterval = setInterval(() => {
        const delta = this.range[this.desp];
        this.$services.toolService.desp(delta);
      }, 1000);
    },
    mouseup: function () {
      clearInterval(this.despInterval);
      setTimeout(() => {
        this.desp = 2;
      });
    },
    navigate: function (to) {
      this.show = false;
      setTimeout(() => {
        this.$router.push(to);
      }, 60);
    },
    proCent: function () {
      if (this.$services.toolService.video) {
        const pc =
          (this.$services.toolService.currentTime * 100) /
          this.$services.toolService.video.duration;

        return pc;
      }
      return 0;
    },
    getTimeLineWidth(visibleObject) {
      const t =
        this.$services.toolService.video.duration -
        visibleObject.from -
        (this.$services.toolService.video.duration - visibleObject.to);
      if (this.$services.toolService.video) {
        const pc = (t * 100) / this.$services.toolService.video.duration;
        return pc;
      }
      return 0;
    },
    getTimeLinePosition(t) {
      if (this.$services.toolService.video) {
        const pc = (t * 100) / this.$services.toolService.video.duration;

        return pc;
      }
      return 10;
    },
  },
  created() {
    this.t = this.$services.localeService.t();
  },
  mounted() {
    const domCanvas = document.getElementById("canV");
    this.$services.toolService.init(domCanvas);


    this.$services.toolService.project.canvas.forEach( canvasItem =>{
      this.itemsCollapsableOpened[canvasItem.id] = false;
    })

    console.log(toRaw(this.itemsCollapsableOpened))
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
    IconImage,
    IconDown,
    IconUp,
    Button,
  },
};
</script>

<style  lang="scss">
@import "../styles/media";
@import "../components/editor/item.scss";

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  border-left: 1px solid var(--color-deco-base);
  height: 100vh;
  width: 35%;
}

.area {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 12px;
  width: 100%;
  min-height: 54px;
  overflow-y: auto;

  &.video {
    height: 465px;
  }

  &.main-top {
    //
  }

  &.sidebar-top {
    //
  }

  &.sidebar-content {
  }

  &.area-expand {
    flex: 1;
  }
}

.area-buttons-wrapper {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

canvas {
  width: 100%;
}

.buttons-separator {
  width: 2px;
  height: 30px;
  margin: 0 7px;
  background-color: var(--color-deco-m-1);
}

.timer {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}

.timeline-wrapper {
}

.tabs {
  display: flex;
  font-size: 12px;

  &.Items {
    border-bottom: 1px solid var(--primary-color-rgb);
  }

  &.Markers {
    border-bottom: 1px solid var(--secondary-color-rgb);
  }

  .tab {
    padding: 3px 14px 7px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    user-select: none;

    &.Items {
      &.active {
        color: var(--primary-text-color-rgb);
        font-weight: var(--bold);
        background-color: var(--primary-color-rgb);
      }
    }

    &.Markers {
      &.active {
        color: var(--primary-text-color-rgb);
        font-weight: var(--bold);
        background-color: var(--secondary-color-rgb);
      }
    }
  }
}

.tab-content-container {
  padding: 14px 7px;
}

.timeline {
  width: 100%;
  background-color: var(--color-dark);
  height: 10px;

  .currentTime {
    width: 0;
    background-color: var(--primary-color-rgb);
    height: 100%;
  }
}

.range-wrapper {
  width: 100px;
  display: flex;
  flex-direction: column;

  .range-labels {
    display: flex;

    .range-label {
      width: 20%;
      font-size: 8px;

      text-align: center;
    }
  }
}

.item-blocks {
  margin-top: 12px;
}

.item-block {
  margin-bottom: 10px;

  .item-block-header {
    background-color: var(--color-dark);
    padding: 3px;
  }

  .item-block-timeline {
    background-color: var(--color-M-1);
    height: 10px;
    position: relative;

    .item-block-timeline_currentTime {
      position: absolute;
      left: 20px;
      width: 20%;
      background-color: var(--primary-color-rgb);
      height: 100%;
    }
  }

  .item-block-node-block {
    padding: 7px 0;
    .item-block-node-label {
      font-size: 10px;
      padding-left: 12px;
    }
    .item-block-node-keyframes {
      background-color: var(--color-M-1);
      position: relative;
      width: 100%;
      height: 14px;

      .keyframe {
        position: absolute;
        width: 20px;
        margin-top: -5px;
        margin-left: -10px;
      }
    }
  }
}

// ---------------------------------
</style>

<template>
  <div class="app-layout-body">
    <div class="main">
      <div class="area area-buttons-wrapper main-top">
        <Button :cta="() => {}" icon="" labelKey="action.load" />
        <Button :cta="() => {}" icon="" labelKey="action.save" />
        <Button :cta="() => {}" icon="" labelKey="action.export" />
      </div>
      <div class="area scroll video">
        <canvas id="canV"></canvas>
      </div>
      <div class="area scroll area-expand">
        <div class="area-buttons-wrapper">
          <div class="range-wrapper">
            <div class="range-labels">
              <div
                class="range-label"
                :key="'range_' + parseInt(rangeVal)"
                v-for="rangeVal in range"
              >
                {{ rangeVal }}
              </div>
            </div>
            <div>
              <input
                @mousedown="mousedown"
                @mouseup="mouseup"
                type="range"
                v-model="desp"
                step="1"
                min="0"
                max="4"
              />
            </div>
          </div>
          <div class="buttons-separator"></div>
          <div class="timer">00:00:00:000</div>
          <Button
            :cta="
              () => {
                $services.toolService.go();
              }
            "
            icon="dirRight"
          />
          <div class="buttons-separator"></div>
          <Button
            :cta="
              () => {
                $services.toolService.reverse();
              }
            "
            icon="triangle"
          />
          <Button
            :cta="
              () => {
                $services.toolService.play();
              }
            "
            icon="triangle"
          />
          <Button
            :cta="
              () => {
                $services.toolService.stop();
              }
            "
            icon="square"
          />
          <div class="buttons-separator"></div>
          <Button
            :cta="
              () => {
                $services.toolService.prev2();
              }
            "
            icon="leftDouble"
          />
          <Button
            :cta="
              () => {
                $services.toolService.prev1();
              }
            "
            icon="left"
          />
          <Button
            :cta="
              () => {
                $services.toolService.next1();
              }
            "
            icon="right"
          />
          <Button
            :cta="
              () => {
                $services.toolService.next2();
              }
            "
            icon="rightDouble"
          />
          <div class="buttons-separator"></div>
          <Button
            :cta="
              () => {
                $services.toolService.toStart();
              }
            "
            icon="stopLeft"
          />
          <Button
            :cta="
              () => {
                $services.toolService.toEnd();
              }
            "
            icon="stopRight"
          />
        </div>
        <div class="timeline-wrapper">
          <div>{{ $services.toolService.currentTime }}</div>
          <div class="timeline">
            <div
              class="currentTime"
              v-if="$services.toolService.currentTime"
              :style="{ width: `${proCent()}%` }"
            ></div>
          </div>

          <div
            class="item-blocks"
            v-if="$services.toolService.video && $services.toolService.project"
          >
            <div
              class="item-block"
              :key="'item_' + canvasItem.name"
              v-for="canvasItem in $services.toolService.project.canvas"
            >
              <div class="item-block-header">{{ canvasItem.name }}</div>
              <div class="item-block-timeline">
                <div
                  :style="{
                    left: getTimeLinePosition(canvasItem.visible.from) + '%',
                    width: getTimeLineWidth(canvasItem.visible) + '%',
                  }"
                  class="item-block-timeline_currentTime"
                ></div>
              </div>

              <template v-if="canvasItem.type === 'polygon'"> </template>
              <div
                class="item-block-node-block"
                :key="'item_' + canvasItem.name + '_node_' + node.id"
                v-for="node in canvasItem.nodes"
              >
                <div class="item-block-node-label">{{ node.id }}</div>
                <div class="item-block-node-keyframes">
                  <div
                    class="keyframe"
                    :style="{
                      left: getTimeLinePosition(frame.time) + '%',
                    }"
                    :key="
                      'item_' +
                      canvasItem.name +
                      '_node_' +
                      node.id +
                      '_keyframe_' +
                      idx
                    "
                    v-for="(frame, idx) in node.frames"
                  >
                    <IconPics w="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="area area-buttons-wrapper sidebar-top">
        <Button :cta="() => {}" icon="polygon" />
        <Button :cta="() => {}" icon="square" />
        <Button :cta="() => {}" icon="circle" />
        <Button :cta="() => {}" label="line" />
        <Button :cta="() => {}" icon="text" />
        <Button :cta="() => {}" label="curve" />
        <Button :cta="() => {}" label="pencil" />
        <Button :cta="() => {}" label="Crono" />
        <Button :cta="() => {}" label="Image" />
      </div>
      <div class="area scroll area-expand sidebar-content">
        <div class="tabs" :class="{ [tab_active]: true }">
          <div
            class="tab"
            :key="'tab_' + tabName"
            v-on:click="
              () => {
                tab_active = tabName;
              }
            "
            v-for="tabName in tabs"
            :class="{ active: tabName === tab_active, [tabName]: true }"
          >
            {{ tabName }}
          </div>
        </div>

        <div v-if="tab_active === 'Items'" class="tab-content-container">
          <div
            :key="'item-edit_' + canvasItem.name"
            v-for="canvasItem in $services.toolService.project.canvas"
          >
            <div class="item-header">
              <div class="item-header_icon">
                <IconPolygon v-if="canvasItem.type === 'polygon'" />
                <IconImage v-if="canvasItem.type === 'image'" />
              </div>
              <div class="item-header_label">{{ canvasItem.name }}</div>
              <button class="item-header_close-button" v-bind:onclick="()=>{
                  

                  itemsCollapsableOpened[canvasItem.id] = !itemsCollapsableOpened[canvasItem.id]
              }">
                <IconDown v-if=" !itemsCollapsableOpened[canvasItem.id]" />
                <IconUp  v-if=" itemsCollapsableOpened[canvasItem.id]" />
              </button>
            </div>
            <div class="item-content" :class="{'closed': !itemsCollapsableOpened[canvasItem.id]}">
              <div class="item-toolbar">
                <Button :cta="() => {}" label="add node" />
                <Button :cta="() => {}" label="down" />
                <Button :cta="() => {}" label="up" />
                <Button :cta="() => {}" label="..." />
              </div>
              <div class="item-props">
                <div class="prop-xy prop-row">
                  <div class="prop-col-labels">
                    <div class="prop-cell">x</div>
                    <div class="prop-cell">y</div>
                  </div>
                  <div class="prop-col-values">
                    <div class="prop-cell">125px</div>
                    <div class="prop-cell">268px</div>
                  </div>
                  <div class="prop-col-controls">
                    <Button :cta="() => {}" label="move" />
                  </div>
                </div>
                <div class="prop-styles prop-row">
                  <div class="prop-col-labels">
                    <div class="prop-cell">fill</div>
                    <div class="prop-cell">stroke</div>
                  </div>
                  <div class="prop-col-values">
                    <div class="prop-cell">#55FF22 20%</div>
                    <div class="prop-cell">#21C047 1px solid</div>
                  </div>
                </div>
                <div class="prop-time prop-row">
                  <div class="prop-col-labels">
                    <div class="prop-cell">from</div>
                    <div class="prop-cell">to</div>
                  </div>
                  <div class="prop-col-values">
                    <div class="prop-cell">
                      {{ canvasItem.visible.from }}
                    </div>
                    <div class="prop-cell">{{ canvasItem.visible.to }}</div>
                  </div>
                  <div class="prop-col-controls">
                    <div class="prop-cell">
                      <Button :cta="() => {}" label="now" />
                      <Button :cta="() => {}" label="move" />
                    </div>
                    <div class="prop-cell">
                      <Button :cta="() => {}" label="now" />
                      <Button :cta="() => {}" label="move" />
                    </div>
                  </div>
                </div>

                <div class="prop-nodes-animation prop-row">
                  <input
                    type="checkbox"
                    id="checkbox"
                    v-model="canvasItem.animateNodes"
                  />
                  <label for="checkbox">Animate nodes</label>
                </div>
              </div>
              <div class="item-node-section-title">Nodes</div>
              <div class="item-node-blocks-container closed">
                <div
                  class="item-node_block"
                  :key="'item-edit_' + canvasItem.name"
                  v-for="nodeItem in canvasItem.nodes"
                >
                  <div class="item-sub-header">
                    <div class="decoration"></div>
                    <div class="icon"><IconCircle h="20" /></div>
                    <div class="label">{{ nodeItem.id }}</div>
                    <div class="menu">
                      <Button :cta="() => {}" label="add frame" />
                      <Button :cta="() => {}" label="..." />
                    </div>
                    <div class="collapsable"></div>
                  </div>
                  <div class="item-node_block-body">
                    <div
                      :key="'frame'"
                      v-for="frameItem in nodeItem.frames"
                      class="node-frame-block"
                    >
                      <div class="item-sub-header">
                        <div class="decoration"></div>
                        <div class="icon"><IconPics h="20" /></div>
                        <div class="label">{{ frameItem.time }}</div>
                        <div class="menu">
                          <Button :cta="() => {}" label="move" />
                          <Button :cta="() => {}" label="now" />
                          <Button :cta="() => {}" label="..." />
                        </div>
                      </div>
                      <div class="node-frame-block-body">
                        <div class="prop-xy prop-row">
                          <div class="prop-col-labels">
                            <div class="prop-cell">x</div>
                            <div class="prop-cell">y</div>
                          </div>
                          <div class="prop-col-values">
                            <div class="prop-cell">{{ frameItem.x }}px</div>
                            <div class="prop-cell">{{ frameItem.x }}px</div>
                          </div>
                          <div class="prop-col-controls">
                            <Button :cta="() => {}" label="move" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div v-if="tab_active === 'Markers'" class="tab-content-container">
          tab
        </div>
      </div>
    </div>
  </div>
</template>