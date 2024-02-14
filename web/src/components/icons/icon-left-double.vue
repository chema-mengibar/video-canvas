<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c"  d="M8.92803 11.46L4.17603 8.484L8.92803 5.508V7.236H19.824V9.732H8.92803V11.46ZM8.92803 18.492L4.17603 15.516L8.92803 12.54V14.268H19.824V16.764H8.92803V18.492Z" />
  </svg>
</template>
<script>
export default {
  name: 'LeftDouble',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>