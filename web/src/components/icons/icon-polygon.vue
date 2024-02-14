<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M7.10205 11.8493L15.5417 5.82095L16.8981 10.7943L12.2261 18.179L7.10205 11.8493Z"/>
  </svg>
</template>
<script>
export default {
  name: 'Polygon',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>