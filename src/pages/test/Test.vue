<template>
    <div class="page">
        <v-dialog ref="dialog" title="" text="确定删除吗？" confirmText="确定" cancelText="取消" @confirm="deleteSomething" @cancel="cancelSomething"></v-dialog>
        <toast ref="toastLoading" tip="取消中" type="loading" :time="2000" @done="doneSomething"></toast>
        <toast ref="toastSuccess" tip="成功" type="success" :time="2000"></toast>
    </div>
</template>

<script>
    import weixin from 'api/weixin'
    import weibo from 'api/weibo'
    import doubleBind from 'api/doubleBind'
    import Dialog from 'components/base/Dialog'
    import Toast from 'components/base/Toast'

    export default {
        components: {
            VDialog: Dialog,
            Toast
        },
        methods: {
            deleteSomething () {
                console.log('delete')
                this.$refs.toastSuccess.show()
            },
            cancelSomething () {
                console.log('cancel')
                this.$refs.toastLoading.show()
            },

            doneSomething () {
                this.$refs.toastSuccess.show()
            },
        },
        async mounted () {

            weixin.getConfig().then(() => {
                this.$refs.music.play()

                weixin.setShare({
                    title: '分享标题', // 分享标题
                    desc: '分享描述', // 分享描述
                    imgUrl: 'http://n.sinaimg.cn/gd/xiaopiqi/answer/weixin_share.jpg' // 分享图标
                    // callback: '', // 分享成功回调
                })
            })

            setTimeout(() => {
                this.$refs.dialog.show()
            }, 2000)

            // let openid = await weixin.getOpenid()
            // console.log(openid)

            // let user = await weixin.getUserInfo()
            // console.log(user)

            // let user = await doubleBind()
            // console.log(user)
        }
    }
</script>
