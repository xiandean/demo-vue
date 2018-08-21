module.exports = {
	plugins: {
		'autoprefixer': {},
		'postcss-adaptive': {
		    remUnit: 75,
		    baseDpr: 2,
		    remPrecision: 6,
		    hairlineClass: 'hairlines',
		    autoRem: true
		}
	}
}
