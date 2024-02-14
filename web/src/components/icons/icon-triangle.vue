<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M8.5918 15.852V8.14801L15.4078 12L8.5918 15.852Z" />
  </svg>
</template>
<script>
export default {
  name: 'Triangle',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>