<template>
    <div class="mod-orient-layer">
        <div class="mod-orient-layer__content">
            <i class="icon mod-orient-layer__icon-orient"></i>
            <div class="mod-orient-layer__desc">{{msg}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: '为了更好的体验，请使用竖屏浏览！'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mod-orient-layer {
        display: none;
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #000;
        z-index: 999;
        .mod-orient-layer__content {
            position: absolute;
            width: 100%;
            top: 45%;
            margin-top: -75px;
            text-align: center;
        }

        .mod-orient-layer__icon-orient {
            background-image: url("http://n.sinaimg.cn/gd/zt/orient.png");
            display: inline-block;
            width: 67px;
            height: 109px;
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -webkit-animation: rotation infinite 1.5s ease-in-out;
            animation: rotation infinite 1.5s ease-in-out;
            -webkit-background-size: 67px;
            background-size: 67px;
        }

        .mod-orient-layer__desc {
            margin-top: 20px;
            font-size: 15px;
            color: #fff;
        }
    }

    @keyframes rotation {
        10% {
            transform: rotate(90deg);
        }
        50%, 60% {
            transform: rotate(0deg);
        }
        90% {
            transform: rotate(90deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    @media screen and (min-aspect-ratio: 13 / 9) {
        .mod-orient-layer {
            display: block;
            z-index: 999;
        }
    }
</style>
