<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><h3>第一页</h3></swiper-slide>
    <swiper-slide><h3>第二页</h3></swiper-slide>
    <swiper-slide><h3>第三页</h3></swiper-slide>
    <swiper-slide><h3>第四页</h3></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<style lang="scss" scoped>
	.swiper-container {
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'swiperDemo',
		data() {
			return {
				swiperOption: {
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
					// ...
					// navigation: {
				 //      	nextEl: '.swiper-button-next',
				 //      	prevEl: '.swiper-button-prev',
				 //    },
				 	direction: 'vertical',
					width: window.innerWidth,
					height: window.innerHeight,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			console.log('this is current swiper instance object', this.swiper)
			// this.swiper.slideTo(3, 1000, false)
		},
		components: {
			swiper,
			swiperSlide,
		}
	}
</script>