<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M8.92803 14.976L4.17603 12L8.92803 9.02399V10.776H19.824V13.272H8.92803V14.976Z" />
  </svg>
</template>
<script>
export default {
  name: 'Left',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>