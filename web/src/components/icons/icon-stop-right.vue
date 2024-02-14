<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M12.168 14.976V13.272H4.17603V10.776H12.168V9.02399L16.944 12L12.168 14.976ZM17.52 14.976V9.02399H19.824V14.976H17.52Z"/>
  </svg>
</template>
<script>
export default {
  name: 'StopRight',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>