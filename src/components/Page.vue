<template>
	<transition name="fade">
		<div class="page" v-show="active">
		  	<slot></slot>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				active: false
			}
		},
		methods: {
			show() {
				this.active = true
				this.$emit('onShow')
			},
			hide() {
				this.active = false
				this.$emit('onHide')
			}
		}
	}
</script>

<style lang="scss">
	.page {
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    left: 0;
	    top: 0;
	}

	.fade-enter-active {
		animation: fadein 0.3s;
	}

	.fade-leave-active {
		animation: fadeout 0.3s;
	}

	@keyframes fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeout {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>