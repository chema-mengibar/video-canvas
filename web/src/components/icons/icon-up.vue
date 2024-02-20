<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >

<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1261 8.30093L18.4812 13.4339L17.1094 15.1323L12.1441 11.1219L7.304 15.1343L5.91064 13.4534L12.1261 8.30093Z" :fill="c"/>



  </svg>
</template>
<script>
export default {
  name: 'Up',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>