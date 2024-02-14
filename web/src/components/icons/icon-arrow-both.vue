<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M8.52591 14.502L6.30591 11.994L8.52591 9.49799H9.32991L7.45791 11.646H16.5419L14.6699 9.49799H15.4739L17.6939 11.994L15.4739 14.502H14.6699L16.5419 12.342H7.45791L9.32991 14.502H8.52591Z" />
  </svg>
</template>
<script>
export default {
  name: 'ArrowBoth',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>