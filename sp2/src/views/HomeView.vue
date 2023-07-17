<template>
  <div class="embed-container">
    <iframe id="inlineFrameExample"
      width="100%"
      height="500px"
      title="Inline Frame Example"
      src="http://192.168.1.63:3002/"
      frameborder="0"
      border="0"
      allowtransparency="true"
      scrolling="no">
    </iframe>
  </div>


</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
  /* iframe {
      max-width: 100%;
      height: auto;
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .embed-container iframe {
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
  } */
</style>
