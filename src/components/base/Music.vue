<template>
  <div class="music" :class="{active: isPlay}" @touchstart.stop="togglePlay">
    <audio id="bgMusic" ref="bgMusic" :autoplay="autoplay" loop :src="src"></audio>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        autoplay: true,
        isPlay: true
      }
    },
    props: {
      src: {
        type: String
      }
    },
    methods: {
      togglePlay () {
        this.autoplay = false
        this.isPlay = !this.isPlay
        if (this.isPlay) {
          this.$refs.bgMusic.play()
        } else {
          this.$refs.bgMusic.pause()
        }
      },
      play () {
        this.$refs.bgMusic.play()
      },
      cancelEvents () {
        document.removeEventListener('touchstart', this.touchPlay)
        document.removeEventListener('touchend', this.play)
      },
      touchPlay () {
        let bgMusic = this.$refs.bgMusic
        if (this.autoplay && bgMusic.paused) {
          this.$refs.bgMusic.play()
          if (bgMusic.paused) {
            document.addEventListener('touchend', this.play, false)
          }
        }
        this.cancelEvents()
      }
    },
    mounted () {
      document.addEventListener('touchstart', this.touchPlay, false)
    }
  }
</script>
<style lang="scss" scoped>
  .music {
    width: 70px;
    height: 70px;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9999;
    background: url("http://guangdong.sinaimg.cn/subject/2016/1027/assets/images/music_icon.png") center center no-repeat;
    &.active {
      animation: music 4s linear infinite;
    }
    @keyframes music {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
