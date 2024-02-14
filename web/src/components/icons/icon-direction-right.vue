<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M13.5359 15.246V14.202H8.08789V8.754H9.32389V12.966H13.5359V11.922L15.9119 13.578L13.5359 15.246Z"/>
  </svg>
</template>
<script>
export default {
  name: 'DirectionRight',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>