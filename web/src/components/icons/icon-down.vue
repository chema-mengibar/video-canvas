<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >

<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2657 15.1342L5.91062 10.0013L7.28243 8.30288L12.2477 12.3133L17.0878 8.30092L18.4812 9.98174L12.2657 15.1342Z"  :fill="c" />
/>



  </svg>
</template>
<script>
export default {
  name: 'Down',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>