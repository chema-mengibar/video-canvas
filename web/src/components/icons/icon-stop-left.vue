<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >
    <path :fill="c" d="M11.832 14.976L7.05603 12L11.832 9.02399V10.776H19.824V13.272H11.832V14.976ZM4.17603 14.976V9.02399H6.48003V14.976H4.17603Z" />
  </svg>
</template>
<script>
export default {
  name: 'StopLeft',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>