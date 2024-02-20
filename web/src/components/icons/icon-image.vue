<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="$options.name"
    :width="w" 
    :height="h" 
    :viewBox="`0 0 24 24`" 
  >

<path fill-rule="evenodd" clip-rule="evenodd" d="M5.46143 7.69617H18.5383V16.3038H5.46143V7.69617ZM14.6158 10.692C14.6158 11.1006 14.2845 11.4319 13.8759 11.4319C13.4672 11.4319 13.136 11.1006 13.136 10.692C13.136 10.2833 13.4672 9.95209 13.8759 9.95209C14.2845 9.95209 14.6158 10.2833 14.6158 10.692ZM6.64429 14.9643C7.06429 14.3533 8.82421 12.5457 9.65161 11.7183L12.2769 14.2482L14.5205 13.0071L16.955 14.9643L6.64429 14.9643Z" :fill="c"/>



  </svg>
</template>
<script>
export default {
  name: 'Image',
  props: {
    w: { type: [Number, String], default: 24 },
    h: {type: [Number, String], default: 24 },
    c: {type: String, default: 'currentColor'}
  }
}
</script>