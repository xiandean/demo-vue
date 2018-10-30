<template>
	<div class="award-machine">
        <div class="award-rotate" :style="rotateStyle" @transitionend="onTransitionEnd"></div>
        <div class="award-machine-cover"></div>
        <div class="award-point" @touchstart="play"></div>
    </div>
</template>

<script>
	import { getRandomInt } from 'common/js/util.js'
	import stopData from './stopData.js'

	export default {
		data () {
			return {
				result: 1,
				curRotate: 0,
				duration: 0,
				locked: false,
			}
		},
		computed: {
			rotateStyle () {
				let transform = `rotate(${this.curRotate}deg)`
				let transition = this.duration ? `all ${this.duration}s cubic-bezier(0.25,0.1,0.25,1) 0s` : 'none'
				return {
					transform,
					transition
				}
			}
		},
		methods: {
			async play () {
				if (this.locked) {
					return;
				}
				this.locked = true;
				this.result = await this.getResult()
				let data = stopData.none
				if (this.result === 1) {
					data = stopData.first
				}
				let area = data[getRandomInt(0, data.length - 1)]
				let rotate = getRandomInt(area.min, area.max)
				rotate += getRandomInt(4, 8) * 360
				rotate -= this.curRotate % 360
				this.duration = parseInt(rotate / 450 * 10) / 10
				this.curRotate += rotate
			},
			async getResult () {
				return this.result
				// try {
		        //     return await projectApi.getAward()
		        // } catch (err) {
		        //     console.log(err)
		        //     return 0
		        // }
			},
			onTransitionEnd () {
				setTimeout(() => {
	                this.handleResult()
	            }, 1000)
			},
			handleResult (result) {
				if (!result) {
					setTimeout(() => {
			            this.reset()
			        }, 500)
				}
				let curResult = result || this.result
				this.$emit('done', curResult)
			},
			reset () {
		        // this.curRotate = 0
		        // this.duration = 0

		        this.locked = false
		    },
		}
	}
</script>

<style lang="scss" scoped>
	.award-machine {
	    width: 630px;
	    height: 740px;
	    position: absolute;
	    left: 26px;
	    top: 152px;
	    .award-machine-cover {
	        width: 100%;
	        height: 100%;
	        position: absolute;
	        left: 0;
	        top: 0;
	        background: url("http://n.sinaimg.cn/gd/1018/picc/69/award_machine_cover.png") no-repeat;
	        background-size: 100%;
	    }
	    .award-rotate {
	        width: 472px;
	        height: 490px;
	        position: absolute;
	        left: 71px;
	        top: 70px;
	        background: url("http://n.sinaimg.cn/gd/1018/picc/69/award_rotate_new.png") no-repeat;
	        background-size: 100%;
	        transform: rotate(0deg);
	    }
	    .award-point {
	        width: 180px;
	        height: 187px;
	        position: absolute;
	        left: 216px;
	        top: 215px;
	        background: url("http://n.sinaimg.cn/gd/1018/picc/69/award_point.png") no-repeat;
	        background-size: 100%;
	    }
	}
</style>