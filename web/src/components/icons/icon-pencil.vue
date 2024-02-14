<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M9.54025 16.2608L9.29438 13.8601L13.2363 7.0326L15.6841 8.44585L11.7422 15.2734L9.54025 16.2608Z" />
  </svg>
</template>
<script>
export default {
  name: 'Pencil',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>