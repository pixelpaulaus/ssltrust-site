<template>
    <div>
      <video ref="videoPlayer" class="video-js"></video>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  const defaults = {
    autoplay: true,
    controls: true,
    fluid: true, 
  }
  export default {
    name: 'VideoPlayer',
    props: {
      options: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        player: null
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, {...defaults, ...this.options}, () => {
        this.player.log('onPlayerReady', this)
      });
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
  </script>