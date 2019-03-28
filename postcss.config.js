module.exports = {
	plugins: {
		'autoprefixer': {},
		'postcss-px2rem-exclude': {
	      	remUnit: 100,
	      	baseDpr: 2,
		    remPrecision: 6,
	      	exclude: /node_modules/i
	    },
		// 'postcss-adaptive': {
		//     remUnit: 75,
		//     baseDpr: 2,
		//     remPrecision: 6,
		//     hairlineClass: 'hairlines',
		//     autoRem: true
		// }
	}
}
