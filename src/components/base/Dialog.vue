<template>
	<transition name="dialog-fade">
		<div class="dialog" v-show="showFlag">
			<div class="dialog-wrapper">
				<div class="dialog-content">
					<h3 class="dialog-title">{{title}}</h3>
					<p class="dialog-text" :class="{active: !title}">{{text}}</p>
					<div class="dialog-operate">
						<div v-if="cancelText" @touchstart="cancel" class="dialog-operate-btn left">{{cancelText}}</div>
						<div v-if="confirmText" @touchstart="confirm" class="dialog-operate-btn">{{confirmText}}</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: '弹窗标题'
			},
			text: {
				type: String,
				default: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
			},
			confirmText: {
				type: String,
				default: '主操作'
			},
			cancelText: {
				type: String,
				default: '辅助操作'
			}
		},
		data () {
			return {
				showFlag: false
			}
		},
		methods: {
			show () {
				this.showFlag = true
			},
			hide () {
				this.showFlag = false
			},
			cancel () {
				this.hide()
				this.$emit('cancel')
			},
			confirm () {
				this.hide()
				this.$emit('confirm')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.dialog {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 99999;
		background-color: rgba(0, 0, 0, 0.3);
		&.dialog-fade-enter-active {
			animation: dialog-fadein 0.3s;
			.dialog-content {
				animation: dialog-zoomin 0.3s;
			}
		}
		&.dialog-fade-leave-active {
			animation: dialog-fadeout 0.3s;
			.dialog-content {
				animation: dialog-zoomout 0.3s;
			}
		}
		.dialog-wrapper {
			width: 80%;
			max-width: 600px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			.dialog-content {
				border-radius: 6px;
				background: #FFFFFF;
				text-align: center;
				.dialog-title {
					font-size: 36px;
					font-weight: normal;
					color: #353535;
					line-height: 46px;
					padding: 1.6em 1.6em 0.5em;
				}
				.dialog-text {
					font-size: 30px;
					color: #808080;
					line-height: 40px;
					min-height: 80px;
					padding: 0 1.6em 1.6em;
					&.active {
						color: #353535;
					}
				}
				.dialog-operate {
					position: relative;
					display: flex;
					align-items: center;
					line-height: 96px;
    				font-size: 36px;
					.dialog-operate-btn {
						flex: 1;
						color: #353535;
						position: relative;
						&:nth-child(2) {
							&:after {
							    content: " ";
							    position: absolute;
							    left: 0;
							    top: 0;
							    width: 2px;
							    bottom: 0;
							    border-left: 2px solid #D5D5D6;
							    color: #D5D5D6;
							    transform-origin: 0 0;
							    transform: scaleX(0.5);
							}
						}
						&:last-child {
							color: #09BB07;
						}
					}
					&:after {
					    content: " ";
					    position: absolute;
					    left: 0;
					    top: 0;
					    right: 0;
					    height: 2px;
					    border-top: 2px solid #D5D5D6;
					    color: #D5D5D6;
					    transform-origin: 0 0;
					    transform: scaleY(0.5);
					}
				}
			}
		}
	}
	@keyframes dialog-fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes dialog-zoomin {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes dialog-fadeout {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes dialog-zoomout {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(0);
		}
	}
</style>
