<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M11.994 16.47L7.53003 12.006L11.994 7.53L16.47 12.006L11.994 16.47Z"/>
  </svg>
</template>
<script>
export default {
  name: 'Pics',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>