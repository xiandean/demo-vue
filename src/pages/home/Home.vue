<template>
	<div class="home">
		<v-dialog ref="dialog" @confirm="showToast"></v-dialog>
		<toast ref="toast" type="success" tip="删除成功" :time="2000" @done="showDialog"></toast>
	</div>
</template>

<script>
	import VDialog from 'components/base/Dialog'
	import Toast from 'components/base/Toast'

	export default {
		components: {
			VDialog,
			Toast,
		},
		methods: {
			showDialog () {
				this.$refs.dialog.show()
			},
			showToast () {
				this.$refs.toast.show()
			},
			onLotteryDone (result) {
				console.log(result)
			},
			loadData() {
        		console.log('loadData')
      		}
		},
		mounted () {
			this.showDialog()
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100%;
		height: 100%;
		position: relative;
	}
</style>
