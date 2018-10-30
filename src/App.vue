<template>
    <div id="app">
        <!-- <router-view/> -->
        <loading v-show="currentPage === 'loading'" @complete="onLoadComplete"></loading>
        <home v-show="currentPage === 'home'"></home>

        <orient-layer></orient-layer>
        <!-- <music ref="music" :src="require('common/music/bg.mp3')"></music> -->
    </div>
</template>

<script>
    import Loading from 'pages/loading/Loading'
    import Home from 'pages/home/Home'
    import Music from 'components/base/Music'
    import OrientLayer from 'components/base/OrientLayer'

    import weixin from 'api/weixin'

    export default {
        name: 'app',
        data () {
            return {
                currentPage: 'loading'
            }
        },
        methods: {
            onLoadComplete () {
                setTimeout(() => {
                    this.currentPage = 'home'
                }, 1000)
            }
        },
        mounted () {
            weixin.getConfig().then(() => {
                weixin.setShare({
                    // link: '',
                    title: '分享标题', // 分享标题
                    desc: '分享描述', // 分享描述
                    imgUrl: 'http://n.sinaimg.cn/gd/xiaopiqi/answer/weixin_share.jpg', // 分享图标
                    // callback: function () {}, // 分享成功回调
                })
                this.$refs.music.play()
            })
        },
        components: {
            Loading,
            Home,
            OrientLayer,
            Music
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
