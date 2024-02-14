<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path  :fill="c" d="M12 14.472L10.512 12.084H11.364V8.08801H12.612V12.084H13.488L12 14.472ZM10.512 15.912V14.76H13.488V15.912H10.512Z" />
  </svg>
</template>
<script>
export default {
  name: 'StopBottom',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>