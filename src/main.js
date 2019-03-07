import Vue from 'vue'
import App from './App.vue'
// import router from 'router/index'
// import store from './store'

import 'amfe-flexible'

import 'common/scss/common.scss'

import fastclick from 'fastclick'

fastclick.attach(document.body)

document.addEventListener('touchmove', (e) => {
	e.preventDefault()
}, {
	passive: false
})

Vue.config.productionTip = false

//                   _ooOoo_ 
//                  o8888888o 
//                  88" . "88 
//                  (| -_- |) 
//                   O\ = /O 
//               ____/`---'\____ 
//               . ' \\| |// `. 
//              / \\||| : |||// \ 
//            / _||||| -:- |||||- \ 
//              | | \\\ - /// | | 
//            | \_| ''\---/'' | | 
//             \ .-\__ `-` ___/-. / 
//          ___`. .' /--.--\ `. . __ 
//       ."" '< `.___\_<|>_/___.' >'"". 
//      | | : `- \`.;`\ _ /`;.`/ - ` : | | 
//        \ \ `-. \_ __\ /__ _/ .-` / / 
// ======`-.____`-.___\_____/___.-`____.-'====== 
//                   `=---=' 
// 

// ............................................. 

let vue = new Vue({
    // router,
    // store,
    render: h => h(App)
}).$mount('#app')
