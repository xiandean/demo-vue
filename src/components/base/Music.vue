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
                isPlay: false,
                isTouched: false,
            }
        },
        props: {
            src: {
                type: String
            }
        },
        methods: {
            togglePlay () {
                if (!this.isTouched) {
                    this.cancelEvents()
                }
                if (!this.isPlay) {
                    this.play()
                } else {
                    this.pause()
                }
            },
            play () {
                this.$refs.bgMusic.play()
                this.isPlay = true
            },
            pause () {
                this.$refs.bgMusic.pause()
                this.isPlay = false
            },
            cancelEvents () {
                this.isTouched = true
                document.removeEventListener('touchstart', this.touchPlay)
            },
            touchPlay () {
                if (this.autoplay && this.$refs.bgMusic.paused) {
                    this.play()
                }
                this.cancelEvents()
            }
        },
        mounted () {
            if (this.autoplay) {
                this.isPlay = true
            }
            document.addEventListener('touchstart', this.touchPlay, false)
        }
    }
</script>
<style lang="scss" scoped>
    .music {
        width: 60px;
        height: 60px;
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 9999;
        background: url("http://guangdong.sinaimg.cn/subject/2016/1027/assets/images/music_icon.png") center center no-repeat;
        background-size: cover;
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
