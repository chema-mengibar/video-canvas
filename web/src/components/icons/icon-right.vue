<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path  :fill="c"  d="M15.072 14.976V13.272H4.17603V10.776H15.072V9.02399L19.824 12L15.072 14.976Z" />
  </svg>
</template>
<script>
export default {
  name: 'Right',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>