<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path  :fill="c"  d="M15.072 11.46V9.732H4.17603V7.236H15.072V5.508L19.824 8.484L15.072 11.46ZM15.072 18.492V16.764H4.17603V14.268H15.072V12.54L19.824 15.516L15.072 18.492Z" />
  </svg>
</template>
<script>
export default {
  name: 'RightDouble',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>