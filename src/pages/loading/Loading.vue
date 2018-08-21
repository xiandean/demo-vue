<template>
    <transition name="fade">
        <div class="loading page">
            <div class="loading-box">
                <div class="loading-progress">
                    <div class="loading-bar" :style="'-webkit-transform: translate(' + progress + '%, 0)'"></div>
                </div>
                <div class="loading-text">{{loadingText}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {loadImages} from 'common/js/util.js'
    import images from './manifest'

    export default {
        data () {
            return {
                progress: 0
            }
        },
        computed: {
            loadingText () {
                return this.progress + '%'
            }
        },
        methods: {
            onProgress (progress) {
                this.progress = progress
                console.log(this.progress)
            },
            onComplete (result) {
                console.log(result)
                this.$emit('complete')
            }
        },
        created () {
            loadImages({images, onProgress: this.onProgress, onComplete: this.onComplete})
        }
    }
</script>

<style lang="scss" scoped>
    .loading-box {
        width: 197px;
        height: 146px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -98px;
        margin-top: -73px;
        .loading-progress {
            width: 100%;
            height: 10px;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            transform: translate3d(0, 0, 0);
            background-color: #000;
            .loading-bar {
                width: 100%;
                height: 100%;
                position: absolute;
                left: -100%;
                top: 0;
                border-radius: 10px;
                background-color: #f00;
            }
        }
        .loading-text {
            width: 100%;
            line-height: 60px;
            font-size: 34px;
            color: #fff;
            font-weight: bolder;
            letter-spacing: 1px;
            text-align: center;
            -webkit-text-stroke: 1px #000;
        }
    }
</style>
