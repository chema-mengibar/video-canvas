<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path d="M8.41211 15.588V8.41199H15.5881V15.588H8.41211Z" :fill="c"/>
  </svg>
</template>
<script>
export default {
  name: 'Dummy',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>